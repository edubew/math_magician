import React from 'react';

const Calculator = () => {
  return (
   <div className='calculator-grid'>
    <div className='output'>0</div>
    <button>AC</button>
    <button>+/-</button>
    <button>%</button>
    <button className='orange-btn'>÷</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button className='orange-btn'>X</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button className='orange-btn'>-</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button className='orange-btn'>+</button>
    <button className='span-two'>0</button>
    <button>.</button>
    <button className='orange-btn'>=</button>
   </div>
  );
}

export default Calculator;
