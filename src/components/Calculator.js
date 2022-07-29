import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [currentState, setState] = useState(0);

  const eventHandler = (e) => {
    const value = e.target.textContent;
    setState((currentState) => calculate(currentState, value));
  };

  const { next, total, operation } = currentState;
  const result = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
  return (
    <div className="calculator-container">
      <h2>Lets do some Maths</h2>
      <div className="calculator-grid">
        <div className="output">
          <span>{result}</span>
        </div>
        <button type="submit" onClick={eventHandler}>
          AC
        </button>
        <button type="submit" onClick={eventHandler}>
          +/-
        </button>
        <button type="submit" onClick={eventHandler}>
          %
        </button>
        <button type="submit" onClick={eventHandler} className="orange-btn">
          ÷
        </button>
        <button type="submit" onClick={eventHandler}>
          7
        </button>
        <button type="submit" onClick={eventHandler}>
          8
        </button>
        <button type="submit" onClick={eventHandler}>
          9
        </button>
        <button type="submit" onClick={eventHandler} className="orange-btn">
          x
        </button>
        <button type="submit" onClick={eventHandler}>
          4
        </button>
        <button type="submit" onClick={eventHandler}>
          5
        </button>
        <button type="submit" onClick={eventHandler}>
          6
        </button>
        <button type="submit" onClick={eventHandler} className="orange-btn">
          -
        </button>
        <button type="submit" onClick={eventHandler}>
          1
        </button>
        <button type="submit" onClick={eventHandler}>
          2
        </button>
        <button type="submit" onClick={eventHandler}>
          3
        </button>
        <button type="submit" onClick={eventHandler} className="orange-btn">
          +
        </button>
        <button type="submit" onClick={eventHandler} className="span-two">
          0
        </button>
        <button type="submit" onClick={eventHandler}>
          .
        </button>
        <button type="submit" onClick={eventHandler} className="orange-btn">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
