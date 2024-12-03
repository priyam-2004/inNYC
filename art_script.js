let currentImageIndex = 0;
const images = [
    "fine art/chimera.jpg",
    "fine art/midas.jpg",
    "fine art/ekya.jpg",
    "fine art/surrealism.jpg",
    "fine art/kashmir.jpg",
    "fine art/lino.png",
    "fine art/deer.jpg",
    "fine art/3d.jpg",
    "fine art/satyajitray.jpg",
    "fine art/dolphins.jpg"
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
            // Change to the next image
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imgElement.src = images[currentImageIndex];

            // After a short delay, fade the new image in
            imgElement.onload = () => {
                imgElement.style.opacity = 1; // Fade in the new image
            };
        }, 500); // Delay to match the fade-out duration
    }
});


