import React, { ChangeEvent } from 'react';

type Props = {
  placeholder?: string;
  value: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ placeholder, value, onChangeInput }: Props) => {
  return (
    <input className="text-base" placeholder={placeholder} value={value} onChange={onChangeInput} />
  );
};
