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
      
        document.getElementById('characters-container').innerHTML = ''
        for (let character of response.data) {
          
          let card = document.createElement("div")
          card.classList.add('character-info')
          let char = `
          
            <div class="name">id: <span style="color: #d8b362;">${character.id}</span></div>
            <div class="name">name: <span style="color: #d8b362;">${character.name}</span></div>
            <div class="occupation">occupation: <span style="color: #d8b362;">${character.occupation}</span></div>
            <div class="cartoon">is a Cartoon?: <span style="color: #d8b362;">${character.cartoon}</span></div>
            <div class="weapon">weapon: <span style="color: #d8b362;">${character.weapon}</span></div>
          
          `
          console.log(card)
          card.innerHTML = char
          document.getElementById('characters-container').appendChild(card)
        }
      })
      .catch()
  }

  getOneRegister (id) {
    const url = `http://localhost:8000/characters/${id}`
    axios
      .get(url)
      .then(response => {
        console.log(response.data)
        document.getElementById('characters-container').innerHTML = ''
        let card = document.createElement("div")
        card.classList.add('character-info')
        let char = `
          
            <div class="name">id: <span style="color: #d8b362;">${response.data.id}</span></div>
            <div class="name">name: <span style="color: #d8b362;">${response.data.name}</span></div>
            <div class="occupation">occupation: <span style="color: #d8b362;">${response.data.occupation}</span></div>
            <div class="cartoon">is a Cartoon?: <span style="color: #d8b362;">${response.data.cartoon}</span></div>
            <div class="weapon">weapon: <span style="color: #d8b362;">${response.data.weapon}</span></div>
          
          `
        console.log(card)
        card.innerHTML = char
        document.getElementById('characters-container').appendChild(card)
      })
      .catch()
  }

  createOneRegister (name, occupation, weapon, cartoon) {
    const url = `http://localhost:8000/characters`
    // console.log(name, occupation, weapon, cartoon)
    axios
    .post(url, {name, occupation, weapon, cartoon})
      .then(response => {
        console.log(response)
      })
    .catch()
  }

  updateOneRegister(id, name, occupation, weapon, cartoon ) {
    const url = `http://localhost:8000/characters/${id}`
    axios
      .patch(url, { name, occupation, weapon, cartoon })
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
        if(response.status === 200){
          console.log('deleted correctly')
          document.getElementById('delete-one').style.backgroundColor = "#4ED993"
      
        } else if (!response.status === 404){
          console.log('error while deleting')
          document.getElementById('delete-one').style.backgroundColor = "#F03E3D"
        }
      })
      .catch()
  }
}
