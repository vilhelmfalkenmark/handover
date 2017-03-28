export default function users(state = [], action) {

  if(action.type === "ADD_USER") {
    return state.concat(action.payload)
  }

  else if(action.type === "DELETE_USER") {
    return state.filter((user) => user.id !== action.payload)
  }

  return state;
}
