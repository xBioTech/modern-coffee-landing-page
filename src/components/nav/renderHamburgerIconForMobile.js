import menuSvg from "../../assets/menu.svg"

function renderHamburgerIconForMobile(){
    const headerDiv = document.querySelector(".header");

    const hamburgerIcon = new Image();
    hamburgerIcon.src = menuSvg;
    hamburgerIcon.classList.add("hamburger-icon");
    headerDiv.appendChild(hamburgerIcon);

}

export default renderHamburgerIconForMobile;