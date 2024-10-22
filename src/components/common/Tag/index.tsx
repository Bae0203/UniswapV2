import React from "react";
import * as S from "./style";
import useModal from "../../../util/hooks/useModal";
import useTokenList from "../../../util/hooks/useTokenList";
import useSaveList from "../../../util/hooks/useSaveList";

interface ITagProps {
  name: string;
  isActive: boolean;
}

const Tag = ({ name, isActive }: ITagProps) => {
  const { setActiveModal, modalIndex } = useModal();
  const { activeToken, setActiveToken } = useTokenList();
  return (
    <S.TagWrap
      onClick={() => {
        if (isActive) return;
        setActiveModal(false);
        let cp = [...activeToken];
        cp[modalIndex] = name;
        setActiveToken([...cp]);
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
