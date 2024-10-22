import React from "react";
import * as S from "./style";
import { ITokenInfo } from "../../../util/constant/token";
import useModal from "../../../util/hooks/useModal";

interface ITokenListInfo {
  value: ITokenInfo;
  isActive: boolean;
}

const TokenListInfo = ({ value, isActive }: ITokenListInfo) => {
  const { setActiveModal } = useModal();
  return (
    <S.TokenBox
      onClick={() => {
        if (isActive) return;
        setActiveModal(false);
        console.log(value.name);
      }}
    >
      <S.TokenInfoWrap>
        <S.TokenImg isActive={isActive} />
        <div>
          <S.NormalText isActive={isActive}>{value.name}</S.NormalText>
          <S.SubText isActive={isActive}>{value.id}</S.SubText>
        </div>
      </S.TokenInfoWrap>
      <S.NormalText isActive={isActive}>{value.amount}</S.NormalText>
    </S.TokenBox>
  );
};

export default TokenListInfo;
