import React from 'react';

interface Props {
  handleClick: Function,
  text: string,
};

export const Button: React.FC<Props> = ({ handleClick, text }) => {

  const textToSymbol = (t: string) => {
    switch(t) {
      case '/':
        return '÷'
      case '*':
        return '×'
      default:
        return t
    };
  };

  return (
    <button className="calculatorButton" onClick={() => handleClick(text)}>
      <div>{textToSymbol(text)}</div>
    </button>
  );
}
