import React, { useState, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import api from '../../services/api';

import * as S from './styles';
import SearchInput from '../../components/SearchInput';
import ModalAddTool from '../../components/ModalAddTool';
import useDebounce from '../../hooks/useDebounce';
import { useToast } from '../../hooks/useToast';
import ModalRemoveTool from '../../components/ModalRemoveTool';
import Button from '../../components/Button';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

interface Tool {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface DeletingTool {
  id: number;
  title: string;
}

interface ToolData {
  title: string;
  description: string;
  link: string;
  tags: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [tools, setTools] = useState<Tool[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchingTags, setSearchingTags] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deletingModalOpen, setDeletingModalOpen] = useState(false);
  const [deletingTool, setDeletingTool] = useState<DeletingTool>({
    id: 0,
    title: '',
  });

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { addToast } = useToast();

  useEffect(() => {
    const loadTools = async (): Promise<void> => {
      const response = await api.get('tools');

      if (response.data) {
        setTools(response.data);
      }
    };

    loadTools();
  }, []);

  useEffect(() => {
    const searchTools = async (): Promise<void> => {
      handleSearch(debouncedSearchTerm);
    };

    searchTools();
  }, [debouncedSearchTerm]);

  const handleSearch = async (term: string): Promise<void> => {
    const type = searchingTags ? 'tags_like' : 'q';

    const response = await api.get(`tools${term && `?${type}=${term}`}`);

    if (response.data) {
      setTools(response.data);
    }
  };

  const handleAddTool = async (tool: ToolData): Promise<void> => {
    const tags = tool.tags.split(' ');

    const response = await api.post('tools', {
      ...tool,
      tags,
    });

    if (response.data) {
      addToast({
        type: 'success',
        title: 'Success!',
        description: 'The tool was successfully created.',
      });

      setTools([...tools, response.data]);

      setModalOpen(false);
    }
  };

  const handleDelete = async (id: number): Promise<void> => {
    if (!id) {
      return;
    }

    const response = await api.delete(`tools/${id}`);

    if (response.status === 200) {
      const filteredTools = tools.filter((tool) => tool.id !== id);

      setTools(filteredTools);

      addToast({
        type: 'success',
        title: 'Success!',
        description: 'The tool was successfully deleted.',
      });
    }
  };

  function toogleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toogleDeletingModal(): void {
    setDeletingModalOpen(!deletingModalOpen);
  }

  return (
    <>
      <S.Container>
        <header>
          <h1>VUTTR</h1>
          <h2>Very Useful Tools to Remember</h2>
        </header>
        <main>
          <S.FormContainer>
            <Form
              onSubmit={() => {
                handleSearch(searchTerm);
              }}
              ref={formRef}
            >
              <div className="input">
                <SearchInput
                  name="search"
                  placeholder="search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="checkbox-search-tags"
                  id="search-tags"
                  onChange={() => {
                    setSearchingTags(!searchingTags);
                  }}
                  checked={searchingTags}
                />
                <label htmlFor="search-tags">search in tags only</label>
              </div>
            </Form>
            <div className="action-buttons">
              <Button
                type="button"
                level="primary"
                variant="neutral"
                onClick={toogleModal}
              >
                <PlusIcon />
                Add
              </Button>
            </div>
          </S.FormContainer>
          <S.ToolsContainer>
            {tools?.map((tool) => (
              <S.Tool key={tool.id}>
                <div className="tool-header">
                  <a href={tool.link}>{tool.title}</a>
                  <Button
                    type="button"
                    level="quartiary"
                    variant="danger"
                    onClick={() => {
                      setDeletingTool({
                        id: tool.id,
                        title: tool.title,
                      });

                      toogleDeletingModal();
                    }}
                  >
                    x remove
                  </Button>
                </div>
                <div className="tool-body">
                  <p>{tool.description}</p>
                </div>
                <div className="tool-footer">
                  <div className="tags">
                    {tool.tags.map((tag) => (
                      <span className="tool-tag">{`#${tag}`}</span>
                    ))}
                  </div>
                </div>
              </S.Tool>
            ))}
          </S.ToolsContainer>
        </main>
      </S.Container>

      <ModalAddTool
        isOpen={modalOpen}
        setIsOpen={toogleModal}
        handleAddTool={handleAddTool}
      />

      <ModalRemoveTool
        isOpen={deletingModalOpen}
        setIsOpen={toogleDeletingModal}
        deletingTool={deletingTool}
        handleRemoveTool={handleDelete}
        cancelRemoval={() => {
          setDeletingTool({
            id: 0,
            title: '',
          });
          toogleDeletingModal();
        }}
      />
    </>
  );
};

export default Dashboard;
