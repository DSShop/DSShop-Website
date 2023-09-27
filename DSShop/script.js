let isPlaying = false;
let audioPlayer = document.getElementById("audioPlayer");
let playButton = document.getElementById("playButton");

function toggleAudio() {
  if (isPlaying) {
    audioPlayer.pause();
    playButton.textContent = "Play";
  } else {
    audioPlayer.play();
    playButton.textContent = "Press again";
  }
  isPlaying = !isPlaying;
}

playButton.addEventListener("click", toggleAudio);

document.addEventListener("DOMContentLoaded", function() {
  var cookiesBanner = document.getElementById("cookies-banner");
  var acceptBtn = document.getElementById("accept-cookies");
  var declineBtn = document.getElementById("decline-cookies");

  // Überprüfen, ob die Cookie-Entscheidung bereits getroffen wurde
  var cookieDecision = localStorage.getItem("cookieDecision");

  if (cookieDecision === "accepted") {
      cookiesBanner.style.display = "none";
  } else if (cookieDecision === "declined") {
      cookiesBanner.style.display = "none";
      // Zur vorherigen Seite zurücknavigieren
      history.back();
  } else {
      cookiesBanner.style.display = "block";
  }

  acceptBtn.addEventListener("click", function() {
      // Cookie-Entscheidung speichern
      localStorage.setItem("cookieDecision", "accepted");
      cookiesBanner.style.display = "none";
  });

  declineBtn.addEventListener("click", function() {
      // Cookie-Entscheidung speichern
      localStorage.setItem("cookieDecision", "declined");
      // Zur vorherigen Seite zurücknavigieren
      history.back();
  });
});