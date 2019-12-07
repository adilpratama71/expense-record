import React, { createContext, useReducer } from 'react'
import { reducer, init } from '../reducer'
export const AppContext = createContext(init)

export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, init)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      { props.children }
    </AppContext.Provider>
  )
}