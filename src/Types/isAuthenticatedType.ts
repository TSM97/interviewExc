export type sessionType = {
  isAuthenticated: boolean | undefined;
  user?: string;
};

export type isAuthenticatedType = {
  session: sessionType | undefined;
  setSession: React.Dispatch<React.SetStateAction<sessionType | undefined>>;
};
