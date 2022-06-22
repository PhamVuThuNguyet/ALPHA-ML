import React from 'react';

export default function Smoking(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path fill="#f2b200" d="m0 50h26v14h-26z" />
      <path fill="#dce5e5" d="m26 50h34v14h-34z" />
      <path fill="#ff8736" d="m60 50h4v14h-4z" />
      <path d="M33.5,16C28.4,35.1,43.9,9,64,47C53.3,32.9,18.8,43.2,4.3,27.5C-15.8,5.8,41.9-15.6,33.5,16z" fill="#abc2c6" />
    </svg>
  );
}
