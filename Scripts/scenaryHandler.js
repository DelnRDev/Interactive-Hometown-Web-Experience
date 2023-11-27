import {categories, getCategoryById} from "../DataBase/scenary.js";


let itemGrid = document.querySelector("#itemGrid");
let PhotosFolderPath = "../Photos/GalleryPhotos/thumbnails"
let referenceSection = document.querySelector("#referenceSection");

for(let category of categories){

    let template = `
        <div class="img-container" data-category-id = "${category.id}">
            <img class = "photo" src="${PhotosFolderPath}/${category.fileName}" alt="">
        </div>
    `;
    
    itemGrid.innerHTML += template;

    //add reference
    referenceSection.innerHTML += `${category.referenceItem}<br>`;
    

}

let imgContainers = $('.img-container');


//JQuery 
$('document').ready(function() {
    

    //change overlay name when hover
    for(let imgContainer of imgContainers){
        let category = getCategoryById(imgContainer.dataset.categoryId)
        $(imgContainer).attr("data-content", category.name)
 
    }

});