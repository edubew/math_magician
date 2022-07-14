import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function

const Calculator = () => {
  const [state, setState] = useState(0);
  // eslint-disable-next-line
  const [calculatorBtns, setArray] = useState(['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']);

  const handleClick = (e) => {
    const value = e.target.textContent;
    setState((state) => calculate(state, value));
   };
// export class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: 0,
//       next: null,
//       operation: null,
//     };
//   }

  // Event listenter
    eventHandler = (e) => {
      const value = e.target.textContent;
      this.setState((obj) => calculate(obj, value));
    };

    render() {
      const { next, total, operation } = this.state;
      const result = `${total || operation || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
      return (
        <div className="calculator-grid">
          <div className="output"><span>{result}</span></div>
          <button type="submit" onClick={this.eventHandler}>AC</button>
          <button type="submit" onClick={this.eventHandler}>+/-</button>
          <button type="submit" onClick={this.eventHandler}>%</button>
          <button type="submit" onClick={this.eventHandler} className="orange-btn">÷</button>
          <button type="submit" onClick={this.eventHandler}>7</button>
          <button type="submit" onClick={this.eventHandler}>8</button>
          <button type="submit" onClick={this.eventHandler}>9</button>
          <button type="submit" onClick={this.eventHandler} className="orange-btn">x</button>
          <button type="submit" onClick={this.eventHandler}>4</button>
          <button type="submit" onClick={this.eventHandler}>5</button>
          <button type="submit" onClick={this.eventHandler}>6</button>
          <button type="submit" onClick={this.eventHandler} className="orange-btn">-</button>
          <button type="submit" onClick={this.eventHandler}>1</button>
          <button type="submit" onClick={this.eventHandler}>2</button>
          <button type="submit" onClick={this.eventHandler}>3</button>
          <button type="submit" onClick={this.eventHandler} className="orange-btn">+</button>
          <button type="submit" onClick={this.eventHandler} className="span-two">0</button>
          <button type="submit" onClick={this.eventHandler}>.</button>
          <button type="submit" onClick={this.eventHandler} className="orange-btn">=</button>
        </div>
      );
    }
}

export default Calculator;
