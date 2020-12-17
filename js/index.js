var hamburgerMenu = document.getElementById('hamburger-menu');

function scrollToSection(sectionID, offsetPadding) {
    let element = document.getElementById(sectionID);

    window.scroll({
        top: element.offsetTop + (offsetPadding ? parseFloat(window.getComputedStyle(element).getPropertyValue('padding-top')) : 0),
        behavior: 'smooth'
    })
}

function toggleMenu() {
    hamburgerMenu.classList.toggle('pushed');
}

window.addEventListener('resize', () => {
    if(hamburgerMenu.classList.contains('pushed'))
        toggleMenu();
})

document.addEventListener('scroll', () => {
    if(hamburgerMenu.classList.contains('pushed'))
        toggleMenu();
})

document.body.addEventListener('touchstart', e => {
    if(hamburgerMenu.classList.contains('pushed') && e.target.id != 'pullout-menu' && e.target.id != 'hamburger-button' && e.target.parentNode.id != 'pullout-menu')
        toggleMenu();
});

document.body.addEventListener('click', e => {
    if(hamburgerMenu.classList.contains('pushed') && e.target.id != 'pullout-menu' && e.target.id != 'hamburger-button' && e.target.parentNode.id != 'pullout-menu')
        toggleMenu();
});

document.getElementById('exit-button').addEventListener('click', toggleMenu);
document.getElementById('hamburger-button').addEventListener('click', toggleMenu);
document.getElementById('scroll-top-button').addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});
document.querySelectorAll('.menu-link').forEach(element => {
    element.addEventListener('click', toggleMenu());
});