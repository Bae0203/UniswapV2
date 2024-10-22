import React from "react";
import * as S from "./style";
import useCalculate from "../../util/hooks/useCalculate";
import Button from "../common/Button";
import TokenInput from "../common/TokenInput";
import { isAlertActiveAtom } from "../../store/ActiveState";
import { useSetAtom } from "jotai";

const Calculate = () => {
  const setActiveAlert = useSetAtom(isAlertActiveAtom);
  const { token1, token2, ChangeEvent } = useCalculate();
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
