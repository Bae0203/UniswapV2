import React from "react";
import { ITokenInfo } from "../../util/constant/token";
import useModal from "../../util/hooks/useModal";
import useTokenList from "../../util/hooks/useTokenList";
import * as S from "./style";

const TokenList = ({ searchResult }: { searchResult: ITokenInfo[] }) => {
  const { setActiveModal } = useModal();
  const { activeToken } = useTokenList();
  return (
    <S.MainWrap>
      {searchResult.length == 0 && (
        <S.EmptyListWrap>
          <S.EmptyImg />
          <p>검색 결과가 없습니다.</p>
        </S.EmptyListWrap>
      )}
      {searchResult.map((value) => {
        let isActive: boolean = false;
        activeToken.map((e) => {
          if (value.name == e) isActive = true;
        });
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
      })}
    </S.MainWrap>
  );
};

export default TokenList;
