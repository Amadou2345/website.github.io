let menu = document.getElementById("menu");
let button = document.querySelector("button");
let picture = document.querySelector("img");
let textDiv = document.getElementById("show_info")

/* @TODO Event Handler */
/*  
    try updating when button is clicked vs when
    dropdown value changes with
    menu.onchange = function...
*/
button.onclick = function(event) {
    // prevent page from reloading
    event.preventDefault();

    // capture userChoice
    let userChoice = menu.value;
    console.log(userChoice);

    if(userChoice == "one"){
      
        picture.src = "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/08/06/luffy-gear-5-one-piece-episode-1072-1024x576.jpeg";

        textDiv.innerHTML = "One Piece";
    } 
    else if (userChoice == "avatar"){
        picture.src = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/avatar-the-last-airbender-cropped.jpg";
        textDiv.innerHTML = "Avatar the last airbender";
    }
    else if (userChoice == "rick"){
        picture.src = "https://pyxis.nymag.com/v1/imgs/cd8/804/e0f612fa12d17e68e3d68ccf55f93cac4f-06-rick-morty.2x.rsocial.w600.jpg";
        textDiv.innerHTML = "Rick and Morty";
    }
    
}
