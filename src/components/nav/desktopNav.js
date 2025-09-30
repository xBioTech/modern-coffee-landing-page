
function createDesktopNav(){

    const headerDiv = document.querySelector(".header");

    const navUl = document.createElement("ul");
    navUl.classList.add("nav-ul");
    const listContent = ["Home", "aboutUs", "ourCoffeeBeans"];
    for (let i = 0; i < 3; i++) {
        const listElements = document.createElement("li");
        listElements.textContent = listContent[i];
        listElements.classList.add(listContent[i]);
        navUl.appendChild(listElements);
    }
    headerDiv.appendChild(navUl);
}

export default createDesktopNav;