import React from "react";
import { ITokenInfo } from "../../util/constant/token";
import useModal from "../../util/hooks/useModal";
import useTokenList from "../../util/hooks/useTokenList";
import TokenListInfo from "../common/TokenListInfo";
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
        return <TokenListInfo value={value} isActive={isActive} />;
      })}
    </S.MainWrap>
  );
};

export default TokenList;
