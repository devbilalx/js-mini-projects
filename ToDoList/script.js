const form=document.querySelector('form')
const taskEnter=document.getElementById('new-task')
const button=document.querySelector('button')
const list=document.getElementById('list')


form.addEventListener('submit',function(e){
    e.preventDefault()
    const taskValue=taskEnter.value

    if (taskValue==''){
        alert('Please enter some task')
    }
    else{
        const li=document.createElement('li') ///create list item
        li.textContent=taskValue ///set value for the item
        list.appendChild(li) // add item in list
    
        taskEnter.value='' // clear input value

        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        saveData()
    

    }

},false)

list.addEventListener('click',function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        saveData()
    }
    else{
        e.target.tagName==="SPAN"
        e.target.parentElement.remove();
        saveData()
    }
    
    
},false)

console.log(list)


function saveData(){
    localStorage.setItem('data',list.innerHTML);
}

function showTask(){
    list.innerHTML=localStorage.getItem('data');
}
showTask()