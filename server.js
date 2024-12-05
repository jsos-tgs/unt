const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Endpoint pour la page principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint pour le jeu de l'artiste 1
app.get("/artist1", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "artist1.html"));
});

// Endpoint pour le jeu de l'artiste 2
app.get("/artist2", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "artist2.html"));
});

// Endpoint pour le jeu de l'artiste 3
app.get("/artist3", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "artist3.html"));
});

// Endpoint pour récupérer les fichiers audio (si nécessaire)
app.get("/audio-tracks/:artist", (req, res) => {
  const { artist } = req.params;

  // Exemple de gestion dynamique en fonction de l'artiste
  const audioTracks = {
    artist1: [
      { title: "Track 1", file: "https://example.com/audio1.mp3" },
      { title: "Track 2", file: "https://example.com/audio2.mp3" },
    ],
    artist2: [
      { title: "Track A", file: "https://example.com/audioA.mp3" },
      { title: "Track B", file: "https://example.com/audioB.mp3" },
    ],
    artist3: [
      { title: "Track X", file: "https://example.com/audioX.mp3" },
      { title: "Track Y", file: "https://example.com/audioY.mp3" },
    ],
  };

  if (audioTracks[artist]) {
    res.json(audioTracks[artist]);
  } else {
    res.status(404).json({ error: "Artist not found" });
  }
});

// Endpoint pour tester le serveur
app.get("/ping", (req, res) => {
  res.send("Server is running!");
});
// Initialiser les compteurs pour chaque artiste
const artistCounters = {
  artist1: 10,
  artist2: 10,
};

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// API pour récupérer les compteurs
app.get("/counters", (req, res) => {
  res.json(artistCounters);
});

// API pour diminuer le compteur
app.post("/decrease-counter", (req, res) => {
  const { artistId } = req.body;
  if (artistCounters[artistId] !== undefined && artistCounters[artistId] > 0) {
    artistCounters[artistId]--;
    res.json({ success: true, newCount: artistCounters[artistId] });
  } else {
    res.status(400).json({ success: false, message: "Invalid artist ID or counter is already at 0." });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
