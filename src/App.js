import React, { Component } from 'react';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  };
};

export default App;
