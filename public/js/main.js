// display back to top button when scrolling down and scroll to top of page onClick
(() => {
    const backToTopBtn = document.querySelector('#back-to-top__button');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0 && lastScroll <= currentScroll) {
                lastScroll = currentScroll;
                backToTopBtn.style.display = "none";
            } else {
                lastScroll = currentScroll;
                backToTopBtn.style.display = "block";
            }
    });
    backToTopBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });
})();



// show or hide info panel
const header = document.querySelector('.header');
const infoBtn = document.querySelector('#header__info-button');
const closePanelBtn = document.querySelector('#closePanel-button');
const panelElem = document.querySelector('#panelElem');

infoBtn.addEventListener('click', () => {
    panelElem.style.left = "0%";
});

closePanelBtn.addEventListener('click', () => {
    panelElem.style.left = '100%';
});
