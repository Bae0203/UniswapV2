import React from "react";
import * as S from "./style";

interface IButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Button = ({ label, isActive, onClick, ...props }: IButtonProps) => {
  return (
    <>
      <S.Button
        isActive={isActive}
        onClick={isActive ? onClick : () => {}}
        {...props}
      >
        {label}
      </S.Button>
    </>
  );
};

export default Button;
