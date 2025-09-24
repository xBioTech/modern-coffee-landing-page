function createHeader() {
    const contentDiv = document.getElementById("content");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    contentDiv.appendChild(headerDiv);

    return contentDiv;
}

export default createHeader;