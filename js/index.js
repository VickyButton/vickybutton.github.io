function scrollToSection(sectionID, offsetPadding) {
    let element = document.getElementById(sectionID);

    window.scroll({
        top: element.offsetTop + (offsetPadding ? parseFloat(window.getComputedStyle(element).getPropertyValue('padding-top')) : 0),
        behavior: 'smooth'
    })
}
