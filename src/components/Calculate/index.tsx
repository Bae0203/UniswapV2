import React from "react";
import * as S from "./style";
import useCalculate from "../../util/hooks/useCalculate";
import Button from "../common/Button";
import TokenInput from "../common/TokenInput";
import { isAlertActiveAtom } from "../../store/ActiveState";
import { useSetAtom } from "jotai";
import useTokenList from "../../util/hooks/useTokenList";

const Calculate = () => {
  const setActiveAlert = useSetAtom(isAlertActiveAtom);
  const { token1, token2, dollarQuote, ChangeEvent } = useCalculate();
  const { activeToken } = useTokenList();

  let cpDollar = (dollarQuote[1] / dollarQuote[0]) * 1;
  let checkValue = cpDollar.toString().split(".");

  if (checkValue[1] && checkValue[1].length > 10) {
    let token = Number(
      cpDollar.toString().split(".")[0] +
        "." +
        cpDollar.toString().split(".")[1].slice(0, 10)
    );
    cpDollar = token;
  }

  return (
    <>
      <S.InputWrap>
        <S.DownArrow>
          <S.DownArrowIcon />
        </S.DownArrow>
        <TokenInput
          idx={0}
          value={token1?.toString()}
          onChange={(e) => ChangeEvent(0, e)}
        />
        <TokenInput
          idx={1}
          value={token2?.toString()}
          onChange={(e) => ChangeEvent(1, e)}
        />
      </S.InputWrap>

      {token1 !== undefined && (
        <S.PerPrice>
          <S.InfoIcon />
          {`1 ${activeToken[1]} = `}
          <S.Amount>{cpDollar}</S.Amount>
          {activeToken[0]}
          <S.Dollar>(${1 * dollarQuote[1]})</S.Dollar>
        </S.PerPrice>
      )}

      <Button
        isActive={token1 != undefined && token1 != 0}
        onClick={() => {
          if (token1 != undefined && token1 != 0) setActiveAlert(true);
        }}
      >
        {token1 != undefined && token1 != 0 ? "스왑" : "금액을 입력하세요."}
      </Button>
    </>
  );
};

export default Calculate;
