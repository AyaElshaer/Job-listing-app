import React from 'react'

export default function RoundedButton({ children, featured }) {
  return (
    <button
      style={{
        backgroundColor: featured && "#000"
      }}
      className=" px-2 pt-1 text-white bg-primary rounded-xl  text-sm flex items-center"
    >
      {children}
    </button>
  );
}
