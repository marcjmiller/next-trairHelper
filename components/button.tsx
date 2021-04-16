import React from 'react';

interface OwnProps {
  text: string;
  action: () => void;
  testId?: string;
}

const Button = ({ text, action, testId }: OwnProps) => {
  const handleClick = () => {
    action();
  };

  return (
    <div className={'p-2 uppercase'} onClick={handleClick} data-testid={testId}>
      {text}
    </div>
  );
};

export default Button;
