import React from "react";
import useSaveList from "../../util/hooks/useSaveList";
import useTokenList from "../../util/hooks/useTokenList";
import Tag from "../common/Tag";
import * as S from "./style";

const TagList = () => {
  const { tagList } = useSaveList();
  const { activeToken } = useTokenList();
  return (
    <S.TagWrap>
      {[...tagList].reverse().map((value) => {
        let isActive: boolean = false;
        activeToken.map((e) => {
          if (value == e) isActive = true;
        });
        return <Tag name={value} isActive={isActive} />;
      })}
    </S.TagWrap>
  );
};

export default TagList;
