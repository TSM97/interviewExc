export type sessionType = {
  isAuthenticated: boolean | undefined;
  user: string | undefined;
};

export type isAuthenticatedType = {
  session: sessionType | undefined;
  setSession: React.Dispatch<React.SetStateAction<sessionType | undefined>>;
};
