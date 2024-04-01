// Fetch genres from the JSON file
let genres = [];

fetch('genres.json')
  .then(response => response.json())
  .then(data => {
  genres = data;
  renderGenreGallery(); 
  registerEventListeners(); 

  // Add needles to existing slots
  const existingSlots = document.querySelectorAll('.slot');
  existingSlots.forEach(slot => {
    const slotReelNeedle = document.createElement('div');
    slotReelNeedle.classList.add('slot-reel-needle');
    slotReelNeedle.textContent = '▼'; // Customize the needle symbol
    slot.appendChild(slotReelNeedle);
  });
})
  .catch(error => {
    console.error('Error loading genre data:', error);
  });
// ... (fetch genres code remains the same)
;
// Get HTML elements
const genreContainer = document.getElementById('genreContainer');
const numGenresInput = document.getElementById('numGenres');
const addGenreForm = document.getElementById('addGenreForm');
const genreNameInput = document.getElementById('genreName');
const genreDescriptionInput = document.getElementById('genreDescription');
const toggleGalleryButton = document.getElementById('toggleGallery');
const genreGallery = document.getElementById('genreGallery');
const toggleAllGenresButton = document.getElementById('toggleAllGenres');
const genreGalleryContainer = document.getElementById('genreGalleryContainer');
const addSlotButton = document.getElementById('addSlotButton');
const subtractSlotButton = document.getElementById('subtractSlotButton');
const spinButton = document.getElementById('spinButton');
const slotMachineContainer = document.querySelector('.slot-machine');

function createSlot() {
  const slot = document.createElement('div');
  slot.classList.add('slot');

  // Create and append the slot-reel element
  const slotReel = document.createElement('div');
  slotReel.classList.add('slot-reel');
  slot.appendChild(slotReel);

  slotMachineContainer.insertBefore(slot, addSlotButton);
}

// Function to remove the last slot
function removeSlot() {
  const slots = document.querySelectorAll('.slot-machine .slot');
  if (slots.length > 1) {
    const lastSlot = slots[slots.length - 1];
    lastSlot.remove();
  }
}

// Function to animate and spin the slots
function spinSlots() {
  const slots = document.querySelectorAll('.slot-reel');
  const enabledGenres = genres.filter(genre => genre.enabled);
  const shuffledGenres = enabledGenres.sort(() => 0.5 - Math.random());

  slots.forEach((slot, index) => {
    let iteration = 0;
    const maxIterations = 30; // Adjust the maximum number of iterations as needed
    const initialDelay = 100; // Initial delay in milliseconds
    const maxDelay = 500; // Maximum delay in milliseconds
    const delayIncrement = 20; // Delay increment per iteration

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * shuffledGenres.length);
      const randomGenre = shuffledGenres[randomIndex];
      slot.textContent = randomGenre.name;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        slot.textContent = shuffledGenres[(index + iteration) % shuffledGenres.length].name;
      }

      iteration++;
      const delay = Math.min(maxDelay, initialDelay + (iteration * delayIncrement));
      slot.style.animationDuration = `${delay}ms`;
    }, initialDelay);
  });
}

// Event listeners for the slot machine
addSlotButton.addEventListener('click', createSlot);
subtractSlotButton.addEventListener('click', removeSlot);
spinButton.addEventListener('click', spinSlots);

// ... (other functions remain the same)

// Initial calls
renderGenreGallery(); // Populate the genre gallery
registerEventListeners(); // Register event listeners

// Event listeners for the slot machine
addSlotButton.addEventListener('click', createSlot);
subtractSlotButton.addEventListener('click', removeSlot);
spinButton.addEventListener('click', spinSlots);

// Function to get random genres
function getRandomGenres(count) {
  const enabledGenres = genres.filter(genre => genre.enabled);
  const shuffledGenres = enabledGenres.sort(() => 0.5 - Math.random());
  return shuffledGenres.slice(0, count);
}

// Function to create a genre card
function createGenreCard(genre, includeToggleButton = false) {
  const genreCard = document.createElement('div');
  genreCard.classList.add('genreCard');

  const genreName = document.createElement('h2');
  genreName.textContent = genre.name;
  genreCard.appendChild(genreName);

  const genreDescription = document.createElement('p');
  genreDescription.textContent = genre.description || 'No description provided.';
  genreCard.appendChild(genreDescription);

  // Include toggle button only if specified (for gallery)
  if (includeToggleButton) {
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle', genre.enabled ? 'enabled' : 'disabled');
    toggleButton.textContent = genre.enabled ? '✓' : '✖';
    toggleButton.setAttribute('aria-label', genre.enabled ? 'Disable genre' : 'Enable genre');
    toggleButton.dataset.genreName = genre.name;
    toggleButton.onclick = () => toggleGenre(genre.name); // Attach event handler
    genreCard.appendChild(toggleButton);
  }

  return genreCard;
}

// Function to display random genres without toggle buttons
function displayRandomGenres() {
  const numGenres = parseInt(numGenresInput.value, 10);
  const randomGenres = getRandomGenres(numGenres);

  genreContainer.innerHTML = '';
  randomGenres.forEach(genre => {
    const genreCard = createGenreCard(genre); // Do not include toggle button
    genreContainer.appendChild(genreCard);
  });
}

// Function to render the genre gallery with toggle buttons
function renderGenreGallery() {
  genreGallery.innerHTML = '';
  genres.forEach(genre => {
    const genreCard = createGenreCard(genre, true); // Include toggle button
    genreGallery.appendChild(genreCard);
  });
}

// Function to toggle genre enabled state
function toggleGenre(genreName) {
  const genre = genres.find(g => g.name === genreName);
  if (genre) {
    genre.enabled = !genre.enabled;
    renderGenreGallery(); // Refresh the gallery to reflect changes
  }
}

// Function to toggle the visibility of the genre gallery
function toggleGenreGallery() {
  genreGalleryContainer.style.display = genreGalleryContainer.style.display === 'none' ? 'block' : 'none';
}

// Function to toggle the enabled state of all genres
function toggleAllGenres() {
  const allEnabled = genres.every(genre => genre.enabled);
  genres.forEach(genre => genre.enabled = !allEnabled);
  renderGenreGallery();
}

// Function to show a notification
function showNotification(message, isError = false) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.className = `notification ${isError ? 'error' : 'success'}`;
  document.body.appendChild(notification);
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000); // Remove after 3 seconds
}

// Function to register event listeners
function registerEventListeners() {
  toggleGalleryButton.addEventListener('click', toggleGenreGallery);
  toggleAllGenresButton.addEventListener('click', toggleAllGenres);

  addGenreForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = genreNameInput.value.trim();
    const description = genreDescriptionInput.value.trim();

    if (name) {
      genres.push({ name, description, enabled: true });
      genreNameInput.value = '';
      genreDescriptionInput.value = '';
      renderGenreGallery();
      showNotification('Genre added successfully!');
    } else {
      showNotification('Please enter a genre name.', true);
    }
  });
}

// Function to toggle dark mode
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.createElement('div');
  darkModeToggle.classList.add('toggle-dark-mode');
  darkModeToggle.onclick = () => {
    const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', theme);
  };
  document.body.appendChild(darkModeToggle);
});

// Initial calls
renderGenreGallery(); // Populate the genre gallery
registerEventListeners(); // Register event listeners