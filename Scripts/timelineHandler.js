import {eventTable} from "../DataBase/timeline.js"

let timelineList = document.querySelector(".js-timelineList")

for(let i = 0; i < eventTable.length; i++){

    let item = eventTable[i];

    let templateBox = `
        <li>
            <h3 class="heading">${item.name}</h3>
            <p>${item.description}</p>
            <span class="date">${item.date}</span>
            <span class="circle"></span>
            <button class = "readMore">read more</button>
        </li>
    `;

    timelineList.innerHTML += templateBox;
    
}