import React, { useEffect, useState } from "react";
import { ITokenInfo, TokenInfo } from "../constant/token";

const useTokenList = () => {
  const [activeToken, setActiveToken] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const [searchResult, setSearchResult] = useState<ITokenInfo[]>([
    ...TokenInfo,
  ]);

  useEffect(() => {
    let newArr: string[] = [];
    new Array(2).fill(0).map((_, idx) => newArr.push(TokenInfo[idx].name));
    setActiveToken([...newArr]);
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
