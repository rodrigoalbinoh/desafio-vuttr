import React from 'react';
import { ModalHeader, Content } from './styles';
import Modal from '../Modal';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import Button from '../Button';

interface ToolData {
  id: number;
  title: string;
}

interface ModalProps {
  isOpen: boolean;
  deletingTool: ToolData;
  setIsOpen: () => void;
  cancelRemoval: () => void;
  handleRemoveTool: (id: number) => Promise<void>;
}

const ModalRemoveTool: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  cancelRemoval,
  handleRemoveTool,
  deletingTool,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalHeader>
        <Close />
        <strong>Remove tool</strong>
      </ModalHeader>
      <Content>
        <div>
          <p>{`Are you sure you want to remove ${deletingTool.title}?`}</p>
        </div>
        <footer>
          <Button
            level="quartiary"
            variant="neutral"
            onClick={() => cancelRemoval()}
          >
            cancel
          </Button>
          <Button
            level="primary"
            variant="danger"
            onClick={() => handleRemoveTool(deletingTool.id)}
          >
            Yes, remove
          </Button>
        </footer>
      </Content>
    </Modal>
  );
};

export default ModalRemoveTool;
