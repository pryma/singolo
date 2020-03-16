const MENU = document.getElementById('menu');
const SUBMIT_BUT = document.getElementById('submit');
const CLOSE_REPLAY_BUT = document.getElementById('close-replay');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(a => a.classList.remove('nav-active'));
    event.target.classList.add('nav-active');

});
SUBMIT_BUT.addEventListener('click', () => {
    let subject = document.getElementById('subject').value.toString();
    
    MENU.querySelectorAll('a').forEach(a => a.classList.remove('nav-active'));
    event.target.classList.add('nav-active');

});
CLOSE_REPLAY_BUT.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(a => a.classList.remove('nav-active'));
    event.target.classList.add('nav-active');

});

