var ledOn = '#33cc33'
var ledOff = '#333333'

const lightsData = [
    [ledOn,ledOn,ledOn,ledOff,ledOn,ledOn,ledOn],       //  0
    [ledOff,ledOff,ledOn,ledOff,ledOff,ledOn,ledOff],   //  1
    [ledOn,ledOff,ledOn,ledOn,ledOn,ledOff,ledOn],      //  2
    [ledOn,ledOff,ledOn,ledOn,ledOff,ledOn,ledOn],      //  3
    [ledOff,ledOn,ledOn,ledOn,ledOff,ledOn,ledOff],     //  4
    [ledOn,ledOn,ledOff,ledOn,ledOff,ledOn,ledOn],      //  5
    [ledOff,ledOn,ledOff,ledOn,ledOn,ledOn,ledOn],      //  6
    [ledOn,ledOff,ledOn,ledOff,ledOff,ledOn,ledOff],    //  7
    [ledOn,ledOn,ledOn,ledOn,ledOn,ledOn,ledOn],        //  8
    [ledOn,ledOn,ledOn,ledOn,ledOff,ledOn,ledOff],      //  9
    [ledOff,ledOff,ledOff,ledOff,ledOff,ledOff,ledOff], //  'no display'
    [ledOff,ledOff,ledOff,ledOn,ledOff,ledOff,ledOff]   //  - (minus)
]

export default lightsData