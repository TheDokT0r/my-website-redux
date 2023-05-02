const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const darkModeBtn = document.getElementById("dark_mode_btn");
const body = document.getElementById("body");
const githubLogo = document.getElementById("github_logo");

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
        githubLogo.src = "./assets/logos/github-bright.png";
        return;
    }

    body.classList.remove("dark");
    body.classList.add("light");
    githubLogo.src = "./assets/logos/github.png";

}

document.addEventListener("DOMContentLoaded", checkCurrentTheme);

darkModeBtn.addEventListener("click", () => {
    let isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === "true") {
        localStorage.setItem("darkMode", "false");
    }
    else {
        localStorage.setItem("darkMode", "true");
    }
    checkCurrentTheme();
});