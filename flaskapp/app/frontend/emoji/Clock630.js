import React from 'react';

export default function Clock630(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#62727a" />
      <g fill="#fff">
        <path d="m30 26h4v32h-4z" />
        <path d="m31.7 26l3.8 1-6.2 23-3.8-1z" />
        <circle cx={32} cy={32} r={4} />
      </g>
      <circle cx={32} cy={32} r={3} fill="#62727a" />
    </svg>
  );
}
