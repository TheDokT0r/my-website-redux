const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const changeTitle = () => {
    title.textContent = "Don't you have anything better to do?";
    subtitle.textContent = "Like fr, why are you here?";
};

title.addEventListener("click", changeTitle);

subtitle.addEventListener("click", changeTitle);