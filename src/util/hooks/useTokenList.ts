import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { activeTokenAtom } from "../../store/ActiveState";
import { ITokenInfo, Keys, TokenInfo } from "../constant/token";

const useTokenList = () => {
  const [activeToken, setActiveToken] = useAtom<Keys[]>(activeTokenAtom);
  const [searchValue, setSearchValue] = useState<string>("");

  const [searchResult, setSearchResult] = useState<ITokenInfo[]>([
    ...TokenInfo,
  ]);

  useEffect(() => {
    if (activeToken.length == 0) {
      let newArr: Keys[] = [];
      new Array(2).fill(0).map((_, idx) => newArr.push(TokenInfo[idx].name));
      setActiveToken([...newArr]);
    }
  }, []);

  useEffect(() => {
    let cpArr: ITokenInfo[] = [];
    TokenInfo.map((value) => {
      if (
        value.name.indexOf(searchValue) != -1 ||
        value.id.indexOf(searchValue) != -1
      )
        cpArr.push(value);
    });
    setSearchResult([...cpArr]);
  }, [searchValue]);

  return {
    searchResult,
    searchValue,
    setSearchValue,
    activeToken,
    setActiveToken,
  };
};

export default useTokenList;
