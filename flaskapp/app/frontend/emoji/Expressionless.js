import React from 'react';

export default function Expressionless(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ffdd67" />
      <g fill="#664e27">
        <path d="m40 48h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4" />
        <path d="m27.1 32h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4" />
        <path d="m52.9 32h-16c-1.5 0-1.5-4 0-4h16c1.5 0 1.5 4 0 4" />
      </g>
    </svg>
  );
}
