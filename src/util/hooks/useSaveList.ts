import React, { useState } from "react";

const useSaveList = () => {
  const [tagList, setTagList] = useState<string[]>([]);

  const getLocalStorage = ({ key }: { key: string }) => {
    let value: any = localStorage.getItem(key);
    return value;
  };

  const setLocalStorage = ({ key, value }: { key: string; value: any }) => {
    localStorage.setItem(key, value);
  };

  const setTag = ({ name }: { name: string }) => {
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
    }
  };

  return { getLocalStorage, setLocalStorage, setTag };
};

export default useSaveList;
