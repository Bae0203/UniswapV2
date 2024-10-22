import { useAtom } from "jotai";
import { type ChangeEvent } from "react";
import {
  dollarAtom,
  dollarQuoteAtom,
  token1Atom,
  token2Atom,
} from "../../store/TokenState";

const useCalculate = () => {
  const [token1, setToken1] = useAtom<number | undefined>(token1Atom);
  const [token2, setToken2] = useAtom<number | undefined>(token2Atom);
  const [dollarQuote, setDollarQuote] = useAtom<number[]>(dollarQuoteAtom);
  const [dollar, setDollar] = useAtom<number>(dollarAtom);

  const ChangeEvent = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    let cpDollar = dollarQuote[index] * Number(event.target.value);

    setDollar(cpDollar);
    if (index === 0) {
      cpDollar = dollarQuote[0] / dollarQuote[1];
      let checkValue = cpDollar.toString().split(".");

      if (checkValue[1] && checkValue[1].length > 10) {
        let token = Number(
          cpDollar.toString().split(".")[0] +
            "." +
            cpDollar.toString().split(".")[1].slice(0, 10)
        );
        cpDollar = token;
      }
      setToken1(Number(event.target.value));
      if (token1 == undefined) setToken2(undefined);
      let token = calculateDollar(cpDollar, Number(event.target.value));
      setToken2(token);
    } else {
      cpDollar = (dollarQuote[1] / dollarQuote[0]) * 1;
      let checkValue = cpDollar.toString().split(".");

      if (checkValue[1] && checkValue[1].length > 10) {
        let token = Number(
          cpDollar.toString().split(".")[0] +
            "." +
            cpDollar.toString().split(".")[1].slice(0, 10)
        );
        cpDollar = token;
      }
      setToken2(Number(event.target.value));
      if (token2 == undefined) setToken1(undefined);
      let token = calculateDollar(cpDollar, Number(event.target.value));
      setToken1(token);
    }
  };

  const calculateDollar = (perDollar: number, token: number) => {
    let num = perDollar * token;
    let checkValue = num.toString().split(".");

    if (checkValue[1] && checkValue[1].length > 10) {
      num = Number(checkValue[0] + "." + checkValue[1].slice(0, 10));
    }

    return num;
  };

  return {
    token1,
    token2,
    setToken1,
    setToken2,
    dollar,
    setDollar,
    dollarQuote,
    setDollarQuote,
    ChangeEvent,
  };
};

export default useCalculate;
