const menuButton = document.querySelector(".navigation-menu-button")
const navigationMenu = document.querySelector(".navigation-menu")

let displayMenu = false

const toggleMenu = () => {
    if (!displayMenu) {
        navigationMenu.classList.add("menu-visible")
        displayMenu = true
    } else {
        navigationMenu.classList.remove("menu-visible")
        displayMenu = false
    }
}

menuButton.addEventListener("click", toggleMenu)
