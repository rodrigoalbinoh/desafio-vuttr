import React, { useState, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { debounce } from 'lodash';
import api from '../../services/api';

import * as S from './styles';
import SearchInput from '../../components/SearchInput';
import ModalAddTool from '../../components/ModalAddTool';

interface Tool {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface ToolData {
  title: string;
  description: string;
  link: string;
  tags: string;
}
const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [tools, setTools] = useState<Tool[]>();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadTools = async (): Promise<void> => {
      const response = await api.get('tools');

      if (response.data) {
        setTools(response.data);
      }
    };

    loadTools();
  }, []);

  const handleAddTool = async (tool: ToolData): Promise<void> => {
    console.log(tool);
    const tags = tool.tags.split(' ');
    console.log(tags);
  };
  return (
    <>
    <S.Container>
      <header>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </header>
      <main>
        <S.FormContainer>
          <Form onSubmit={() => console.log('oi')} ref={formRef}>
            <div className="input">
              <SearchInput name="search" placeholder="search" />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="checkbox-search-tags"
                id="search-tags"
              />
              <label htmlFor="search-tags">search in tags only</label>
            </div>
          </Form>
          <div className="action-buttons">
            <button type="button">+ Add</button>
          </div>
        </S.FormContainer>
        <S.ToolsContainer>
          {tools?.map((tool) => (
            <S.Tool key={tool.id}>
              <div className="tool-header">
                <a href={tool.link}>{tool.title}</a>
                <button type="button">x remove</button>
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
    </>
  );
};

export default Dashboard;
