import { useAtom } from "jotai";
import React, { useEffect } from "react";
import Alert from "../../components/Alert";
import Calculate from "../../components/Calculate";
import Modal from "../../components/Modal";
import { isAlertActiveAtom } from "../../store/ActiveState";
import { TokenId, type Keys } from "../../util/constant/token";
import { customAxios } from "../../util/customAxios";
import useCalculate from "../../util/hooks/useCalculate";
import useModal from "../../util/hooks/useModal";
import useTokenList from "../../util/hooks/useTokenList";
import * as S from "./style";

const Main = () => {
  const [activeAlert, setActiveAlert] = useAtom<boolean>(isAlertActiveAtom);
  const { activeModal } = useModal();
  const { dollarQuote, setDollarQuote } = useCalculate();
  const { activeToken } = useTokenList();

  const getQuote = async (name: Keys, idx: number) => {
    await customAxios
      .get(`&ids=${TokenId[name].id}`)
      .then((e) => {
        let cp: number[] = [...dollarQuote];
        cp[idx] = e.data[TokenId[name].id].usd;
        setDollarQuote([...cp]);
        // console.log(e.data[TokenId[name].id].usd, idx, cp);
      })
      .catch((e) => console.log("error", e));
  };

  useEffect(() => {
    if (activeToken[0]) {
      activeToken.map((name, idx) => {
        getQuote(name, idx);
      });
    }
  }, [activeToken]);

  return (
    <>
      {activeAlert && <Alert setActive={setActiveAlert} />}
      {activeModal && <Modal />}
      <S.MainForm>
        <S.Head>
          <S.Title>스왑</S.Title>
          <S.SettingBtn onClick={() => setActiveAlert(true)} />
        </S.Head>
        <Calculate />
      </S.MainForm>
    </>
  );
};

export default Main;
