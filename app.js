const genres = [
    // Main Genres
    { name: 'Steampunk', description: 'A genre that combines historical elements with futuristic technology and a Victorian-era aesthetic.' },
    { name: 'Low Fantasy', description: 'A fantasy genre set in a world with minimal supernatural elements, often focusing on everyday life and personal struggles.' },
    { name: 'High Fantasy', description: 'A fantasy genre set in an entirely fictional world, often featuring epic adventures, magic, and mythical creatures.' },
    { name: 'Historical Fiction', description: 'Set in a specific historical period, blending real events with fictional characters and stories.' },
    { name: 'Mystery', description: 'Involves solving a puzzle or uncovering hidden truths, often with detectives or amateur sleuths.' },
    { name: 'Romance', description: 'Focuses on love, relationships, and emotional connections between characters.' },
    { name: 'Thriller', description: 'Intense and suspenseful, often involving danger, espionage, or criminal activities.' },
    { name: 'Horror', description: 'Evokes fear, dread, and supernatural elements, from ghosts to monsters.' },
    { name: 'Cyberpunk', description: 'A dystopian future with advanced technology, hackers, and corporate control.' },
    { name: 'Urban Fantasy', description: 'Fantasy elements in a modern urban setting, blending magic with city life.' },
    { name: 'Sword and Sorcery', description: 'Focuses on individual heroes, magic, and epic battles.' },
    { name: 'Space Opera', description: 'Grand space adventures, interstellar wars, and epic cosmic events.' },
    { name: 'Alternate History', description: 'Speculates on what if historical events unfolded differently.' },
    { name: 'Gothic Horror', description: 'Dark, eerie, and atmospheric, often set in haunted mansions or castles.' },
    { name: 'Cozy Mystery', description: 'Light-hearted mysteries with amateur detectives and charming settings.' },
    { name: 'Paranormal Romance', description: 'Romance with supernatural elements like vampires, werewolves, or witches.' },
    { name: 'Psychological Thriller', description: 'Messing with the mind, suspense, and psychological tension.' },
    { name: 'Survival Horror', description: 'Characters facing life-threatening situations, often in isolated settings.' },
    { name: 'Atompunk', description: 'A retro-futuristic genre set in the mid-20th century, emphasizing atomic energy, space exploration, and the Cold War era.'},
    { name: 'Shrunk', description: 'A whimsical genre where characters are miniaturized, exploring a world from a tiny perspective.'},
    { name: 'Arctic Fantasy', description: 'Adventures set in frozen landscapes, with mythical creatures and magic adapted to icy environments.'},
    { name: 'Supernatural', description: 'Involves ghosts, spirits, and supernatural phenomena intersecting with the real world.'},
    { name: 'Southern Gothic', description: 'Southern Gothic: Dark and atmospheric stories set in the American South, often with eerie or grotesque elements.'},
    { name: 'Solarpunk', description: 'Utopian visions of a sustainable future, emphasizing renewable energy, green technology, and community.' },
    { name: 'Urban Gothic', description: 'Dark and mysterious tales set in urban environments, blending Gothic elements with city life.' },
    { name: 'Mythical', description: 'Explores ancient myths, legends, and gods from various cultures.' },
    { name: 'Modern', description: 'Contemporary settings with relatable characters facing everyday challenges.' },
    { name: 'Post-apocalyptic', description: 'Bleak worlds after a catastrophic event, survival, and rebuilding.' },
    { name: 'Noir', description: 'Gritty crime fiction with morally ambiguous protagonists and a dark, urban atmosphere.' },
    { name: 'Biopunk', description: 'Genetic engineering, biotechnology, and biohacking in a speculative future.' },
    { name: 'Nautical', description: 'High-seas adventures, pirates, and maritime mysteries.' },
    { name: 'Mecha', description: 'Giant robots, futuristic warfare, and human-piloted machines.' },
    { name: 'Dark Fantasy', description: 'Grim and supernatural tales, often with antiheroes and tragic elements.' },
    { name: 'Folk Horror', description: 'Draws from folklore, rural settings, and eerie rituals.' },
    { name: 'Hard Science Fiction', description: 'Emphasizes scientific accuracy and plausible technology.' },
    { name: 'Nanopunk', description: 'Nano-scale technology, microscopic wonders, and cybernetics.' },
    { name: 'Body Horror', description: 'Disturbing transformations, mutations, and physical decay.' },
    { name: 'Weird West', description: 'Melds Western themes with supernatural or fantastical elements.' },
    { name: 'Splatterpunk', description: 'Extreme horror, gore, and visceral violence.' },
    { name: 'Zombie Apocalypse', description: 'Surviving a world overrun by zombies.' },
    { name: 'Psychological Horror', description: 'Messing with the mind, inducing fear and unease.' },
    { name: 'Superhero', description: 'Characters with extraordinary abilities fighting for justice.' },
    { name: 'Urban Fantasy', description: 'Fantasy elements in a modern urban setting, blending magic with city life.' },
    { name: 'Dieselpunk', description: 'Retro-futuristic, set in the early 20th century with diesel-powered technology.' },
    { name: 'Mad Max-style Wasteland', description: 'Post-apocalyptic chaos, survival, and vehicular combat.' },
    { name: 'Floating Islands', description: 'Skyborne civilizations, airships, and aerial adventures.' },
    { name: 'Clockpunk', description: 'Clockwork mechanisms, intricate gears, and steampunk aesthetics.' },
    { name: 'Wuxia', description: 'Chinese martial arts fantasy, honor, and epic battles.' },
    { name: 'Dystopian', description: 'Bleak futures, oppressive regimes, and societal collapse.' },
    { name: 'Victorian Gothic', description: 'Dark tales set in the Victorian era, haunted mansions, and secrets.' },
    { name: 'Military Science Fiction', description: 'Battles in space, futuristic armies, and interstellar warfare.' },
    { name: 'Grimdark', description: 'Brutal, morally ambiguous worlds with flawed characters.' },
    { name: 'Victorian', description: 'Settings inspired by the Victorian period, manners, and societal norms.' },
    { name: 'Aetherpunk', description: 'Etheric energy, mystical airships, and alternative physics.' },
    { name: 'Isekai', description: 'Characters transported to other worlds, often in fantasy or game-like settings.' },
    { name: 'Cosmic Horror (Lovecraftian)', description: 'Unfathomable cosmic entities, existential dread, and forbidden knowledge.' },
    { name: 'Space Western', description: 'Cowboys in space, frontier justice, and intergalactic adventures.' },
    { name: 'Gothic', description: 'Dark, atmospheric tales with eerie settings and mysterious events.' },
    { name: 'Soft Science Fiction', description: 'Focuses on characters and emotions, with less emphasis on hard scientific accuracy.' }
  ];
  
  const genreContainer = document.getElementById('genreContainer');
  const generateButton = document.getElementById('generateButton');
  const numGenresInput = document.getElementById('numGenres');
  const addGenreForm = document.getElementById('addGenreForm');
  const genreNameInput = document.getElementById('genreName');
  const genreDescriptionInput = document.getElementById('genreDescription');
  
  function getRandomGenres(count) {
    const shuffledGenres = genres.sort(() => 0.5 - Math.random());
    return shuffledGenres.slice(0, count);
  }
  
  function displayRandomGenres() {
    const numGenres = parseInt(numGenresInput.value, 10);
    const randomGenres = getRandomGenres(numGenres);
  
    genreContainer.innerHTML = '';
  
    randomGenres.forEach(genre => {
      const genreCard = document.createElement('div');
      genreCard.classList.add('genreCard');
  
      const genreName = document.createElement('h2');
      genreName.textContent = genre.name;
      genreCard.appendChild(genreName);
  
      const genreDescription = document.createElement('p');
      genreDescription.textContent = genre.description || 'No description provided.';
      genreCard.appendChild(genreDescription);
  
      genreContainer.appendChild(genreCard);
    });
  }
  
  generateButton.addEventListener('click', displayRandomGenres);
  
  addGenreForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = genreNameInput.value.trim();
    const description = genreDescriptionInput.value.trim();
  
    if (name) {
      genres.push({ name, description });
      genreNameInput.value = '';
      genreDescriptionInput.value = '';
      showSuccessNotification('Genre added successfully!');
    } else {
        showErrorNotification('Please enter a genre name.');
    }
  });