function createHeader() {
    const contentDiv = document.getElementById("content");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    contentDiv.appendChild(headerDiv);


    const shopName = document.createElement("h1");
    shopName.textContent = "Coffee Shop"
    shopName.classList.add("shop-name");
    headerDiv.appendChild(shopName);


    return contentDiv; 
}

export default createHeader;