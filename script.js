let mail = document.querySelector('#mailInput')
let fName = document.querySelector('#nameInput')
let gender = document.querySelector('#gender')
let age = document.querySelector('#age')


let h2 = document.querySelector('.fNameText')
let ageTxt = document.querySelector('.ageText')
let mailTxt = document.querySelector('.mailText')

let userImg = document.querySelector('#user')


function collectData() {

    event.preventDefault()

    if(gender.value == 'male'){
        userImg.src  = 'male.jpg' 
    }else {
        userImg.src = 'women.jpg'       
       
     } userImg.src = gender.value + '.jpg'
      
    h2.innerText = fName.value
    ageTxt.innerText = age.value
    mailTxt.innerText = mail.value
}