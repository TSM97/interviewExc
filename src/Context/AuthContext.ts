import { createContext } from "react";

import { isAuthenticatedType } from "../Types/isAuthenticatedType";

export const AuthContext = createContext<isAuthenticatedType | undefined>(
  undefined
);
