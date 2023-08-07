import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({ mock: true });

  const login = () => {
    setUser({ mock: true });
  };

  const logout = () => {
    setUser(false);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
