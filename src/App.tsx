import React, {useEffect, useState} from 'react';
import {Button} from './Button';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [previous, setPrevious] = useState('');
  const [current, setCurrent] = useState('');
  const [operator, setOperator] = useState('');

  useEffect(() => {
    if (current !== '' && operator !== '') {
      const solution = String(calculate(operator, parseFloat(previous), parseFloat(current)));
      if (solution === 'NaN') {
        setInput('0');
      } else {
        setInput(solution);
      }
      setOperator('');
      setCurrent('');
    }
  }, [current, operator, previous]);

  const calculate = (operator: string, x: number, y: number) => {
    switch(operator) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '/':
        return x / y;
      case '*':
        return x * y;
    }
  };

  const handleClick = (e: string) => {
    if (e === "+" || e === "-" || e === "/" || e === "*") {
      setOperator(e);
    } else {
      setInput(input + e);
    }
  };

  const operation = (e: string) => {
    setPrevious(input);
    setInput('');
    setOperator(e);
  };

  const addZeroToInput = (e: string) => {
    if (input !== '') {
      setInput(input + e);
    }
  };

  const addDecimalToInput = (e: string) => {
    if (input.indexOf('.') === -1) {
      setInput(input + e);
    }
  };

  const clear = () => {
    setInput('');
    setPrevious('');
    setCurrent('');
    setOperator('');
  };

  const solve = () => {
    setCurrent(input);
  };

  return (
    <div className="App">
      <div className="calculator-display">{input || '0'}</div>
      <div className="buttons-grid">
        <div className="grid-row">
          <div className="placeholder"></div>
          <Button handleClick={handleClick} text={'7'} />
          <Button handleClick={handleClick} text={'8'} />
          <Button handleClick={handleClick} text={'9'} />
          <Button handleClick={operation} text={'/'} />
        </div>
        <div className="grid-row">
          <div className="placeholder"></div>
          <Button handleClick={handleClick} text={'4'} />
          <Button handleClick={handleClick} text={'5'} />
          <Button handleClick={handleClick} text={'6'} />
          <Button handleClick={operation} text={'*'} />
        </div>
        <div className="grid-row">
          <div className="placeholder"></div>
          <Button handleClick={handleClick} text={'3'} />
          <Button handleClick={handleClick} text={'2'} />
          <Button handleClick={handleClick} text={'1'} />
          <Button handleClick={operation} text={'-'} />
        </div>
        <div className="grid-row">
          <button className="clearButton" onClick={() => clear()}>AC</button>
          <Button handleClick={addZeroToInput} text={'0'} />
          <Button handleClick={addDecimalToInput} text={'.'} />
          <button className="equalsButton" onClick={() => solve()}>=</button>
          <Button handleClick={operation} text={'+'} />
        </div>
      </div>
    </div>
  );
};

export default App;
