import React, { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Card = ({ className, children }: Props) => {
  return (
    <div
      className={`flex justify-between p-10 m-5 bg-white border rounded rounded-xl ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};
