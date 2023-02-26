import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <div className="p-5 bg-white">{children}</div>;
};
