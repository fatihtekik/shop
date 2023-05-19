function forForBestsell(array,display){
    for(let i=0;i<array.length;i++){
        array[i].style.cssText=`display:${display}`
    }

}
function addCards(img,text,id,div){
    let htmlOfCard=`<div class="cart--of--flower">
<img class="imgOfFlaw" src="${img}" alt="">
<p class="nameOfFlawor">${text}</p>
<div class="bottom--of--card">
    <p class="costsFl">5$</p>   
    <div style="display: flex;" class="div">
        <img class="img--telega" src="/img/telege--main.png" alt="">
        <h4 class="addCard" id="${id}">Add to card</h4>
    </div>
</div>
</div>`
div.insertAdjacentHTML(`afterbegin`,htmlOfCard)
}
function addCardsTop(img,text,id,div){
    let htmlOfCard=`<div class="cart--of--flower--top">
<img class="imgOfFlaw" src="${img}" alt="">
<p class="nameOfFlawor">${text}</p>
<div class="bottom--of--card">
    <p class="costsFl">5$</p>   
    <div style="display: flex;" class="div">
        <img class="img--telega" src="/img/telege--main.png" alt="">
        <h4 class="addCard" id="${id}">Add to card</h4>
    </div>
</div>
</div>`
div.insertAdjacentHTML(`afterbegin`,htmlOfCard)
}
function addCardsForMin(img,text,id,div){
    let htmlOfCard=`<div class="cart--of--flower">
<img class="imgOfFlaw" src="${img}" alt="">
<p class="nameOfFlawor--min">${text}</p>
<div class="bottom--of--card">
    <p class="costsFl">5$</p>   
    <div style="display: flex;" class="div">
        <img class="img--telega" src="/img/telege--main.png" alt="">
        <h4 class="addCard" id="${id}">Add to card</h4>
    </div>
</div>
</div>`
div.insertAdjacentHTML(`afterbegin`,htmlOfCard)
}
function ShowHide(){
    const selectElement = document.getElementById("mySelect");
    selectElement.classList.toggle("hidden");
}
function filterPriceTagAll(){
    const topHit=document.getElementsByClassName(`cart--of--flower--top`)
    const selectElement = document.getElementById("mySelect");
    const collectioOfImg=document.getElementsByClassName(`img--of--bestSellers`)
    const cardShop=document.querySelector(`.sectionShop--flowers`)
    const CardOfMin=document.getElementsByClassName(`nameOfFlawor--min`)
    console.log(selectElement.value);
    fetch(`    https://perenual.com/api/species-list?page=1&key=sk-Jpau64673ebc742c0904`).then(response => response.json())
        .then(data => {
        if(selectElement.value == `all`){
            forForBestsell(topHit,`none`)
            forForBestsell(collectioOfImg,`none`)
            forForBestsell(CardOfMin,`none`)

                console.log(data.data.length);
                for(let i = 0 ;i<data.data.length;i++){
                    const nameOfFlawer = data.data[i].common_name
                    const imgOfFlawer=data.data[i].default_image.medium_url
                    addCards(imgOfFlawer,nameOfFlawer,i,cardShop)
                    console.log(data.data[i]);
                }
            console.log(data);
        }
        

        if(selectElement.value == `option`){
            const cardOFAll=document.getElementsByClassName(`cart--of--flower`)
            forForBestsell(cardOFAll,`none`)
            forForBestsell(topHit,`none`)
            for(let i = 0 ;i<8;i++){
                const nameOfFlawer = data.data[i].common_name
                const imgOfFlawer=data.data[i].default_image.medium_url
                addCards(imgOfFlawer,nameOfFlawer,i,cardShop)
                console.log(data.data[i]);
            }
        }
        // if(selectElement.value=`option2`){
        //     const cardOFAll=document.getElementsByClassName(`cart--of--flower`)
        //     forForBestsell(cardOFAll,`none`)
        //     forForBestsell(collectioOfImg,`none`)
        //     for(let i = 0 ;i<4;i++){
        //         const nameOfFlawer = data.data[i].common_name
        //         const imgOfFlawer=data.data[i].default_image.medium_url
        //         addCardsTop(imgOfFlawer,nameOfFlawer,i,cardShop)
        //         console.log(data.data[i]);
        //     }
        // }
    })
}
fetch(`    https://perenual.com/api/species-list?page=1&key=sk-Jpau64673ebc742c0904`).then(response => response.json())
.then(data => {
    const selectElement = document.getElementById("mySelect");
    const nameOfFlawerHTML=document.querySelectorAll(`.nameOfFlawor`)
    const imgOfFlawerHTML = document.querySelectorAll(`.imgOfFlaw`)
    const cardShop=document.querySelector(`.sectionShop--flowers`)
    const inputSearch=document.querySelector(`.seacrhFl`)
    const lupaShop=document.querySelector(`.lupaShop`)
    const BestSellOfDiv=document.querySelectorAll(`.img--of--bestSellers`)
    
    let listOfId=[]
    for(let i = 0 ;i<16;i++){
        const nameOfFlawer = data.data[i].common_name
        const imgOfFlawer=data.data[i].default_image.medium_url
        nameOfFlawerHTML[i].innerHTML=nameOfFlawer
        imgOfFlawerHTML[i].src=imgOfFlawer
        console.log(data.data[i]);
    }
    selectElement.addEventListener(`click`,()=>{
        filterPriceTagAll()
    })
    cardShop.addEventListener(`click`,(e)=>{
        let idOfCard=+e.target.id
        listOfId.push(+e.target.id)
        if(idOfCard != false){
           console.log(idOfCard); 
           console.log(data.data[idOfCard-1]);
           alert(`Успешно добавлено!`)
        }
        localStorage.setItem(`id`,JSON.stringify(listOfId))
        console.log(listOfId);
    })
    lupaShop.addEventListener(`click`,()=>{
        const deleteDiv=document.querySelector(`.cart--of--flower`)
        let seacrhingValue=inputSearch.value
        if(seacrhingValue == false){
            forForBestsell(BestSellOfDiv,`flex`)
            deleteDiv.remove()
        }
        
        console.log(data.data);
        for(let i = 0 ;i<data.data.length;i++){
            const nameOfFlawer = data.data[i].common_name
            const imgOfFlawer=data.data[i].default_image.medium_url
            if(seacrhingValue == data.data[i].common_name){
                console.log(data.data[i].common_name);
                forForBestsell(BestSellOfDiv,`none`)
                addCards(imgOfFlawer,nameOfFlawer,i,cardShop)
            }
        }
    })
})
