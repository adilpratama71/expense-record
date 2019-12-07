export const init = {
  isLogin: false,
  userInfo: {
    username: "",
    id: ""
  },
  isError: false,
  errorMessage: []
}

export const reducer = (state, action) => {
  switch(action.type) {
    case "userLogin":
      return {...state, isLogin: action.loginStatus, isError: false}
    case "setError": 
      return {...state, isError: true, errorMessage: action.errorMessage}
    default:
      return state
  }
}
