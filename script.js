const progressBars = document.querySelectorAll(".rgb input");
const color = document.querySelector(".color");
var colorCode = document.querySelector(".colorCode p");
var red = progressBars[0].value;
var green = progressBars[1].value;
var blue = progressBars[2].value;
function handleChange(input) {
    switch (input.id) {
        case "red": red = input.value; break;
        case "green": green = input.value; break;
        case "blue": blue = input.value; break;
    }
    color.style.backgroundColor = `rgb(${red + "," + green + "," + blue})`;
    colorCode.innerText = `rgb(${red + "," + green + "," + blue})`;
}
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(colorCode.innerHTML);
        window.alert(`Content copied to clipboard`);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

