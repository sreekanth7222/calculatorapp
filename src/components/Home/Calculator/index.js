import { Component} from 'react';
import {evaluate} from 'mathjs'
import './index.css';

class Calculator extends Component {
  state = {display:'0'}

  // This function handles all button clicks
   handleClick = (value) => {
    const {display} = this.state
    if (value === 'C') {
      // Clear the display
      this.setState({display:'0'})
    } else if (value === '=') {
      // Evaluate the expression using eval()
      // Note: eval() can be a security risk in other contexts, but is safe here
      // as the input is controlled by our buttons.
      try {
        
        this.setState(prevState =>({display: evaluate(prevState.display).toString()}));
      } catch {
        this.setState({display:"Error"});
      }
    } else {
      
      if (display === '0' || display === 'Error') {
        if('0123456789.'.includes(value)){
          this.setState({display:value})
        }
      } else {
        
        this.setState(prevState =>({display : prevState.display + value}))
      }
    }
  };
  render(){
    const {display} = this.state
  return (
    <div className="calculator-container">
      <h1 className='calculator-heading'>Calculator</h1>
      <div className="calculator">
        
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => this.handleClick('C')} className="button clear span-two">C</button>
          <button onClick={() => this.handleClick('/')} className="button operator">/</button>
          <button onClick={() => this.handleClick('*')} className="button operator">*</button>
          
          <button onClick={() => this.handleClick('7')} className="button">7</button>
          <button onClick={() => this.handleClick('8')} className="button">8</button>
          <button onClick={() => this.handleClick('9')} className="button">9</button>
          <button onClick={() => this.handleClick('-')} className="button operator">-</button>

          <button onClick={() => this.handleClick('4')} className="button">4</button>
          <button onClick={() => this.handleClick('5')} className="button">5</button>
          <button onClick={() => this.handleClick('6')} className="button">6</button>
          <button onClick={() => this.handleClick('+')} className="button operator">+</button>

          <button onClick={() => this.handleClick('1')} className="button">1</button>
          <button onClick={() => this.handleClick('2')} className="button">2</button>
          <button onClick={() => this.handleClick('3')} className="button">3</button>
          <button onClick={() => this.handleClick('=')} className="button equals span-two-rows">=</button>
          
          <button onClick={() => this.handleClick('0')} className="button span-two">0</button>
          <button onClick={() => this.handleClick('.')} className="button">.</button>
        </div>
      </div>
    </div>
  );
}
};

export default Calculator;
