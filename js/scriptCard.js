
    

fetch(`    https://perenual.com/api/species-list?page=1&key=sk-Jpau64673ebc742c0904`).then(response => response.json())
.then(data => {
    let count = 0
    let idOfCard=localStorage.getItem(`id`)
    let idOfShop=JSON.parse(idOfCard)
    const divsOfFlowers=document.getElementsByClassName(`cart--of--flower`)
    const textInresult=document.querySelector(`.text--shop__sec--sec`)
    const cardOfFlawer=document.getElementsByClassName(`costsFl`)
    const delteDiv=document.getElementsByClassName(`addCard`)
    const payAll=document.querySelector(`.payAll`)
    for(let i = 0 ;i<idOfShop.length;i++){
        let nameOfFlawer = data.data[idOfShop[i]].common_name
        let imgOfFlawer=data.data[idOfShop[i]].default_image.medium_url     
        console.log(imgOfFlawer);
        let htmlOfCard=`<div class="cart--of--flower">
        <img class="imgOfFlaw" src="${imgOfFlawer}" alt="">
        <p class="nameOfFlawor">${nameOfFlawer}</p>
        <div class="bottom--of--card">
        <div style="display:flex;align-items:center;">
            <p class="costsFl">5</p>$   
        </div>
            <div style="display: flex;" class="div">
                <h4 class="addCard" id="${idOfShop[i]}">Delete</h4>
            </div>
        </div>
    </div>`
    
    
    if(idOfCard!=false){
        payAll.insertAdjacentHTML(`afterbegin`,htmlOfCard)
    }
    }
    for(let i=0;i<cardOfFlawer.length;i++){
        let innerHTMLPlus=+cardOfFlawer[i].innerHTML
        console.log(innerHTMLPlus);
        count += innerHTMLPlus
    }
    payAll.addEventListener(`click`,(e)=>{
        let idOfCard=+e.target.id
        console.log(idOfCard);
        for(let i = 0 ;i<idOfShop.length;i++){
            if(idOfCard == idOfShop[i]){
                idOfShop=idOfShop.filter(item => item !=idOfCard)
                localStorage.setItem(`id`,JSON.stringify(idOfShop))
                console.log(idOfShop);
            }
        }
        
    })
    textInresult.innerHTML=count+`$`+` to pay`  

    console.log(count);
})
