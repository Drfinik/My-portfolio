document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const close = document.querySelector('.header__nav-close'); // Элемент крестика

    burger.addEventListener('click', function () {
        nav.style.display = 'flex';
        burger.style.display = 'none';
    });

    // Обработчик клика по крестику
    close.addEventListener('click', function () {
        nav.style.display = 'none';
        burger.style.display = 'block';
    });
});