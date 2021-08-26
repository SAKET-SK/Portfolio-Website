const mobileMenu = document.querySelector('.mobile-menu')
const navMenu = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links li')
const navBar = document.querySelector("nav")

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open')
    navLinks.forEach((link, index) => {
        link.classList.toggle('ani')
    })
    mobileMenu.classList.toggle('toggle')


})
if (document.title === "Saket Khopkar Portfolio")
    window.addEventListener('scroll', () => {
        navBar.classList.toggle("sticky", window.scrollY > 700)

    })
else {
    navBar.classList.add("sticky")
    navLinks.forEach(item, () => {
        item.style.fontWeight = "500"
    })
}
