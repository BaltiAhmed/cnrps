import { useState, useCallback, useEffect } from "react";



export const UserAuth = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  const [user, setUser] = useState(false);

  const login = useCallback((us,uid, token) => {
    setToken(token);
    setUserId(uid);
    setUser(us)
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setUser(null)
  }, []);


  return { token, login, logout, userId,user };
};
