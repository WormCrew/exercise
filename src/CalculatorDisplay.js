import React from 'react'
import LedDisplay from './LedDisplay'

class CalculatorDisplay extends React.Component {
  render() {
    const { value, ...props } = this.props
    
    const language = navigator.language || 'en-GB'
    let formattedValue = parseFloat(value).toLocaleString(language, {
      useGrouping: false,
      maximumFractionDigits: 6
    })
    
    // Add back missing .0 in e.g. 12.0
    const match = value.match(/\.\d*?(0*)$/)
    
    if (match)
      formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0]

    return (
      <div {...props} className="calculator-display">
        <LedDisplay display={formattedValue}/>
      </div>
    )
  }
}

export default CalculatorDisplay