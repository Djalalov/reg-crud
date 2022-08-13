import React, { useState, createContext } from 'react';

export type User = {
  id: string;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};
export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  return <UserContext.Provider value={{ setUser, user }}>{children}</UserContext.Provider>;
};

/* export type SelectedId = {
  id: string;
};

type UserContextType = {
  id: SelectedId;
  setId: React.Dispatch<React.SetStateAction<SelectedId>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [id, setId] = useState('');

  return <UserContext.Provider value={{ id, setId }}>{children}</UserContext.Provider>;
};

export default UserContext;
 */
