import {ItemDataList as landmarksData, heroTable, ItemDataList, getLandmarkById } from "../DataBase/landmarks.js";

let overlay = document.querySelector(".overlay");
let popupWindow = document.querySelector("#popupInfoWindow");
let itemGrid = document.getElementById("itemGrid")
let referenceContainer = document.getElementById("referenceSection");

const heroSlideContainer = document.querySelector(".slider");

let PhotosFolderPath = "../Photos";

function renderLandmarksGrid(){
    for(let i = 0; i < landmarksData.length; i++){
        let item = landmarksData[i];
        let templateBox = `
            <div class = "itemContainer" data-item-id = ${item.id}>
                <img class = "itemImage" src = "${PhotosFolderPath}/attraction${i + 1}.jpg" alt = "">
                <div class = "itemInfo">
                    <div class = "nameOfItem">${item.name}</div>
                    <div class = "ratingCol">
                        <div class = "itemRating">${item.rating}<small class = "maxRate">/5</small></div>
                        <small class = "numOfReviews">${item.numOfReviews} reviews</small>
                    </div>
                </div>
            </div>
        `;

        itemGrid.innerHTML += templateBox;

        //render reference
        referenceContainer.innerHTML += `${item.referenceItem}<br>`;
    }
}

renderLandmarksGrid();

//heroContainer.style.backgroundImage  = "url(../../Photos/landmarkHero1.jpg)";

 
//Hero section

for(let slide of heroTable){
    let slideTemplate = `
        <div class="slide">
            <img class = "slideImg" src="${PhotosFolderPath}/${slide.fileName}" alt="${slide.alt}">
        </div>
    `;

    heroSlideContainer.innerHTML += slideTemplate;

    referenceContainer.innerHTML += `${slide.referenceItem}<br>`
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

//set grid item description
let gridItems = document.querySelectorAll(".itemContainer")

for(let item of gridItems){
    let itemData = getLandmarkById(item.dataset.itemId);
   item.style.setProperty('--before-content', `"${itemData.fileName}"`)

    let beforestyle = window.getComputedStyle(item, "::before")
    console.log(beforestyle.content)
   
}

