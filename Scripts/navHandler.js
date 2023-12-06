let displayNavButton = document.querySelector(".navDisplayButton")
let mobileNav = document.querySelector(".mobileNav")

let AboutButton = document.querySelector(".navagation2 #aboutDropdownButton");

let dropDownMenu = document.querySelector("#mobileSubdropdown");
let dropdownItems = document.querySelectorAll("#mobileSubdropdown a")

let NavisOn = false;

let aboutDropIsOn = false;

AboutButton.addEventListener("click", function(){
    //let dropdownItemHeight = window.getComputedStyle(dropdownItem).getPropertyValue("height");
    //console.log(window.getComputedStyle(dropDownMenu).getPropertyValue("display"))
    //console.log(dropdownItemHeight)
   if(!aboutDropIsOn){
        for(let i = 0; i < dropdownItems.length; i++){
            let dropDItem = dropdownItems[i];
            dropDItem.style.height = "50px"
            dropDItem.style.visibility = "visible"
            if(i == dropdownItems.length - 1){
                console.log("yes")
                dropDItem.style.borderBottom = "1px solid white"
            }
        }
        //dropDownMenu.style.display = "block";
       
        console.log(window.getComputedStyle(dropDownMenu).getPropertyValue("display"))
        aboutDropIsOn = true
   }else{
    for(let dropDItem of dropdownItems){
        dropDItem.style.height = "0px"
        dropDItem.style.visibility = "hidden"
        
        
    }
    //dropDownMenu.style.display = "none";
    
    console.log(window.getComputedStyle(dropDownMenu).getPropertyValue("display"))
    aboutDropIsOn = false;
   }
    
    
})

displayNavButton.addEventListener("click", function(){
    if(!NavisOn){
        mobileNav.style.transform = " translateY(0)"
        NavisOn = true;
    }else{
        NavisOn = false;
        mobileNav.style.transform = " translateY(-100%)"
    }

})




