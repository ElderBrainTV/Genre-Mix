const genres = [
    { name: 'Aetherpunk', description: 'Etheric energy, mystical airships, and alternative physics.', enabled: true  },
    { name: 'Alternate History', description: 'Speculates on what if historical events unfolded differently.', enabled: true  },
    { name: 'Arctic Fantasy', description: 'Adventures set in frozen landscapes, with mythical creatures and magic adapted to icy environments.', enabled: true },
    { name: 'Atompunk', description: 'A retro-futuristic genre set in the mid-20th century, emphasizing atomic energy, space exploration, and the Cold War era.', enabled: true },
    { name: 'Biopunk', description: 'Genetic engineering, biotechnology, and biohacking in a speculative future.', enabled: true  },
    { name: 'Body Horror', description: 'Disturbing transformations, mutations, and physical decay.', enabled: true  },
    { name: 'Clockpunk', description: 'Clockwork mechanisms, intricate gears, and steampunk aesthetics.', enabled: true  },
    { name: 'Cosmic Horror (Lovecraftian)', description: 'Unfathomable cosmic entities, existential dread, and forbidden knowledge.', enabled: true  },
    { name: 'Cozy Mystery', description: 'Light-hearted mysteries with amateur detectives and charming settings.', enabled: true  },
    { name: 'Cyberpunk', description: 'A dystopian future with advanced technology, hackers, and corporate control.', enabled: true  },
    { name: 'Dark Fantasy', description: 'Grim and supernatural tales, often with antiheroes and tragic elements.', enabled: true },
    { name: 'Death Game', description: 'A race where participants compete against each other for their lives in a series of escalating challenges until the fittest survivor(s) are left.', enabled: true },
    { name: 'Dieselpunk', description: 'Retro-futuristic, set in the early 20th century with diesel-powered technology.', enabled: true  },
    { name: 'Dystopian', description: 'Bleak futures, oppressive regimes, and societal collapse.', enabled: true  },
    { name: 'Fairy Tale Fantasy', description: 'Reimagines classic fairy tales with new twists or darker themes.', enabled: true },
    { name: 'Floating Islands', description: 'Skyborne civilizations, airships, and aerial adventures.', enabled: true  },
    { name: 'Folk Horror', description: 'Draws from folklore, rural settings, and eerie rituals.', enabled: true  },
    { name: 'Gothic Horror', description: 'Dark, eerie, and atmospheric, often set in haunted mansions or castles.', enabled: true  },
    { name: 'Gothic', description: 'Dark, atmospheric tales with eerie settings and mysterious events.', enabled: true  },
    { name: 'Grimdark', description: 'Brutal, morally ambiguous worlds with flawed characters.', enabled: true  },
    { name: 'Hard Science Fiction', description: 'Emphasizes scientific accuracy and plausible technology.', enabled: true  },
    { name: 'Heist', description: ' A thriller in which a criminal or group of criminals conceives and executes a major robbery.', enabled: true },
    { name: 'High Fantasy', description: 'A fantasy genre set in an entirely fictional world, often featuring epic adventures, magic, and mythical creatures.', enabled: true  },
    { name: 'Historical Fiction', description: 'Set in a specific historical period, blending real events with fictional characters and stories.', enabled: true  },
    { name: 'Horror', description: 'Evokes fear, dread, and supernatural elements, from ghosts to monsters.', enabled: true  },
    { name: 'Isekai', description: 'Characters transported to other worlds, often in fantasy or game-like settings.', enabled: true  },
    { name: 'LitRPG', description: 'Blends fantasy with video game mechanics, stats, and leveling systems.', enabled: true },
    { name: 'Low Fantasy', description: 'A fantasy genre set in a world with minimal supernatural elements, often focusing on everyday life and personal struggles.', enabled: true  },
    { name: 'Mad Max-style Wasteland', description: 'Post-apocalyptic chaos, survival, and vehicular combat.', enabled: true },
    { name: 'Magical Girl', description: 'Popular in Japan, this subgenre is of girls who use magic in either their training, idol stardom, or even to fight evil.', enabled: true },
    { name: 'Mannerpunk', description: 'Also known as fantasy of manners, this subgenre combines tropes from traditional fantasy and the comedy of manners.', enabled: true },
    { name: 'Mecha', description: 'Giant robots, futuristic warfare, and human-piloted machines.', enabled: true  },
    { name: 'Military', description: 'A story defined by a strict focus on the military conflict in a speculative or future setting.', enabled: true  },
    { name: 'Modern', description: 'Contemporary settings with relatable characters facing everyday challenges.', enabled: true  },
    { name: 'Monster', description: 'A story about a monster, creature, or mutant that terrorizes people.', enabled: true },
    { name: 'Mystery', description: 'Involves solving a puzzle or uncovering hidden truths, often with detectives or amateur sleuths.', enabled: true  },
    { name: 'Mythical', description: 'Explores ancient myths, legends, and gods from various cultures.', enabled: true  },
    { name: 'Nanopunk', description: 'Nano-scale technology, microscopic wonders, and cybernetics.', enabled: true  },
    { name: 'Nautical', description: 'High-seas adventures, pirates, and maritime mysteries.', enabled: true  },
    { name: 'Noir', description: 'Gritty crime fiction with morally ambiguous protagonists and a dark, urban atmosphere.', enabled: true  },
    { name: 'Paranormal Romance', description: 'Romance with supernatural elements like vampires, werewolves, or witches.', enabled: true  },
    { name: 'Portal Fantasy', description: 'Characters travel between worlds through portals or magical gateways.', enabled: true },
    { name: 'Post-apocalyptic', description: 'Bleak worlds after a catastrophic event, survival, and rebuilding.', enabled: true  },
    { name: 'Psychological Horror', description: 'Messing with the mind, inducing fear and unease.', enabled: true  },
    { name: 'Psychological Thriller', description: 'Messing with the mind, suspense, and psychological tension.', enabled: true  },
    { name: 'Romance', description: 'Focuses on love, relationships, and emotional connections between characters.', enabled: true  },
    { name: 'Shrunk', description: 'A whimsical genre where characters are miniaturized, exploring a world from a tiny perspective.', enabled: true },
    { name: 'Slice of Life', description: 'Depicts everyday experiences and relatable situations.', enabled: true },
    { name: 'Soft Science Fiction', description: 'Focuses on characters and emotions, with less emphasis on hard scientific accuracy.', enabled: true  },
    { name: 'Solarpunk', description: 'Utopian visions of a sustainable future, emphasizing renewable energy, green technology, and community.', enabled: true },
    { name: 'Southern Gothic', description: 'Southern Gothic: Dark and atmospheric stories set in the American South, often with eerie or grotesque elements.', enabled: true },
    { name: 'Space Opera', description: 'Grand space adventures, interstellar wars, and epic cosmic events.', enabled: true  },
    { name: 'Space Western', description: 'Cowboys in space, frontier justice, and intergalactic adventures.', enabled: true  },
    { name: 'Splatterpunk', description: 'Extreme horror, gore, and visceral violence.', enabled: true  },
    { name: 'Spy', description: 'An action-centered narrative following a secret agent (spy) or military personnel member who is sent on an espionage mission.', enabled: true },
    { name: 'Steampunk', description: 'A genre that combines historical elements with futuristic technology and a Victorian-era aesthetic.', enabled: true  },
    { name: 'Superhero', description: 'Characters with extraordinary abilities fighting for justice.', enabled: true  },
    { name: 'Supernatural', description: 'Involves ghosts, spirits, and supernatural phenomena intersecting with the real world.', enabled: true },
    { name: 'Survival Horror', description: 'Characters facing life-threatening situations, often in isolated settings.', enabled: true  },
    { name: 'Sword and Sorcery', description: 'Focuses on individual heroes, magic, and epic battles.', enabled: true  },
    { name: 'Thriller', description: 'Intense and suspenseful, often involving danger, espionage, or criminal activities.', enabled: true  },
    { name: 'Time Travel', description: 'Adventures through time, paradoxes, and altering historical events.', enabled: true },
    { name: 'Urban Fantasy', description: 'Fantasy elements in a modern urban setting, blending magic with city life.', enabled: true  },
    { name: 'Urban Fantasy', description: 'Fantasy elements in a modern urban setting, blending magic with city life.', enabled: true  },
    { name: 'Urban Gothic', description: 'Dark and mysterious tales set in urban environments, blending Gothic elements with city life.', enabled: true  },
    { name: 'Utopian', description: 'Presents idealized societies, exploring the potential benefits and challenges.', enabled: true },
    { name: 'Victorian Gothic', description: 'Dark tales set in the Victorian era, haunted mansions, and secrets.', enabled: true  },
    { name: 'Victorian', description: 'Settings inspired by the Victorian period, manners, and societal norms.', enabled: true  },
    { name: 'Weird West', description: 'Melds Western themes with supernatural or fantastical elements.', enabled: true },
    { name: 'Wuxia', description: 'Chinese martial arts fantasy, honor, and epic battles.', enabled: true  },
    { name: 'Zombie Apocalypse', description: 'Surviving a world overrun by zombies.', enabled: true  },

  ];
