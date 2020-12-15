import React from 'react'

class CalculatorKey extends React.Component {
  render() {
    const { onPress, className, ...props } = this.props
    return (
      <button onClick={onPress} className={`calculator-key ${className}`} {...props}/>
    )
  }
}

export default CalculatorKey


// import React, { useState } from 'react'

// function CalculatorKey() {
//   const { onPress, className, ...props } = props
//   return (
//     <button onClick={onPress} className={`calculator-key ${className}`} {...props}/>
//   )
// }

// export default CalculatorKey