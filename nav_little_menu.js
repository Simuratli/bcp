let secretNavButton = document.querySelector('.open-menu-button');
let secertMenu = document.querySelector('.secret-menu');

secretNavButton.addEventListener('click', openCloseMenu);

function openCloseMenu(){
    secertMenu.classList.toggle('show-secret-menu')
}