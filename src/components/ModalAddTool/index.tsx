import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { ModalHeader, Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import TextArea from '../TextArea';

interface ToolData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTool: (tool: ToolData) => Promise<void>;
}

const ModalAddTool: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ToolData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Name is required.'),
          link: Yup.string().required('Link is required.'),
          tags: Yup.string(),
          description: Yup.string().required('Description is required.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        handleAddTool(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [handleAddTool],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalHeader>
        <PlusIcon />
        <strong>Add new tool</strong>
      </ModalHeader>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <div className="column-1">
            <Input name="title" label="Tool Name" />
          </div>
          <div className="column-1">
            <Input name="link" label="Tool Link" />
          </div>
          <div className="column-1">
            <TextArea name="description" label="Tool description" />
          </div>
          <div className="column-1">
            <Input name="tags" label="Tags" />
          </div>
        </div>
        <footer>
          <button type="submit">Add tool</button>
        </footer>
      </Form>
    </Modal>
  );
};

export default ModalAddTool;
