const nav = document.querySelector('.nav'),
    navBtn = nav.querySelector('.nav__btn'),
    navMenu = nav.querySelector('.nav__menu'),
    dropdownBtn = nav.querySelectorAll('.nav__hover'),
    lightboxElement = document.querySelectorAll('.lightbox'),
    footer = document.querySelector('.footer');

const scrollNav = () => window.pageYOffset > 100 ? nav.classList.add('active') : nav.classList.remove('active');

const toggleMenu = () => {
    navBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
}

const toggleDropdown = (i, e) => {
    const dropdown = e.querySelector('.nav__dropdown');
    i === 'show' ? dropdown.classList.add('active') : dropdown.classList.remove('active');
}


const showLightbox = e => {
    e.preventDefault();
    const url = e.currentTarget.getAttribute('href')
    let lightbox = document.createElement('div');
        lightbox = lightbox.innerHTML = `<div class="lightbox__box"><div class="lightbox__close"></div><figure><img src="${url}" alt="lightbox" /></figure></div>`;
    footer.insertAdjacentHTML('beforeend', lightbox);
    const closeBtn = document.querySelector('.lightbox__close');
    closeBtn.addEventListener('click', removeLightbox);
}

const removeLightbox = () => {
    document.querySelector('.lightbox__box').remove();
}

navBtn.addEventListener('click', toggleMenu);

dropdownBtn.forEach(i => {
    i.addEventListener('mouseenter', () => toggleDropdown('show', i));
    i.addEventListener('mouseleave', () => toggleDropdown('hide', i));
})

lightboxElement.forEach(i => {
    i.addEventListener('click', showLightbox);
})

document.addEventListener('scroll', scrollNav);
scrollNav();