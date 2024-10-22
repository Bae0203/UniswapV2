import { atom } from "jotai";

export const isModalActiveAtom = atom<boolean>(false);
export const modalIndexAtom = atom<number>(0);

export const isAlertActiveAtom = atom<boolean>(false);
