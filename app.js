let closeButton = document.getElementById("button");
let menuButton = document.getElementById("menuButton");
let leftBar = document.getElementById("leftBar");

    menuButton.addEventListener("click",function(){
        leftBar.style.background = "blue"     
    });

    closeButton.addEventListener("click",function(){
        leftBar.style.background = "red";
    })

    
    
