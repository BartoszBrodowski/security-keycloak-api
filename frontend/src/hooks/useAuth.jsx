import { useState, useEffect, useRef } from "react";

import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
  pkceMethod: "S256",
};

const client = new Keycloak(keycloakConfig);

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState("");
  const [isLogin, setLogin] = useState(false);

  client.onTokenExpired = () => {
    client
      .updateToken(5)
      .then((refreshed) => {
        if (refreshed) {
          setToken(client.token);
          console.log("Token refreshed" + refreshed);
        } else {
          setLogin(false);
          console.log(
            "Token not refreshed, valid for " +
              Math.round(
                client.tokenParsed.exp +
                  client.timeSkew -
                  new Date().getTime() / 1000
              ) +
              " seconds"
          );
        }
      })
      .catch((err) => {
        console.log(err);
        setLogin(false);
      });
  };
  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({
        onLoad: "login-required",
        pkceMethod: "S256",
      })
      .then((authenticated) => {
        setLogin(authenticated);
        setToken(client.token);
      });
  }, [setLogin, setToken, isLogin, token]);
  return [isLogin, token, client];
};

export default useAuth;
