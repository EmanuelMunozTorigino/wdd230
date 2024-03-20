

const $darkButton = document.getElementById("darkButton");

const $body = document.querySelector("body");

const section = document.querySelectorAll(".card");

const  $main = document.querySelector("main");

const $heroImgText = document.querySelector(".hero-label")

$darkButton.addEventListener("click", () => {
    if ($darkButton.src.includes("images/moon.svg")) {
        
        $body.style.background = "#000";
        $main.style.color = "#fff";
        $heroImgText.style.color = "#000";
        section[0].style.color = "#000";
        section[1].style.color = "#000";

        $darkButton.src = "images/sun.svg";
        $darkButton.alt = "Light Mode";

    }
    else {
        
        $body.style.background = "#fff";
        $main.style.color = "#000";

        $darkButton.src = "images/moon.svg";
        $darkButton.alt = "Dark Mode";
        

    };
});