function startGame(artist) {
  // Redirect user to the game's page
  // Replace 'artist1.html', etc., with your actual game URLs
  switch (artist) {
    case "artist1":
      window.location.href = "https://shaygame3-lk95.vercel.app/";
      break;
    case "artist2":
      window.location.href = "artist2.html";
      break;
    case "artist3":
      window.location.href = "artist3.html";
      break;
    default:
      alert("Game not found!");
  }
}
