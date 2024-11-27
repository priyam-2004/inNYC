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
    if (!imgElement.classList.contains('hidden')) {
        // Change the image if the start screen is no longer visible
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.style.opacity = 0; // Fade out the image
        setTimeout(() => {
            imgElement.src = images[currentImageIndex];
            imgElement.style.opacity = 1; // Fade in the new image
        }, 500); // Match the fade-out duration
    } else {
        // Hide the start screen and show the first image on the first click
        startScreen.classList.add('hidden');
        imgElement.classList.remove('hidden');
        imgElement.style.opacity = 1; // Ensure visibility
    }
});


