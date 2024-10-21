import React, { ReactElement } from "react";
import * as S from "./style";

interface IButtonProps {
  children: ReactElement | string;
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
