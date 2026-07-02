const body = document.body;

const themeToggle = document.getElementById("themeToggle");

const themeMenu = document.getElementById("themeMenu");

const options = document.querySelectorAll(".theme-option");

const savedTheme = localStorage.getItem("theme") || "dark";

applyTheme(savedTheme);

themeToggle.addEventListener("click",()=>{

    themeMenu.classList.toggle("show");

});

options.forEach(option=>{

    option.addEventListener("click",()=>{

        const theme = option.dataset.theme;

        applyTheme(theme);

        themeMenu.classList.remove("show");

    });

});

function applyTheme(theme){

    body.classList.remove(

        "light-mode",

        "black-mode"

    );

    if(theme==="light"){

        body.classList.add("light-mode");

    }

    if(theme==="black"){

        body.classList.add("black-mode");

    }

    localStorage.setItem("theme",theme);

}

document.addEventListener("click",(e)=>{

    if(!e.target.closest(".theme-wrapper")){

        themeMenu.classList.remove("show");

    }

});