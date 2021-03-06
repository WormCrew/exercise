import React, {Component} from 'react'
import CalculatorKey from './CalculatorKey'
import CalculatorDisplay from './CalculatorDisplay'

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

class Calculator extends Component {
  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false
  };
  
  clearAll() {
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    })
  }

  clearDisplay() {
    this.setState({
      displayValue: '0'
    })
  }
  
  clearLastChar() {
    const { displayValue } = this.state
    
    this.setState({
      displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
    })
  }
  
  toggleSign() {
    const { displayValue } = this.state
    const newValue = parseFloat(displayValue) * -1
    
    this.setState({
      displayValue: String(newValue)
    })
  }
  
  inputPercent() {
    const { displayValue } = this.state
    const currentValue = parseFloat(displayValue)
    
    if (currentValue === 0)
      return
    
    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100
    
    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2))
    })
  }
  
  inputDot() {
    const { displayValue } = this.state
    
    if (!(/\./).test(displayValue)) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    }
  }
  
  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state
    
    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }
  
  performOperation(nextOperator) {    
    const { value, displayValue, operator } = this.state
    const inputValue = parseFloat(displayValue)
    
    if (value == null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CalculatorOperations[operator](currentValue, inputValue)
      
      this.setState({
        value: newValue,
        displayValue: String(newValue)
      })
    }
    
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }
  
  handleKeyDown = (event) => {
    let { key } = event
    
    if (key === 'Enter')
      key = '='
    
    if ((/\d/).test(key)) {
      event.preventDefault()
      this.inputDigit(parseInt(key, 10))
    } else if (key in CalculatorOperations) {
      event.preventDefault()
      this.performOperation(key)
    } else if (key === '.') {
      event.preventDefault()
      this.inputDot()
    } else if (key === '%') {
      event.preventDefault()
      this.inputPercent()
    } else if (key === 'Backspace') {
      event.preventDefault()
      this.clearLastChar()
    } else if (key === 'Clear') {
      event.preventDefault()
      
      if (this.state.displayValue !== '0') {
        this.clearDisplay()
      } else {
        this.clearAll()
      }
    }
  };
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  render() {
    const { displayValue } = this.state

    return (
      <div className="calculator">
        <CalculatorDisplay value={displayValue}/>
        <div className="calculator-keypad">
          <CalculatorKey className="key-all-clear function-key" onPress={() =>  this.clearAll()}>AC</CalculatorKey>
          <CalculatorKey className="key-clear function-key" onPress={() =>  this.clearDisplay()}>DEL</CalculatorKey>
          <CalculatorKey className="key-sign function-key" onPress={() => this.toggleSign()}>±</CalculatorKey>
          <CalculatorKey className="key-percent function-key" onPress={() => this.inputPercent()}>%</CalculatorKey>
          <CalculatorKey className="key-9 digit-key" onPress={() => this.inputDigit(9)}>9</CalculatorKey>
          <CalculatorKey className="key-8 digit-key" onPress={() => this.inputDigit(8)}>8</CalculatorKey>
          <CalculatorKey className="key-7 digit-key" onPress={() => this.inputDigit(7)}>7</CalculatorKey>
          <CalculatorKey className="key-divide operator-key" onPress={() => this.performOperation('/')}>÷</CalculatorKey>
          <CalculatorKey className="key-6 digit-key" onPress={() => this.inputDigit(6)}>6</CalculatorKey>
          <CalculatorKey className="key-5 digit-key" onPress={() => this.inputDigit(5)}>5</CalculatorKey>
          <CalculatorKey className="key-4 digit-key" onPress={() => this.inputDigit(4)}>4</CalculatorKey>
          <CalculatorKey className="key-multiply operator-key" onPress={() => this.performOperation('*')}>×</CalculatorKey>
          <CalculatorKey className="key-3 digit-key" onPress={() => this.inputDigit(3)}>3</CalculatorKey>
          <CalculatorKey className="key-2 digit-key" onPress={() => this.inputDigit(2)}>2</CalculatorKey>
          <CalculatorKey className="key-1 digit-key" onPress={() => this.inputDigit(1)}>1</CalculatorKey>
          <CalculatorKey className="key-add operator-key" onPress={() => this.performOperation('+')}>+</CalculatorKey>
          <CalculatorKey className="key-0 digit-key" onPress={() => this.inputDigit(0)}>0</CalculatorKey>
          <CalculatorKey className="key-dot digit-key" onPress={() => this.inputDot()}>.</CalculatorKey>
          <CalculatorKey className="key-equals equal-key" onPress={() => this.performOperation('=')}>=</CalculatorKey>
          <CalculatorKey className="key-subtract operator-key" onPress={() => this.performOperation('-')}>−</CalculatorKey>
        </div>
      </div>
    )
  }
}
export default Calculator