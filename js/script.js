const modalBtn = document.querySelectorAll('[data-modal]')
const closeBtn = document.querySelector('.close')
const modalContainer = document.querySelector('.modal');
const modalBuy = document.querySelector('.modal_btn');

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function openModal() {
    modalContainer.classList.add('show')
    document.body.style.overflow = 'hidden';
}

modalBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function closeModal() {
    modalContainer.classList.remove('show');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

modalBuy.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();

})

const anchorAbout = document.querySelector('[data-anchor-about=""]');
const anchorContacts = document.querySelector('[data-anchor-contacts=""]');
const anchorTarif = document.querySelector('[data-anchor-tarif=""]');
const anchorLocation = document.querySelector('[data-anchor-location=""]');
const anchorStart = document.querySelector('[data-anchor-start]');

anchorAbout.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
        behavior: 'smooth',
        top: 1057,
        left: 0
    });
})

anchorContacts.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
        behavior: 'smooth',
        top: 2040,
        left: 0
    });
})

anchorTarif.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
        behavior: 'smooth',
        top: 2750,
        left: 0
    });
})

anchorLocation.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
        behavior: 'smooth',
        top: 3636,
        left: 0
    });
})

anchorStart.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior:'smooth',
        top:0,
        left:0
    });
})

window.onscroll = function (e)
{
    if (window.scrollY >= 1057) {
        anchorStart.style.opacity = "100"
        anchorStart.style.pointerEvents = "all"
    } else {
        anchorStart.style.opacity = "0"
        anchorStart.style.pointerEvents = "none"
    }
}


//1057
//2040
//2750
//3636