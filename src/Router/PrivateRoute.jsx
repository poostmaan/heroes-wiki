import { useContext, useMemo } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({children}) => {

  const { authState } = useContext( AuthContext );
  const { logged } = authState;

  const { pathname, search} = useLocation();
  const lastUri = pathname + search

  localStorage.setItem('lastUri', lastUri)
  console.log('re-render')

  return (logged) 
    ? children
    : <Navigate to="/login"/>
}
