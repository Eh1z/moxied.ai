import bot from './assets/bot.svg';
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

//Generate unique for each query ID
function generateUniqueId() {
    const timeStamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timeStamp}-${hexadecimalString};`
}

//Chat Block differentiation for AI and User
function chatStripe (isAi, value, uniqueId) {
    return (
        `
            <div class="wrapper ${isAi && 'ai'}">
                <div class="chat">
                    <div className="profile">
                        <img
                            src="${isAi ? bot : user}"
                            alt="${isAi ? 'bot' : 'user'}"
                        />
                    </div>
                    <div class="message" id=${uniqueId}>${value}></div>
                </div>
            </div>
        `
    )
}

//Submit Question Function
const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    //user's chat stripe
    chatContainer.innerHTML += chatStripe(false, data.get('prompt'));

    form.reset();

    //bot's chat stripe
    const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId);

    chatContainer.scrollTop = chatContainer.scrollHeight;

    const messageDiv = document.getElementById(uniqueId);

    loader(messageDiv)
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e);
    }
})