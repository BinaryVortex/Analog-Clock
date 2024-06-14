const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

};

setClock();

setInterval(setClock, 1000);

const switchTheme = (evt) => {
    const btn = evt.target;
    if (btn.textContent.toLowerCase() === "light"){
        btn.textContent = "dark";

        document.documentElement.setAttribute("data-theme", "dark");
    }

    else{
        btn.textContent = "light";
        document.documentElement.setAttribute("data-theme", "light")
    }
};

const switchModeBtn = document.querySelector(".btn");
switchModeBtn.addEventListener("click", switchTheme, false);

let currentTheme = "dark";

if( currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    switchModeBtn.textContent = currentTheme;
    
}