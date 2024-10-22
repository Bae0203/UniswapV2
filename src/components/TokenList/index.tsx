import React from "react";
import { type ITokenInfo } from "../../util/constant/token";
import useTokenList from "../../util/hooks/useTokenList";
import TokenListInfo from "../common/TokenListInfo";
import * as S from "./style";

const TokenList = ({ searchResult }: { searchResult: ITokenInfo[] }) => {
  const { activeToken } = useTokenList();
  return (
    <S.MainWrap>
      {searchResult.length == 0 && (
        <S.EmptyListWrap>
          <S.EmptyImg />
          <p>검색 결과가 없습니다.</p>
        </S.EmptyListWrap>
      )}
      {searchResult.map((value, idx) => {
        let isActive: boolean = false;
        activeToken.map((e) => {
          if (value.name == e) isActive = true;
        });
        return <TokenListInfo key={idx} value={value} isActive={isActive} />;
      })}
    </S.MainWrap>
  );
};

export default TokenList;
