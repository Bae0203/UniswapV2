import React from "react";
import useModal from "../../../util/hooks/useModal";
import * as S from "./style";

interface ITokenInputProps {
  value?: string;
  onChange?: () => void;
}

const TokenInput = ({ value, onChange, ...props }: ITokenInputProps) => {
  const { setActiveModal } = useModal();

  return (
    <S.MainWrap>
      <div>
        <S.Input
          type="text"
          placeholder="0.0"
          value={value}
          onChange={onChange}
          {...props}
        />
        <S.PriceContext>{value != undefined && "$148.01"}</S.PriceContext>
      </div>
      <div>
        <S.TokenBtn onClick={() => setActiveModal(true)}>
          <S.TokenImg />
          <S.TokenName>UDST</S.TokenName>
          <S.OpenTokenListBtn />
        </S.TokenBtn>
        <S.PriceContext isRight>n개</S.PriceContext>
      </div>
    </S.MainWrap>
  );
};

export default TokenInput;
