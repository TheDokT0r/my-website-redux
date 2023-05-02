const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const darkModeBtn = document.getElementById("dark_mode_btn");
const body = document.getElementById("body");
let darkMode = localStorage.getItem("darkMode");

const changeTitle = () => {
    title.textContent = "Don't you have anything better to do?";
    subtitle.textContent = "Like fr, why are you here?";
};

title.addEventListener("click", changeTitle);

subtitle.addEventListener("click", changeTitle);

// Dark Mode
const checkCurrentTheme = () => {
    if (darkMode === "true") {
        darkModeBtn.textContent = "Switch Dark Mode";

        body.style.color = "white";
        body.style.backgroundColor = "black";
        body.style.borderColor = "white";
        return;
    }

    darkModeBtn.textContent = "Switch Light Mode";

    body.style.color = "black";
    body.style.backgroundColor = "white";
    body.style.borderColor = "black";
}


darkModeBtn.addEventListener("load", checkCurrentTheme);

darkModeBtn.addEventListener("click", () => {
    checkCurrentTheme();
    let current = localStorage.getItem("darkMode");

    localStorage.setItem("darkMode", !current);
});
