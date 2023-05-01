const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const darkModeBtn = document.getElementById("dark_mode_btn");
let darkMode = localStorage.getItem("darkMode");

const changeTitle = () => {
    title.textContent = "Don't you have anything better to do?";
    subtitle.textContent = "Like fr, why are you here?";
};

title.addEventListener("click", changeTitle);

subtitle.addEventListener("click", changeTitle);

// Dark Mode
darkModeBtn.addEventListener("load", function () {
    if (localStorage.getItem("darkMode") === "true") {
        darkModeBtn.textContent = "Switch Dark Mode";
        darkMode = true;
        return;
    }

    darkModeBtn.textContent = "Switch Light Mode";
    darkMode = false;
});