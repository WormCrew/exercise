import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './Calculator'
import './style.css'

const rookout = require('rookout');
rookout.start({
    token: '25860772a4304947a1fcac82a36aba21dec8c52f5acf8fe91b01f634a0839f84'
})

ReactDOM.render(<Calculator />, document.getElementById('root')
)