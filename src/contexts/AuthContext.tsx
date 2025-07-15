import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'clientadmin' | 'entityadmin' | 'entityuser';

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  hotelId?: string;
  hotelName?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo authentication - replace with real authentication
    const demoUsers: User[] = [
      { id: '1', name: 'John Admin', email: 'admin@trackinn.com', role: 'clientadmin' },
      { id: '2', name: 'Sarah Manager', email: 'manager@trackinn.com', role: 'entityadmin', hotelId: '1', hotelName: 'TrackInn Grand Hotel' },
      { id: '3', name: 'Lisa User', email: 'user@trackinn.com', role: 'entityuser', hotelId: '1', hotelName: 'TrackInn Grand Hotel' },
    ];

    const foundUser = demoUsers.find(u => u.email === email);
    if (foundUser && password === 'demo123') {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};