import React from "react";
import { ITokenInfo } from "../../util/constant/token";
import useModal from "../../util/hooks/useModal";
import * as S from "./style";

const TokenList = ({ searchResult }: { searchResult: ITokenInfo[] }) => {
  const { setActiveModal } = useModal();
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
          <S.TokenBox
            onClick={() => {
              setActiveModal(false);
              console.log(value.name);
            }}
          >
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
