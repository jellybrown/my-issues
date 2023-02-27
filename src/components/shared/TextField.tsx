import React from 'react';

type Props = {
  text: string;
  position?: 'left' | 'center' | 'right';
};

export const TextField = ({ text, position = 'center' }: Props) => {
  return <div className={`text-base text-slate-400 flex justify-${position}`}>{text}</div>;
};
