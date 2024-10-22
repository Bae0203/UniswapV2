import React, { useEffect, useState } from "react";
import { ITokenInfo, TokenInfo } from "../constant/token";

const useTokenList = () => {
  const [activeToken, setActiveToken] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const [searchResult, setSearchResult] = useState<ITokenInfo[]>([
    ...TokenInfo,
  ]);

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
    console.log(cpArr, searchResult);
  }, [searchValue]);

  return { searchResult, searchValue, setSearchValue };
};

export default useTokenList;
