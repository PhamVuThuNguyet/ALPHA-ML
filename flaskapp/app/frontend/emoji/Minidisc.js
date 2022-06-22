import React from 'react';

export default function Minidisc(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="m64 57.6c0 3.5-2.9 6.4-6.4 6.4h-51.2c-3.5 0-6.4-2.9-6.4-6.4v-51.2c0-3.5 2.9-6.4 6.4-6.4h51.2c3.5 0 6.4 2.9 6.4 6.4v51.2" fill="#3e4347" />
      <circle cx={32} cy={32} r={32} fill="#42ade2" />
      <path d="m32 40.4c-4.6 0-8.4-3.8-8.4-8.4s3.8-8.4 8.4-8.4c4.6 0 8.4 3.8 8.4 8.4s-3.8 8.4-8.4 8.4" fill="#fff" />
      <path d="m38.4 24c-3.5 0-6.4 2.9-6.4 6.4v3.2c0 3.5 2.9 6.4 6.4 6.4h25.6v-16h-25.6" fill="#3e4347" />
    </svg>
  );
}
