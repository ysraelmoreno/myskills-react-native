import React from 'react';
import { createContext, useState, useContext } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Ysrael');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};
