import React from "react";
import * as S from "./style";
import { ITokenInfo, Keys } from "../../../util/constant/token";
import useModal from "../../../util/hooks/useModal";
import useSaveList from "../../../util/hooks/useSaveList";
import useTokenList from "../../../util/hooks/useTokenList";
import useCalculate from "../../../util/hooks/useCalculate";

interface ITokenListInfo {
  value: ITokenInfo;
  isActive: boolean;
}

const TokenListInfo = ({ value, isActive }: ITokenListInfo) => {
  const { setActiveModal, modalIndex } = useModal();
  const { activeToken, setActiveToken } = useTokenList();
  const { setToken1, setToken2, setDollar } = useCalculate();
  const { setTag } = useSaveList();
  return (
    <S.TokenBox
      onClick={() => {
        if (isActive) return;
        setActiveModal(false);
        setTag(value.name);

        let a: Keys = value.name;

        let cp = [...activeToken];
        cp[modalIndex] = a;
        setActiveToken([...cp]);
        // console.log(value.name, cp);
        setToken1(0);
        setToken2(0);
        setDollar(0);
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
