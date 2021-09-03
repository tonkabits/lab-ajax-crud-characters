const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
   const id = document.getElementById('character-id').value
    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById('character-id-delete').value
    console.log(id)
    charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.getElementById('id-edit').value
    const name = document.getElementById('name-edit').value
    const occupation = document.getElementById('occupation-edit').value
    const weapon = document.getElementById('weapon-edit').value
    const cartoon = document.getElementById('cartoon-edit').value
    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {  
    const name = document.getElementById('name-create').value
    const occupation = document.getElementById('occupation-create').value
    const weapon = document.getElementById('weapon-create').value
    const cartoon = document.getElementById('cartoon-create').value
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
  });
});
