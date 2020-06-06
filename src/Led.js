import React from 'react'

const Led = (props) => {
  return (
    <div className="led">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 640" >
        <g>
        <rect width="100%" height="100%" fill="#111111" />
        <path fill={props.lights[0]} d="M94.65 72.46L125.22 103.02L307.15 103.02L337.72 72.46L307.15 41.89L125.22 41.89L94.65 72.46Z"></path>
        <path fill={props.lights[1]} d="M90.86 73.93L60.29 104.5L60.29 286.43L90.86 317L121.43 286.43L121.43 104.5L90.86 73.93Z"></path>
        <path fill={props.lights[2]} d="M340.8 73.93L310.23 104.5L310.23 286.43L340.8 317L371.37 286.43L371.37 104.5L340.8 73.93Z"></path>
        <path fill={props.lights[3]} d="M94.65 320L125.22 350.57L307.15 350.57L337.72 320L307.15 289.43L125.22 289.43L94.65 320Z"></path>
        <path fill={props.lights[4]} d="M90.65 322.1L60.08 352.66L60.08 534.6L90.65 565.16L121.22 534.6L121.22 352.66L90.65 322.1Z"></path>
        <path fill={props.lights[5]} d="M340.8 323.12L310.23 353.69L310.23 535.62L340.8 566.19L371.37 535.62L371.37 353.69L340.8 323.12Z"></path>
        <path fill={props.lights[6]} d="M94.65 568.63L125.22 599.2L307.15 599.2L337.72 568.63L307.15 538.06L125.22 538.06L94.65 568.63Z"></path>
        <circle fill={props.decimal} cx="410.0" cy="570" r="30"/>
        </g>
      </svg>
    </div>
  );
}

export default Led