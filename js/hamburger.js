const menu = document.querySelector('.menu');
let state = false;
menu.addEventListener('click', async () => {
    enableHeader(state);
    console.log('ojioijoi')
});

function enableHeader(stateHeader) {
        const header = document.querySelector('header');
        const ul = document.querySelector('header ul');

        if (stateHeader == false ) {
            header.style.height = '8rem';
        setTimeout(() => {
            ul.style.transform = 'translate(0%, -20%)';
            state = true;
        }, 1000);

        } else {
            header.style.height = '0rem';
            ul.style.transform = 'translate(-200%, -200%)';
            state = false;
        }
}