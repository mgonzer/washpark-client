import axios from 'axios'

export function getHerbs(){
  const request = axios({
    method: 'get',
    url: `http://localhost:3000/herbs`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  }).then(result=>{
    return result
  })
  return {
    type: "HERBS",
    payload: request
  }
}
