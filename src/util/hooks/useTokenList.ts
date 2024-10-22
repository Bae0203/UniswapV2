import React, { useEffect, useState } from "react";
import { ITokenInfo, TokenInfo } from "../constant/token";

const useTokenList = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [searchResult, setSearchResult] = useState<ITokenInfo[]>([
    ...TokenInfo,
  ]);

  useEffect(() => {
    searchResult.length = 0;
    TokenInfo.map((value) => {
      if (
        value.name.indexOf(searchValue) != -1 ||
        value.id.indexOf(searchValue) != -1
      )
        searchResult.push(value);
    });
  }, [searchValue]);

  return { searchResult, searchValue, setSearchValue };
};

export default useTokenList;
