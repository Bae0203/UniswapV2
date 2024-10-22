import React from "react";
import * as S from "./style";
import useModal from "../../../util/hooks/useModal";

interface ITagProps {
  name: string;
  isActive: boolean;
}

const Tag = ({ name, isActive }: ITagProps) => {
  const { setActiveModal } = useModal();
  return (
    <S.TagWrap
      onClick={() => {
        if (isActive) return;
        setActiveModal(false);
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
