const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const darkModeBtn = document.getElementById("dark_mode_btn");
const body = document.getElementById("body");

const changeTitle = () => {
    title.textContent = "Don't you have anything better to do?";
    subtitle.textContent = "Like fr, why are you here?";
};

title.addEventListener("click", changeTitle);

subtitle.addEventListener("click", changeTitle);

// Dark Mode
const checkCurrentTheme = () => {
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark");
        darkModeBtn.textContent = "Light Mode";
        return;
    }

    body.classList.remove("dark");
    body.classList.add("light");
}

document.addEventListener("DOMContentLoaded", checkCurrentTheme);

darkModeBtn.addEventListener("click", () => {
    let currentMode = localStorage.getItem("darkMode");
    if (currentMode === "true") {
        localStorage.setItem("darkMode", "false");
    }
    else {
        localStorage.setItem("darkMode", "true");
    }
    checkCurrentTheme();
});