const genreContainer = document.getElementById('genreContainer');
const generateButton = document.getElementById('generateButton');
const numGenresInput = document.getElementById('numGenres');
const addGenreForm = document.getElementById('addGenreForm');
const genreNameInput = document.getElementById('genreName');
const genreDescriptionInput = document.getElementById('genreDescription');
const toggleGalleryButton = document.getElementById('toggleGallery');
const genreGallery = document.getElementById('genreGallery');
const toggleAllGenresButton = document.getElementById('toggleAllGenres');
const genreGalleryContainer = document.getElementById('genreGalleryContainer');

// Assume genres array is initialized here...

function getRandomGenres(count) {
  const enabledGenres = genres.filter(genre => genre.enabled);
  const shuffledGenres = enabledGenres.sort(() => 0.5 - Math.random());
  return shuffledGenres.slice(0, count);
}

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

function toggleGenreGallery() {
  genreGalleryContainer.style.display = genreGalleryContainer.style.display === 'none' ? 'block' : 'none';
}

function toggleAllGenres() {
  const allEnabled = genres.every(genre => genre.enabled);
  genres.forEach(genre => genre.enabled = !allEnabled);
  renderGenreGallery();
}

function showNotification(message, isError = false) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.className = `notification ${isError ? 'error' : 'success'}`;
  document.body.appendChild(notification);
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000); // Remove after 3 seconds
}

function registerEventListeners() {
  generateButton.addEventListener('click', displayRandomGenres);
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

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.createElement('div');
    darkModeToggle.classList.add('toggle-dark-mode');
    darkModeToggle.onclick = () => {
      const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', theme);
    };
    document.body.appendChild(darkModeToggle);
  });
renderGenreGallery(); // Initial call to populate the genre gallery
registerEventListeners(); // Register event listeners after function definitions
