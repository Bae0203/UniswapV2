import React, { useEffect, useState } from "react";
import { TokenInfo } from "../constant/token";

const useSaveList = () => {
  const [tagList, setTagList] = useState<string[]>([]);

  const getLocalStorage = (key: string) => {
    let value: any = localStorage.getItem(key);
    return value;
  };

  const setLocalStorage = ({ key, value }: { key: string; value: any }) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    setTagList(JSON.parse(getLocalStorage("uniswapTag")));

    if (JSON.parse(getLocalStorage("uniswapTag")) == null) {
      let newArr: string[] = [];
      new Array(2).fill(0).map((_, idx) => newArr.push(TokenInfo[idx].name));

      setLocalStorage({ key: "uniswapTag", value: newArr });
      setTagList([...newArr]);
    }
  }, []);

  const setTag = (name: string) => {
    let flag: boolean = false;
    let cpArr: string[] = [...tagList];
    tagList.map((e, idx) => {
      if (!flag && e == name) {
        flag = true;

        let name: string = tagList[idx];
        cpArr.splice(idx, 1);
        cpArr.push(name);
        setTagList([...cpArr]);
      }
    });
    if (!flag) {
      if (tagList.length >= 7) cpArr = cpArr.slice(1, cpArr.length);
      cpArr.push(name);
      setTagList([...cpArr]);
      setLocalStorage({ key: "uniswapTag", value: cpArr });
    }
  };

  return { tagList, getLocalStorage, setLocalStorage, setTag };
};

export default useSaveList;
