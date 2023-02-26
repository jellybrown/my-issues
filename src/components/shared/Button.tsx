import React, { ReactNode } from 'react';

type Props = {
  text?: string;
  icon?: ReactNode;
};

export const Button = ({ text, icon }: Props) => {
  return (
    <button>
      <>
        {text && <span className="text-base">{text}</span>}
        {icon && { icon }}
      </>
    </button>
  );
};
