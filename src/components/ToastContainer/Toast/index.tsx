import React, { useEffect } from 'react';

import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Warning } from '../../../assets/icons/warning.svg';
import { ReactComponent as Error } from '../../../assets/icons/error.svg';
import { ReactComponent as Success } from '../../../assets/icons/success.svg';
import { ReactComponent as Info } from '../../../assets/icons/info.svg';

import { Container } from './styles';

import { ToastMessage, useToast } from '../../../hooks/useToast';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  neutral: '',
  info: <Info />,
  warning: <Warning />,
  success: <Success />,
  error: <Error />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || 'neutral']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button
        type="button"
        className="toast--close"
        onClick={() => {
          removeToast(message.id);
        }}
      >
        <Close />
      </button>
    </Container>
  );
};

export default Toast;
