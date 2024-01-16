const iconBurget = document.querySelector('.header__burger-icon');

iconBurget.addEventListener('click', function (event) {
    const menu = document.querySelector('.header__nav');
    const computedStyle = getComputedStyle(menu);
    const displayValue = parseInt(computedStyle.top);

    if (displayValue < 0) {
        menu.style.top = '104px';
        menu.style.transition = '1s';
        iconBurget.firstElementChild.setAttribute('src', 'images/hero/close-icon.svg');
    } else {
        menu.style.top = '-400px';
        iconBurget.firstElementChild.setAttribute('src', 'images/hero/burger-icon.svg')
        menu.style.transition = '1s';
    }
})