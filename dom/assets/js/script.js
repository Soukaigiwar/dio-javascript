const buttonMode = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const h2 = document.getElementsByTagName('h2')[0];
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const span = document.getElementsByTagName('span');
const darkModeClass = 'dark-mode';

function changeMode(){
    toggleCss();
    toggleText();
}

function toggleCss(){
    buttonMode.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    h2.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    for (let i = 0; i < span.length; i++)
        span[i].classList.toggle(darkModeClass);
}

function toggleText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)){
        buttonMode.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
        buttonMode.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON";
}

buttonMode.addEventListener('click', changeMode);

console.log(footer);