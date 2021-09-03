// const axios = require('axios')
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    const url = `http://localhost:8000/characters`
    axios
      .get(url)
      .then(response => {
          console.log(response)
      })
      .catch()
  }

  getOneRegister (id) {
    const url = `http://localhost:8000/characters/${id}`
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
      })
      .catch()
  }

  createOneRegister () {
    const url = `http://localhost:8000/characters`
    axios
    .post(url)
      .then(response => {
        console.log(response)
      })
    .catch()
  }

  updateOneRegister (id) {
    const url = `http://localhost:8000/characters/${id}`
    axios
      .patch(url)
      .then(response => {
        console.log(response)
      })
      .catch()
  }

  deleteOneRegister (id) {
    const url = `http://localhost:8000/characters/${id}`
    axios
      .delete(url)
      .then(response => {
        console.log(response)
      })
      .catch()
  }
}
