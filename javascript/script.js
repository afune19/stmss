let slideIndex = 0;

function moveSlide(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // Transition slides by changing the transform property
    document.querySelector('.hero-slides').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Auto Slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const whatsappOverlay = document.getElementById("whatsappOverlay");

    // Show the WhatsApp overlay after 5 seconds
    setTimeout(() => {
        whatsappOverlay.style.display = "flex"; // Ensure it's visible
    }, 5000);
});

