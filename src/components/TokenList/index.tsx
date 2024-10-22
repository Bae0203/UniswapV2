import React from "react";
import useTokenList from "../../util/hooks/useTokenList";
import * as S from "./style";

const TokenList = () => {
  const { searchResult } = useTokenList();
  return (
    <S.MainWrap>
      {searchResult.length == 0 && (
        <S.EmptyListWrap>
          <S.EmptyImg />
          <p>검색 결과가 없습니다.</p>
        </S.EmptyListWrap>
      )}
      {searchResult.map((value) => {
        return (
          <S.TokenBox>
            <S.TokenInfoWrap>
              <S.TokenImg />
              <div>
                <S.NormalText>{value.name}</S.NormalText>
                <S.SubText>{value.id}</S.SubText>
              </div>
            </S.TokenInfoWrap>
            <S.NormalText>{value.amount}</S.NormalText>
          </S.TokenBox>
        );
      })}
    </S.MainWrap>
  );
};

export default TokenList;
