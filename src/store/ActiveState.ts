import { atom } from "jotai";
import { Keys } from "../util/constant/token";

export const isModalActiveAtom = atom<boolean>(false);
export const modalIndexAtom = atom<number>(0);
export const activeTokenAtom = atom<Keys[]>([]);

export const isAlertActiveAtom = atom<boolean>(false);
