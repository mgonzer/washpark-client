import axios from 'axios'

export function login(user){
  const request = axios.post('http://localhost:3000/auth/login', user)
    .then(result=>{
      localStorage.token = result.data.token;
      localStorage.id = result.data.id
    }).then(result=>axios({
      method: 'get',
      url: `http://localhost:3000/patients/${localStorage.id}`,
      headers: {'Authorization': `Bearer ${localStorage.token}`}
    }))
  .then(result=>{
    return result.data;
  })
  return {
    type: "LOGIN",
    payload: request
  }
}

export function signup(user){
  const request = axios.post('http://localhost:3000/auth/register', user)
    .then(result=>{
      localStorage.token = result.data.token;
      localStorage.id = result.data.id
    }).then(result=>axios({
      method: 'get',
      url: `http://localhost:3000/patients/${localStorage.id}`,
      headers: {'Authorization': `Bearer ${localStorage.token}`}
    }))
  .then(result=>{
    return result.data;
  })
  return {
    type: "SIGNUP",
    payload: request
  }
}

export function adminLogin(user){
  const request = axios.post('http://localhost:3000/auth/admin', user)
    .then(result=>{
      localStorage.token = result.data.token;
      localStorage.id = result.data.id
    }).then(result=>axios({
      method: 'get',
      url: `http://localhost:3000/admin/patients/`,
      headers: {'Authorization': `Bearer ${localStorage.token}`}
    }))
  .then(result=>{
    return result.data;
  })
  return {
    type: "ADMIN_LOGIN",
    payload: request
  }
}

export function getPatients(id){
  const request = axios({
    method: 'get',
    url: `http://localhost:3000/admin/patients/`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  }).then(result => {
    return result.data
  })
  return {
    type: "GET_PATIENTS",
    payload: request
  }
}

export function getOnePatient(id){
  const request = axios({
    method: 'get',
    url: `http://localhost:3000/admin/patients/${id}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  }).then(result => {
    return result
  })
  return {
    type: "GET_ONE_PATIENT",
    payload: request
  }
}

export function loadPatientData(){
  const request = axios({
    method: 'get',
    url: `http://localhost:3000/patients/${localStorage.id}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  }).then(result=>{
    return result.data
  })
  return {
    type: "LOAD_PATIENT",
    payload: request
  }
}

export function addNote(id, note){
  const request = axios({
    method: 'post',
    url: `http://localhost:3000/admin/patients/${id}/notes`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
    data: note
  }).then(result => {
    return result.data
  })
  return {
    type: "ADD_NOTE",
    payload: request
  }
}
