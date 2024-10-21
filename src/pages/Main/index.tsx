import React, { useState } from "react";
import Alert from "../../components/Alert";
import * as S from "./style";

const Main = () => {
  const [activeAlert, setActiveAlert] = useState<boolean>(false);

  return (
    <>
      {activeAlert && <Alert setActive={setActiveAlert} />}
      <S.MainForm>
        <S.Head>
          <S.Title>스왑</S.Title>
          <S.SettingBtn onClick={() => setActiveAlert(true)} />
        </S.Head>
        {/* <button
          onClick={() => {
            let a = 12332.03939303;
            let b: string = a.toString();
            console.log(b.slice(0, 10));
          }}
        >
          ddd
        </button> */}
      </S.MainForm>
    </>
  );
};

export default Main;
