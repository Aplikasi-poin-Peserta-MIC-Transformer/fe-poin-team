import axios from 'axios'

// const url = 'https://api-poin-peserta.herokuapp.com/'
const url = 'http://localhost:3000/'
const prefix = url + 'api/v1'

export const GET = (path, body) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${prefix}/${path}`, body)
      .then((result) => {
        resolve(result.data);
      }, (err) => {
        reject.apply(err);
      })
  })
  return promise
}

export const POST = (path, body) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${prefix}/${path}`, body)
      .then((result) => {
        resolve(result.data);
      }, (err) => {
        reject.apply(err);
      })
  })
  return promise
}

export const PUT = (path, body) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${prefix}/${path}`, body)
      .then((result) => {
        resolve(result.data);
      }, (err) => {
        reject.apply(err);
      })
  })
  return promise
}

export const DELETE = (path, body) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${prefix}/${path}`, body)
      .then((result) => {
        resolve(result.data);
      }, (err) => {
        reject.apply(err);
      })
  })
  return promise
}


export const checkAPI = () => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${url}`)
      .then((result) => {
        resolve(result.data);
      }, (err) => {
        reject.apply(err);
      })
  })
  return promise
}