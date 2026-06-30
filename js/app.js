
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('nav a[href^="#"]')
const menu = document.querySelectorAll('.navbar-menu')
const burger = document.querySelectorAll('.navbar-burger')
const navClose = document.querySelectorAll('.navbar-close')
const backdrop = document.querySelectorAll('.navbar-backdrop')
const mobileMenuLink = document.querySelectorAll('#mobile-menu a[href^="#"]')

document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
    window.addEventListener('scroll',handleScroll)
    
    if(burger.length && menu.length) {
        handleMenuToogle(burger, menu)
    }
    if(navClose.length && backdrop.length && menu.length) {
        handleMenuClose(navClose,backdrop,menu)
    }
    if(mobileMenuLink.length && navLinks.length && menu.length) {
        handleMenuLinkClicks(mobileMenuLink , navLinks , menu)
    }
})

function setActiveLink (sections , navLinks) {
    let index = sections.length;
    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("active"));
    if(navLinks[index]) {
        navLinks[index].classList.add("active")
    }
}
function handleScroll() {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('nav a[href^="#"]')
    setActiveLink(sections, navLinks)
}

function handleMenuToogle(burger , menu) {
    burger.forEach(b => {
        b.addEventListener('click', () => {
            menu.forEach(m => m.classList.toggle('hidden'))
        })
    })
}

function handleMenuClose (navClose , backdrop , menu) {
    navClose.forEach(c => {
        c.addEventListener('click', (e) => {
            e.stopPropagation() ;
            menu.forEach(m => m.classList.toggle('hidden'))
        })
    })
    backdrop.forEach(bd => {
        bd.addEventListener('click', () => {
            menu.forEach(m => m.classList.toggle('hidden'))
        })
    })
}

function handleMenuLinkClicks (mobileMenuLink , navLinks , menu) {
    mobileMenuLink.forEach(anchor => {
       anchor.addEventListener('click', () => {
        navLinks.forEach((link) => link.classList.remove('active'));
        const targetLink = document.querySelector(`nav a[href="${this.getAttribute('href')}"]`);
        if(targetLink) {
            targetLink.classList.add('active');
        }
        menu.forEach(m => m.classList.toggle('hidden'));
       })
    })
}