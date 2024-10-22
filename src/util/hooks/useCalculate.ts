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
      setToken1(Number(event.target.value));
      if (token1 == undefined) setToken2(undefined);
      setToken2(cpDollar / dollarQuote[1]);

      let checkValue = (cpDollar / dollarQuote[1]).toString().split(".");

      if (checkValue[1] && checkValue[1].length > 10) {
        let token = Number(
          (cpDollar / dollarQuote[1]).toString().split(".")[0] +
            "." +
            (cpDollar / dollarQuote[1]).toString().split(".")[1].slice(0, 10)
        );
        setToken2(token);
      }
    } else {
      setToken2(Number(event.target.value));
      if (token2 == undefined) setToken1(undefined);
      setToken1(cpDollar / dollarQuote[0]);

      let checkValue = (cpDollar / dollarQuote[0]).toString().split(".");

      if (checkValue[1] && checkValue[1].length > 10) {
        let token = Number(
          (cpDollar / dollarQuote[0]).toString().split(".")[0] +
            "." +
            (cpDollar / dollarQuote[0]).toString().split(".")[1].slice(0, 10)
        );
        setToken1(token);
      }
    }
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
