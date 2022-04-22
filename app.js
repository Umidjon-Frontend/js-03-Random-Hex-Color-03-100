const textHex = document.querySelector(".box-body h1");
const generateBtn = document.querySelector(".box-footer .btn");

generateBtn.addEventListener("click", generateHexColor);

function generateHexColor() {
    let randomHexColor = Math.random().toString(16).substring(2, 8);
    textHex.innerHTML = `#${randomHexColor}`;
    document.body.style.backgroundColor = `#${randomHexColor}`;
}
generateHexColor();
