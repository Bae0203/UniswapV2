import { useAtom } from "jotai";
import { ChangeEvent } from "react";
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
    if (index === 1) {
      setToken1(Number(event.target.value));
      if (token1 == undefined) setToken2(undefined);
      else setToken2(calculateToken({ value: token1, perPrice: 1.2 }));
    } else {
      setToken2(Number(event.target.value));
      if (token2 == undefined) setToken1(undefined);
      else setToken1(calculateToken({ value: token2, perPrice: 1.2 }));
    }
  };

  const calculateToken = ({ value, perPrice }: ICalculateProps) => {
    let price: number = Number(value) * Number(perPrice);
    if (price.toString().replace(".", "").length > 10)
      price = Number(price.toString().slice(0.1));
    return price;
  };

  return { token1, token2, calculateToken, ChangeEvent };
};

export default useCalculate;
