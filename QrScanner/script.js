const button=document.querySelector('.qr')
const inputText=document.querySelector('#text')

const qrImage=document.getElementById('qrImage')

const apiQr=' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example '


function generateQr(){

    qrImage.src=apiQr+inputText.value

    
}

button.addEventListener('click',()=>{
    if(inputText.value==''){
        alert("Enter any text or URL")
    }
    else{
        generateQr()
    }
},false)



    







