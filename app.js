var listElmnt = document.querySelector('#app ul')
var inputElmnt = document.querySelector('#app input')
var buttonElmnt = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {

    listElmnt.innerHTML = ''

    for (todo of todos) {
        var todoElmnt = document.createElement('li')
        var todoTxt = document.createTextNode(todo)

        var linkElmnt = document.createElement('a')

        linkElmnt.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkElmnt.setAttribute('onclick', `deleteTodo(${pos})`)

        var linkTxt = document.createTextNode('Excluir')

        linkElmnt.appendChild(linkTxt)

        todoElmnt.appendChild(todoTxt)
        todoElmnt.appendChild(linkElmnt)

        listElmnt.appendChild(todoElmnt)
    }
}

renderTodos()

function addTodo() {
    var todoTxt = inputElmnt.value

    todos.push(todoTxt)
    inputElmnt.value = ''
    renderTodos()
    saveToStorage()
}

buttonElmnt.onclick = addTodo

function deleteTodo(position) {
    todos.splice(position, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}