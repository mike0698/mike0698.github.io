const imageHolder = document.getElementById("image-holder");
const imagePaths = ["aoe2.gif", "knife.gif",  "cs_gif.gif", "peon-warcraft3.gif",  "q3.gif", "ms_logo.jpg", "crt.jpeg", "brood.gif", "wood.webp", "lc.webp",  "crt2.webp"]; // Replace with your image paths
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
  "xpload.gif",
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