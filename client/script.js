import bot from './assets/bog.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

//Code for the Ai thinking animation
function loader(element){
    element.textContent = '';

    loadInterval = setInterval(() => {
        element.textContent += '🤔';

        if (element.textContent === '🤔🤔🤔🤔'){
            element.textContent = '';
        }
    }, 300)
}

//What AI does when user is typing text
function typeText(element, text) {
    let index = 0;

    let interval = setInterval(() => {
        if(index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 20)
}