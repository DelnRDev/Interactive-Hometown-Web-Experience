import {ItemDataList as landmarksData } from "../DataBase/landmarks.js";

let overlay = document.querySelector(".overlay");
let popupWindow = document.querySelector("#popupInfoWindow");
let itemGrid = document.getElementById("itemGrid")
let referenceContainer = document.getElementById("referenceSection");

const heroContainer = document.querySelector(".HeroArea");

let PhotosFolderPath = "../Photos";

function renderLandmarksGrid(){
    for(let i = 0; i < landmarksData.length; i++){
        let item = landmarksData[i];
        let templateBox = `
            <div class = "itemContainer">
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

heroContainer.style.backgroundImage  = "url(../../Photos/landmarkHero1.jpg)";

 