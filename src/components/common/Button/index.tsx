import React, { ReactNode } from "react";
import * as S from "./style";

interface IButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Button = ({ isActive, onClick, children, ...props }: IButtonProps) => {
  return (
    <S.Button
      isActive={isActive}
      onClick={isActive ? onClick : () => {}}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
