function startGame(artist) {
  // Redirect user to the game's page
  // Replace 'artist1.html', etc., with your actual game URLs
  switch (artist) {
    case "SHAY":
      window.location.href = "https://shaygame3-lk95.vercel.app/";
      break;
    case "JOK'AIR":
      window.location.href = "https://jokairgame.vercel.app/";
      break;
    case "GAZO":
      window.location.href = "artist3.html";
      break;
    default:
      alert("Game not found!");
  }
  // Charger les compteurs au chargement de la page
  async function loadCounters() {
    const response = await fetch("/counters");
    const counters = await response.json();
    for (const artistId in counters) {
      const counterElement = document.getElementById(`counter-${artistId}`);
      if (counterElement) {
        counterElement.textContent = counters[artistId];
      }
    }
  }

  // Diminuer le compteur pour un artiste
  async function decreaseCounter(artistId) {
    const response = await fetch("/decrease-counter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ artistId }),
    });
    const result = await response.json();
    if (result.success) {
      const counterElement = document.getElementById(`counter-${artistId}`);
      if (counterElement) {
        counterElement.textContent = result.newCount;
      }
    } else {
      alert(result.message);
    }
  }

  // Simuler le démarrage du jeu et la diminution du compteur
  function startGame(artistId) {
    alert(`Starting game for ${artistId}`);
    // Simuler qu'un joueur trouve le code
    setTimeout(() => {
      decreaseCounter(artistId);
    }, 2000); // Exemple : diminue après 2 secondes
  }

  // Charger les compteurs au démarrage
  loadCounters();
}
