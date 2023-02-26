import React, { ReactNode } from 'react';

type Props = {
  text?: string;
  icon?: ReactNode;
  onClickBtn: () => void;
};

export const Button = ({ text, icon, onClickBtn }: Props) => {
  return (
    <button onClick={onClickBtn}>
      <>
        {text && <span className="text-base">{text}</span>}
        {icon && { icon }}
      </>
    </button>
  );
};
