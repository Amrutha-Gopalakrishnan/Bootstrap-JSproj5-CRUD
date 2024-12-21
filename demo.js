let addBtn = document.getElementById("add-btn")
let parentList= document.getElementById("group")
addBtn.addEventListener('click',addChapter)

function addChapter(event){
    if(parentList.children[0].className =="empty-msg"){
        parentList.children[0].remove()
    }
    let currentBtn= event.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentChapter= currentInput.value
    console.log(currentInput.value)

    let newLi = document.createElement('li')
    newLi.classList.add('list-group-item')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = ` <h2 class="flex-grow-1">${currentChapter}</h2>
            <button id="edit-btn" class="btn btn-outline-warning mx-3" type="button" id="button-addon2" onclick="editmsg(this)">Edit</button>
            <button id="remove-btn" class="btn btn-outline-danger" type="button" id="button-addon2" onclick="removeChapter(this)">Remove</button>`

    
    parentList.appendChild(newLi)
}

function removeChapter(currentElement){
    currentElement.parentElement.remove()
    let parentList= document.getElementById("group")
    if(parentList.children.length<=0){
        let newMsg = document.createElement("h3")
        newMsg.textContent ="Nothing is here!"
        newMsg.classList.add("empty-msg")
        parentList.appendChild(newMsg)
    }
}

function editmsg(currentElement){
    if(currentElement.textContent == "Done"){
        currentElement.textContent ="Edit"
        let currentChapter = currentElement.previousElementSibling.value
        let currentHeading = document.createElement("h3")
        currentHeading.className ="flex-grow-1"
        currentHeading.textContent = currentChapter
        currentElement.parentElement.replaceChild(currentHeading,currentElement.previousElementSibling)

    }
    else{
    currentElement.textContent = "Done"
    let currentChapter = currentElement.previousElementSibling.textContent
    let currentNewInput = document.createElement("input")
    currentNewInput.type="text"
    currentNewInput.className="form-control"
    currentNewInput.placeholder ="newInput"
    currentNewInput.value = currentChapter
    currentElement.parentElement.replaceChild(currentNewInput,currentElement.previousElementSibling)
    }

    
}