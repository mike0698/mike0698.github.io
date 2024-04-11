const imageHolder = document.getElementById("image-holder");
const imagePaths = ["aoe2.gif", "knife.gif",  "cs_gif.gif", "peon-warcraft3.gif",  "ducktape.webp", "u.gif", "q3.gif",  "crt.jpeg", "brood.gif", "wood.webp", "lc.webp",  "crt2.webp", "pizza.gif"]; // Replace with your image paths
let currentImageIndex = 0;


  
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  imageHolder.src = imagePaths[currentImageIndex];
  //imageHolder.src = getRandomImage();
  setTimeout(changeImage, 1100); // Change image every 5 seconds (5000 milliseconds)
}

function getRandomImage() {
    return imagePaths[Math.floor(Math.random() * imagePaths.length)];
 }

changeImage(); // Start the image cycling


const gifPaths = [
  "space.gif",
  "pipes.gif",
  "98.gif"
];

let currentGifIndex = 0;

function changeBackground() {
  const backgroundElement = document.querySelector(".background");
  backgroundElement.style.backgroundImage = `url(${gifPaths[currentGifIndex]})`;
  currentGifIndex = (currentGifIndex + 1) % gifPaths.length;
}

changeBackground(); // Initial background set
setInterval(changeBackground, 3000);

window.onload = function() {
  const loader = document.getElementById("loader");
  setTimeout(function() {
    loader.style.opacity = 0;
    setTimeout(function() {
      loader.style.display = "none";
    }, 500); // Add a delay for smooth fade-out transition
  }, 3000); // Change this to adjust the delay before fading (in milliseconds)
};

const textElement = document.getElementById("flashingText");
const textElement2 = document.getElementById("flashingText2");

const colors = ["white", "red", "yellow", "green"]; // Add more colors here

let currentColorIndex = 0;

function changeColor() {
  textElement.style.color = colors[currentColorIndex];
  textElement2.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Loop through the colors array
  setTimeout(changeColor, 500); // Change color every 500 milliseconds (adjust as needed)
}

changeColor(); // Start the color changing process