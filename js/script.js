let currentIndex = 0;
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

function openLightbox(index) {
    document.getElementById("lightboxModal").style.display = "block";
    currentIndex = index;
    showSlide(currentIndex);
}

function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0; // Loop back to first image
    if (currentIndex < 0) currentIndex = images.length - 1; // Loop to last image
    showSlide(currentIndex);
}

function showSlide(index) {
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = images[index];
}

// Adjust gallery to trigger lightbox with the correct index
document.querySelectorAll('.gallery-grid img').forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});
