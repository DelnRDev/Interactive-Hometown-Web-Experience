import {eventTable, getEventById} from "../DataBase/timeline.js"

let timelineList = document.querySelector(".js-timelineList")

for(let i = 0; i < eventTable.length; i++){

    let item = eventTable[i];

    let templateBox = `
        <li>
            <h3 class="heading">${item.name}</h3>
            <p>${item.description}</p>
            <span class="date">${item.date}</span>
            <span class="circle"></span>
            <button class = "readMore" data-item-id = "${item.id}">read more</button>
        </li>
    `;

    timelineList.innerHTML += templateBox;
    
}

let readMoreButtons = document.querySelectorAll(".readMore")
let overlay = document.querySelector(".overlay");
let popupWindow = document.querySelector("#popupInfoWindow");
let closebtn = document.getElementById("closeButton") ;

for(let moreBtn of readMoreButtons){
    moreBtn.addEventListener("click", function(){
        overlay.style.display = "block";
        console.log(moreBtn.dataset.itemId);
        let item = getEventById(moreBtn.dataset.itemId);

        updatePopupWindow(item.name, item.details);
        
        popupWindow.classList.add("popupTweenIn");
    })
}



closebtn.addEventListener("click", function(){
    overlay.classList.remove("overlayTween");
    overlay.style.display = "none"
    
    popupWindow.classList.remove("popupTweenIn");
 
});



function updatePopupWindow(name, details){
    popupWindow.querySelector("h3").innerHTML = name;

    popupWindow.querySelector("p").innerHTML = details;

    
}
