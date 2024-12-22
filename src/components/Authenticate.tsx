import React, { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import { IAuthenticateProps } from "./types/authenticateTypes";

function Authenticate({ children }: IAuthenticateProps) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading || !isAuthenticated) {
    return <div>Cargando...</div>;
  }

  return <>{children}</>;
}

export default Authenticate;
