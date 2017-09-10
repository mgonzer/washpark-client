export function setUsername(name){
  return {
    type: "SET_USERNAME",
    payload: name
  }
}

export function setPassword(password){
  return {
    type: "SET_PASSWORD",
    payload: password
  }
}
