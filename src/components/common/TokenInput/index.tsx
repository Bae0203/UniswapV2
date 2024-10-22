import React from "react";
import useModal from "../../../util/hooks/useModal";
import useTokenList from "../../../util/hooks/useTokenList";
import * as S from "./style";

interface ITokenInputProps {
  idx: number;
  value?: string;
  onChange?: () => void;
}

const TokenInput = ({ idx, value, onChange, ...props }: ITokenInputProps) => {
  const { setActiveModal, setModalIndex } = useModal();
  const { activeToken } = useTokenList();

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
