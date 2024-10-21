import React, { ChangeEvent } from "react";
import * as S from "./style";

interface IInputProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ value, onChange, placeholder, ...props }: IInputProps) => {
  return (
    <>
      <S.Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
