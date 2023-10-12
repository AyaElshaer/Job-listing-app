import React from 'react'

export default function Button({children, ...rest}) {
  return (
    <button className=" h-8  px-2 pt-1 text-primary bg-grayishFilter  rounded-sm font-bold hover:text-white hover:bg-primary flex items-center justify-center"
    {...rest}
    >
      {children}
    </button>
  );
}
