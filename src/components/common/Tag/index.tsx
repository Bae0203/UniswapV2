import React from "react";
import * as S from "./style";
import useModal from "../../../util/hooks/useModal";
import useTokenList from "../../../util/hooks/useTokenList";
import { Keys } from "../../../util/constant/token";
import useCalculate from "../../../util/hooks/useCalculate";

interface ITagProps {
  name: Keys;
  isActive: boolean;
}

const Tag = ({ name, isActive }: ITagProps) => {
  const { setActiveModal, modalIndex } = useModal();
  const { activeToken, setActiveToken } = useTokenList();
  const { setToken1, setToken2, setDollar } = useCalculate();
  return (
    <S.TagWrap
      onClick={() => {
        if (isActive) return;
        setActiveModal(false);
        let cp = [...activeToken];
        cp[modalIndex] = name;
        setActiveToken([...cp]);
        setToken1(0);
        setToken2(0);
        setDollar(0);
      }}
      isActive={isActive}
    >
      <S.SubTagWrap>
        <S.TokenTmg isActive={isActive} />
        <div>{name}</div>
      </S.SubTagWrap>
    </S.TagWrap>
  );
};

export default Tag;
