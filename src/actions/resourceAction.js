import axios from 'axios'

export function getResources(){
  const request = axios({
    method: 'get',
    url: `https://lunaportalserver.herokuapp.com/resources`,
    headers: {'Authorization': `Bearer ${localStorage.token}`}
  }).then(result=>{
    return result
  })
  return {
    type: "RESOURCES",
    payload: request
  }
}

export function getOneResource(id){
  const request = axios.get(`https://lunaportalserver.herokuapp.com/resources/${id}`).then((resource)=>{
    return resource
  })
  return {
    type: "ONE_RESOURCE",
    payload: request
  }
}

export function getSomeResources(category){
  const request = axios.get(`https://lunaportalserver.herokuapp.com/resources/category/${category}`)
                    .then(resources=>{
                      return resources
                    })
  return{
    type: "GET_SOME_RESOURCES",
    payload: request
  }
}

export function addResource(resource){
  const request = axios({
    method: 'post',
    url: `https://lunaportalserver.herokuapp.com/resources`,
    headers: {'Authorization': `Bearer ${localStorage.token}`},
    data: resource
  }).then(result=> {
    return result.data
  })
  return{
    type: "ADD_RESOURCE",
    payload: request
  }
}
