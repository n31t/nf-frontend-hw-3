"use client";

import { useRouter } from 'next/navigation';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    token: null,
    setToken: () => {},
    login: () => {
        console.warn('no auth provider');
    },
    logout: () => {},
  });
// export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
          setIsAuthenticated(true);
          setToken(storedToken);
        } else {
          setIsAuthenticated(false);
          setToken(null);
        }
      }, []);

      const login = (authToken: string) => {
        setIsAuthenticated(true);
        setToken(authToken);
        localStorage.setItem('authToken', authToken);
        router.push('/home');
      };
    
      const logout = () => {
        setIsAuthenticated(false);
        setToken(null);
        localStorage.removeItem('authToken');
        router.push('/login');
      };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, setToken, login, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };