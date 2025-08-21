const display = document.querySelector('.display [type="text"] ')
console.log(display)

const form = document.querySelector('form')

const buttons = document.querySelectorAll('input[type="button"]')
console.log(buttons)

buttons.forEach(function (button) {

    button.addEventListener('click', function (e) {
        const value = e.target.value

        // display.value+=value

        if (value==="AC"){
            display.value=''
            
        }
        else if(value==="DE"){
            display.value=display.value.slice(0,-1);
        }

        else if(value==="="){
            display.value=eval(display.value) ///simple calculator logic
        }

        else{
            display.value=(display.value)+value
        }
        saveData();

    }, false)
    



})



function saveData(){
    localStorage.setItem('data',display.value)
}


function showData(){
    display.value=localStorage.getItem('data')
}

showData()