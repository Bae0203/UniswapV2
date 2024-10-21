import React, { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import Button from "../common/Button";

interface IAlertProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Alert = ({ setActive }: IAlertProps) => {
  return (
    <S.AlertBackground>
      <S.AlertForm>
        <S.Label> 준비 중입니다.</S.Label>
        <Button onClick={() => setActive(false)} isActive>
          확인
        </Button>
      </S.AlertForm>
    </S.AlertBackground>
  );
};

export default Alert;
