let id = 0
document.querySelector('form').addEventListener('submit',(event) =>{
    event.preventDefault()
    let task = document.querySelector('#taskInput').value
    let date = document.querySelector('#taskDate').value
    let ul = document.querySelector('#taskList')
    let html = `<li id="id${id}"><div class="txt">${task}</div><div class="date">${date}</div><button id="delete" onclick="deleteTask(${id})">Delete</button></li>`
    ul.innerHTML += html
    document.querySelector('#taskInput').value = ''
    document.querySelector('#taskDate').value = ''
    id++
})

function deleteTask(id){
    document.querySelector(`#id${id}`).remove()
}