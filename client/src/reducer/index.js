export const init = {
  isLogin: "false",
  userInfo: {
    username: "",
    id: ""
  }
}

export const reducer = (state, action) => {
  switch(action.type) {
    case "userLogin":
      return {...state, isLogin: action.loginStatus}
    default:
      return state
  }
}
