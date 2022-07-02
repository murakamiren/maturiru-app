import { atom } from "jotai";

import { SignUpFormInputType } from "../types/form/signUpFormType";

export const isAuthAtom = atom(false);

export const signUpFormInputAtom = atom<SignUpFormInputType | null>(null);
