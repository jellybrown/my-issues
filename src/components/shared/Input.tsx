import React from 'react';

type Props = {
  placeholder?: string;
};

export const Input = ({ placeholder }: Props) => {
  return <input className="text-base" placeholder={placeholder} />;
};
