const userInput = document.querySelector(`.username`)
const passInput = document.querySelector(`.password`)
const emailInput = document.querySelector(`.email`)
const regBtn = document.querySelector(`.login--btn--reg`)
const loginBtn= document.querySelector(`.login--btn`)
const userLocal=localStorage.getItem(`user`)
const passLocal=localStorage.getItem(`pass`)
const emailLocal=localStorage.getItem(`email`)
regBtn.addEventListener(`click`, () => {
    if (userInput.value == false || emailInput.value == false || passInput.value == false) {
        alert(`Перепроверьте и напишите заново!`)
    }
    else {
        localStorage.setItem(`user`, userInput.value)
        localStorage.setItem(`pass`, passInput.value)
        localStorage.setItem(`email`, emailInput.value)
        alert(`Теперь залогиньтесь!`)
        setTimeout(function(){
            window.open(`indexLog.html`)
        },1000)
    }   
})



