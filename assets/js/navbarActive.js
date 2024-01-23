const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('.navbar__item a');

navlinks.forEach(element => {
    if (element.href.includes(`${activePage}`)) {
        element.classList.add('active');
    }
});