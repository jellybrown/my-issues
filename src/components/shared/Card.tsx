import React, { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Card = ({ className, children }: Props) => {
  return (
    <div
      className={`flex justify-between text-slate-300 p-10 m-8 bg-white bg-opacity-10 hover:bg-opacity-20 ease-out duration-200 rounded rounded-xl ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};
