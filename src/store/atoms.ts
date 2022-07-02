import { atom } from "jotai";

import { SignUpFormInputType } from "../types/form/signUpFormType";

export const isAuthAtom = atom(true);

export const signUpFormInputAtom = atom<SignUpFormInputType | null>(null);
