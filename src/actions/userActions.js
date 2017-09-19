import axios from 'axios'

export function login(user){
  const request = axios.post('https://lunaportalserver.herokuapp.com/auth/login', user)
    .then(result=>{
      localStorage.token = result.data.token;
      localStorage.id = result.data.id
    }).then(result=>axios({
      method: 'get',
      url: `https://lunaportalserver.herokuapp.com/patients/${localStorage.id}`,
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
  const request = axios.post('https://lunaportalserver.herokuapp.com/auth/register', user)
    .then(result=>{
      localStorage.token = result.data.token;
      localStorage.id = result.data.id
    }).then(result=>axios({
      method: 'get',
      url: `https://lunaportalserver.herokuapp.com/patients/${localStorage.id}`,
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
  const request = axios.post('https://lunaportalserver.herokuapp.com/auth/admin', user)
    .then(result=>{
      localStorage.token = result.data.token;
      localStorage.id = result.data.id
    }).then(result=>axios({
      method: 'get',
      url: `https://lunaportalserver.herokuapp.com/admin/patients/`,
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

export function getPatients(){
  const request = axios({
    method: 'get',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/`,
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
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${id}`,
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
    url: `https://lunaportalserver.herokuapp.com/patients/${localStorage.id}`,
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
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${id}/notes`,
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

export function pinArticle(article){
  const request = axios({
    method: 'post',
    url: `https://lunaportalserver.herokuapp.com/patients/${localStorage.id}/resources`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
    data: article
  }).then(result=>{
    return result.data
  })
  return {
    type: "PIN_ARTICLE",
    payload: request
  }
}

export function pinArticlePractitioner(id, article){
  const request = axios({
    method: 'post',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${id}/resources`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
    data: article
  }).then(result=>axios({
    method: 'get',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${id}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
  })).then(result=>{
    return result
  })
  return {
    type: "PIN_ARTICLE_PRACTITIONER",
    payload: request
  }
}

export function updateUser(id, user){
  const request = axios({
    method: 'put',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${id}/`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
    data: user
  }).then(result=>axios({
    method: 'get',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${id}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
  })).then(result=>{
      return result
  })

  return {
    type: "UPDATE_USER",
    payload: request
  }
}

export function deleteNote(uId, nId){
  const request = axios({
    method: 'delete',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${uId}/notes/${nId}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  }).then(result => axios({
    method: 'get',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${uId}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
  })).then(result=>{
    return result
  })
  return {
    type: "DELETE_NOTE",
    payload: request
  }
}

export function removeResource(uId, rId){
  const request = axios({
    method: 'delete',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${uId}/resources/${rId}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  }).then(result => axios({
    method: 'get',
    url: `https://lunaportalserver.herokuapp.com/admin/patients/${uId}`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
  })).then(result=>{
    return result
  })
  return {
    type: "REMOVE_RESOURCE",
    payload: request
  }
}
