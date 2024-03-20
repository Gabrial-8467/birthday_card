document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    audio.volume = 0.5;
});

// Function to play audio
function playAudio() {
    const audio = document.getElementById('myAudio');
    audio.play()
        .then(() => {
            console.log('Audio started playing.');
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
}

// Function to handle user interaction and play audio
function handleUserInteraction() {
    // Check if the audio has already been played
    const audioPlayed = sessionStorage.getItem('audioPlayed');
    if (!audioPlayed) {
        playAudio(); // If not played, play the audio
        sessionStorage.setItem('audioPlayed', true); // Set a flag to indicate audio played
    }
}

// Add event listeners for different types of interactions
document.addEventListener('DOMContentLoaded', handleUserInteraction); // For initial page load
document.addEventListener('click', handleUserInteraction); // For clicks
document.addEventListener('touchstart', handleUserInteraction); // For touch events

// Toggle card function
function toggleCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('open');
}

// Event listener for audio ended
const audio = document.getElementById('myAudio');
audio.addEventListener('ended', () => {
    console.log('Audio ended, restarting...');
    audio.play();
});
