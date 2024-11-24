// Get the button and audio elements
const musicButton = document.getElementById("musicButton");
const musicPlayer = document.getElementById("musicPlayer");

// Toggle Play and Pause
musicButton.addEventListener("click", () => {
    if (musicPlayer.paused) {
        musicPlayer.play();
        musicButton.textContent = "⏸ Pause Anthem";
    } else {
        musicPlayer.pause();
        musicButton.textContent = "🎵 Play Anthem";
    }
});
