const loginBtn= document.querySelector(`.login--btn`)
const userInput = document.querySelector(`.username`)
const passInput = document.querySelector(`.password`)
const emailInput = document.querySelector(`.email`)
const userLocal=localStorage.getItem(`user`)
const passLocal=localStorage.getItem(`pass`)
const emailLocal=localStorage.getItem(`email`)
loginBtn.addEventListener(`click`,()=>{
    if(userInput.value == userLocal && passInput.value == passLocal){
        window.open(`indexMain.html`)
    }else{
        alert(`Неправильный логин или пароль!`)
    }
})