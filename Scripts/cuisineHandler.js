import {ItemDataList as cuisinData, heroDataList} from "../DataBase/cuisine.js";
import {getCuisineById} from "../DataBase/cuisine.js";

//let cuisineButtons = document.getElementsByClassName("itemContainer");
let overlay = document.querySelector(".overlay");
let popupWindow = document.querySelector("#popupInfoWindow");
let closebtn = document.getElementById("closeButton") ;
let itemGrid = document.getElementById("itemGrid")
let referenceContainer = document.getElementById("referenceSection");

let heroSlideContainer = document.querySelector(".slider");

let PhotosFolderPath = "../Photos";

renderCuisinGrid();
let itemContainers = document.querySelectorAll(".js-itemContainer");

//load hero(make it auto slide next)
//heroContainer.style.backgroundImage  = `url(${PhotosFolderPath}/cuisineHero1.jpg)`;

itemContainers.forEach((btn) =>{
    btn.addEventListener("click", () => {
        console.log("clicked");
        overlay.style.display = "block";
        console.log(btn.dataset.itemId);
        let item = getCuisineById(btn.dataset.itemId);

        updatePopupWindow(item.name, item.recipe);
        
        popupWindow.classList.add("popupTweenIn");
    
    })
})

closebtn.addEventListener("click", function(){
    overlay.classList.remove("overlayTween");
    overlay.style.display = "none"
    
    popupWindow.classList.remove("popupTweenIn");
 
});



function updatePopupWindow(name, recipe){
    popupWindow.querySelector("h3").innerHTML = name;
    
    popupWindow.querySelector("ul").innerHTML = "";
    
    for(let desc of recipe){
        popupWindow.querySelector("ul").innerHTML += (`<li>${desc}</li>`);
    };
    
}



function renderCuisinGrid(){
    for(let i = 0; i < cuisinData.length; i++){

        let item = cuisinData[i];

        let templateBox = `
            <div class = "itemContainer js-itemContainer" data-item-id = "${item.id}">
                <img class = "itemImage" src = "${PhotosFolderPath}/cuisine${i + 1}.jpg" alt = "">
                <div class = "itemInfo">
                    <div class = "nameOfItem">${item.name}</div>
                    <div class = "ratingCol">
                        <div class = "itemRating">${item.rating.toFixed(1)}<small class = "maxRate">/5</small></div>
                        <small class = "numOfReviews">${item.numOfReviews} reviews</small>
                    </div>
                </div>
            </div>
        `;

        itemGrid.innerHTML += templateBox;
        referenceContainer.innerHTML += `${item.referenceItem}<br>`;
    }
}

//Hero section

for(let slide of heroDataList){
    let slideTemplate = `
        <div class="slide">
            <img class = "slideImg" src="${PhotosFolderPath}/${slide.fileName}" alt="${slide.alt}">
        </div>
    `;

    heroSlideContainer.innerHTML += slideTemplate;

    //add ref
    
    referenceContainer.innerHTML += `${slide.referenceItem}<br>`;
}


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let nextSlideButton = document.querySelector("#rightHeroButton");
let backSlideButton = document.querySelector("#leftHeroButton");


let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function backSlide(){
    if(currentIndex - 1 >= 0 ){
        currentIndex = (currentIndex - 1) % slides.length;
    }else{
        currentIndex = slides.length - 1;
    }
    
    updateSlider();
}

function updateSlider() {
    console.log(currentIndex);
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(nextSlide, 4000);

nextSlideButton.addEventListener("click", () =>{
    nextSlide();
})

backSlideButton.addEventListener("click", () =>{
    backSlide();
})
