import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [client, setClient] = useState(null);
  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    const client = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
      pkceMethod: "S256",
    });

    client
      .init({ onLoad: "login-required", pkceMethod: "S256" })
      .then((isAuthenticated) => {
        setIsLogin(isAuthenticated);
        setToken(client.token);
      });
    setClient(client);
  }, []);
  return [isLogin, token, client];
};

export default useAuth;
