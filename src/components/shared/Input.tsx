import React, { ChangeEvent } from 'react';

type Props = {
  placeholder?: string;
  value: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ placeholder, value, onChangeInput }: Props) => {
  return (
    <input
      className="w-full py-3 px-5 text-base bg-slate-700 rounded rounded-xl focus:outline-none focus:ring focus:ring-slate-400 placeholder-slate-400 text-slate-400"
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
    />
  );
};
