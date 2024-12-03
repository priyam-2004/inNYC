let currentImageIndex = 0;
const images = [
    "photo/image1.jpg",
    "photo/image2.jpg",
    "photo/image3.jpg",
    "photo/image4.jpg",
    "photo/image5.jpg",
    "photo/image6.jpg",
    "photo/image7.jpg"
];

const startScreen = document.getElementById('start-screen');
const imgElement = document.getElementById('image');

document.body.addEventListener('click', () => {
    if (imgElement.classList.contains('hidden')) {
        // Hide the start screen and show the first image on the first click
        startScreen.classList.add('hidden');
        imgElement.classList.remove('hidden');
        imgElement.style.opacity = 1; // Ensure visibility immediately
    } else {
        // Fade out the current image smoothly
        imgElement.style.opacity = 0; 

        setTimeout(() => {
            // Change the image source to the next one
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imgElement.src = images[currentImageIndex];

            // Wait until the new image is loaded before fading it in
            imgElement.onload = () => {
                imgElement.style.opacity = 1; // Fade in the new image
            };
        }, 500); // Delay to match the fade-out duration
    }
});



