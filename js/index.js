function scrollToClass(className) {
    let element = document.getElementsByClassName(className)[0];

    window.scroll({
        top: element.offsetTop + parseFloat(window.getComputedStyle(element).getPropertyValue('padding-top')),
        behavior: 'smooth'
    })
}
