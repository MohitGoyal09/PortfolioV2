import { LangChain } from '@lobehub/icons';
import React from 'react';

export default function Langchain({ className }: { className?: string }) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          marginRight: '6px',
        }}
      >
        <LangChain.Color size={22} />
      </div>
    </>
  );
}
