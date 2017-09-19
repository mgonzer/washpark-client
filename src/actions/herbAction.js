import axios from 'axios'

export function getHerbs(){
  const request = axios({
    method: 'get',
    url: `https://lunaportalserver.herokuapp.com/herbs`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  }).then(result=>{
    return result
  })
  return {
    type: "HERBS",
    payload: request
  }
}

export function updateHerbs(id, quantity){
  const request = axios({
    method: 'put',
    url: `https://lunaportalserver.herokuapp.com/herbs/${id}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
    data: quantity
  }).then(result=> axios({
    method: 'get',
    url: `https://lunaportalserver.herokuapp.com/herbs`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  })).then(result=>{
    return result
  })
  return {
    type: "UPDATE_HERBS",
    payload: request
  }
}

export function addHerb(herb){
  const request = axios({
    method: 'post',
    url: `https://lunaportalserver.herokuapp.com/herbs/`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
    data: herb
  }).then(result=>{
    return result
  })
  return {
    type: "ADD_HERB",
    payload: request
  }
}
