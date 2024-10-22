import { atom } from "jotai";

export const token1Atom = atom<number | undefined>();
export const token2Atom = atom<number | undefined>();

export const dollarQuoteAtom = atom<number[]>([2643.17, 1]);
export const dollarAtom = atom<number>(0);
