let tableOfContentBtn = document.querySelector("#TableOfContent");
let ulContent = document.querySelector("#ulContent");

let subNavContainer = document.querySelector("#subNav");
let title = document.querySelector("#title");
let sideNavContainer = document.querySelector("#aboutAside")


let btnActive = false

tableOfContentBtn.addEventListener("click", () =>{
    btnActive = !btnActive;
    console.log(btnActive);

    if(btnActive){
        subNavContainer.classList.add("navOpenAnimate")
    }else{
        subNavContainer.classList.remove("navOpenAnimate")
    }

})

let isPC = window.matchMedia("(min-width:1200px)");

if(isPC.matches){
    title.style.setProperty("display", "block")
    sideNavContainer.append(ulContent)
}else{
    title.style.setProperty("display", "none")
    subNavContainer.append(ulContent)

}

//responsive design
isPC.addListener(function(){
    if(isPC.matches){
        title.style.setProperty("display", "block")
        sideNavContainer.append(ulContent)
    }else{
        title.style.setProperty("display", "none")
        subNavContainer.append(ulContent)

    }
})


