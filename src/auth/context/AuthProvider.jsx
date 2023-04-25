import {useReducer} from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

import { v4 as uuidv4 } from 'uuid';

import { types } from '../types/types'

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    // ! Si retorna null, transformas con ! a true y luego a si valor verdadero false
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, {}, init);

  const login = async (name = '') => {

    const user = {
      id: uuidv4(),  
      name: name 
    }

    let action = {
      type: types.login,
      payload: user,
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch( action );
  }

  const logout = async() => {
    dispatch({type: types.logout });
  }

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
