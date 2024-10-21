import React, { useState } from "react";
import Alert from "../../components/Alert";
import * as S from "./style";

const Main = () => {
  const [activeAlert, setActiveAlert] = useState<boolean>(true);

  return (
    <>
      {activeAlert && <Alert setActive={setActiveAlert} />}
      <S.MainForm>
        <S.Head>
          <S.Title>스왑</S.Title>
          <S.SettingBtn onClick={() => setActiveAlert(true)} />
        </S.Head>
      </S.MainForm>
    </>
  );
};

export default Main;
