import React from "react";
import * as S from "./style";
import useCalculate from "../../util/hooks/useCalculate";
import Button from "../common/Button";
import TokenInput from "../common/TokenInput";

const Calculate = () => {
  const { token1, token2 } = useCalculate();
  return (
    <>
      <S.InputWrap>
        <S.DownArrow>
          <S.DownArrowIcon />
        </S.DownArrow>
        <TokenInput idx={0} value="10" />
        <TokenInput idx={1} value="20" />
      </S.InputWrap>

      <Button isActive={token1 != undefined && token1 != 0} onClick={() => {}}>
        {token1 != undefined && token1 != 0 ? "스왑" : "금액을 입력하세요."}
      </Button>
    </>
  );
};

export default Calculate;
