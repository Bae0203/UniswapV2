import React, { type ChangeEvent } from "react";
import useCalculate from "../../../util/hooks/useCalculate";
import useModal from "../../../util/hooks/useModal";
import useTokenList from "../../../util/hooks/useTokenList";
import * as S from "./style";

interface ITokenInputProps {
  idx: number;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TokenInput = ({ idx, value, onChange, ...props }: ITokenInputProps) => {
  const { setActiveModal, setModalIndex } = useModal();
  const { dollar } = useCalculate();
  const { activeToken } = useTokenList();

  return (
    <S.MainWrap>
      <div>
        <S.Input
          type="number"
          placeholder="0.0"
          value={value}
          onChange={onChange}
          {...props}
        />

        <S.PriceContext>{value != undefined && `$${dollar}`}</S.PriceContext>
      </div>
      <div>
        <S.TokenBtn
          onClick={() => {
            setActiveModal(true);
            setModalIndex(idx);
          }}
        >
          <S.TokenImg />
          <S.TokenName>{activeToken[idx]}</S.TokenName>
          <S.OpenTokenListBtn />
        </S.TokenBtn>
        <S.PriceContext isRight>n개</S.PriceContext>
      </div>
    </S.MainWrap>
  );
};

export default TokenInput;
