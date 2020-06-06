import React from 'react'
import lightsData from './lightsData'
import Led from './Led'

var ledOn = '#33cc33'
var ledOff = '#333333'

class LedDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.string=null
    this.reversed=null
    this.decimal=null
    this.decimalcheck=null
    this.index=null
    this.result=null
    this.ledArray = [10,10,10,10,10,10,10,10,10,0]
  }
  convertToLed(){
    this.negative=false
    this.reversed = [].slice.call(this.props.display).reverse()
    this.decimal = -1
    this.decimalcheck = 0
    for (this.index=0; this.index <=9; this.index++ ) {
      if (this.reversed[this.index + this.decimalcheck] === '-') {
        this.ledArray[this.index] = 11
      } else if 
      (this.reversed[this.index + this.decimalcheck] == null) {
        this.ledArray[this.index] = 10
      } else { 
        if (this.reversed[this.index] === '.') {
            this.decimal = this.index + 1
            this.decimalcheck=1}
        this.ledArray[this.index] = parseInt(this.reversed[this.index + this.decimalcheck])
      }
    }
    return(this.decimal)
  }
  render() {
    this.decimal = this.convertToLed()
    return (
      <div className='led-display'>
        <Led className='led' lights={lightsData[this.ledArray[9]]} decimal={this.decimal === 10 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[8]]} decimal={this.decimal === 9 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[7]]} decimal={this.decimal === 8 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[6]]} decimal={this.decimal === 7 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[5]]} decimal={this.decimal=== 6 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[4]]} decimal={this.decimal=== 5 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[3]]} decimal={this.decimal=== 4 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[2]]} decimal={this.decimal=== 3 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[1]]} decimal={this.decimal=== 2 ? ledOn : ledOff}/>
        <Led className='led' lights={lightsData[this.ledArray[0]]} decimal={this.decimal=== 1 ? ledOn : ledOff}/>
      </div>
    )
  }
}

export default LedDisplay