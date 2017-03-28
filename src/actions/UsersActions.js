export function AddUserAction(userName) {
  return function(dispatch) {
    dispatch({
      type: "ADD_USER", payload: {
        name: userName,
        id: Date.now(),
        loggedIn: false
      }
    })
  }
}

export function DeleteUserAction(userID) {
  return function(dispatch) {
    dispatch({
      type: "DELETE_USER", payload: userID
    })
  }
}
