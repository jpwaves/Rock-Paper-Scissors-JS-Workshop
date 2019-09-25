function closeWindow() {
  document.getElementById("settingsOptions").style.display = "none";
  document.getElementById("blurredBackground").style.display = "none";
  document.getElementById("background").style.backgroundImage = "linear-gradient(to bottom right, rgb(0, 255, 213), rgb(53, 117, 255));";
  document.getElementById("background").style.backgroundColor = "transparent";
  //document.body.style.position = "static";
}

function openWindow() {
  document.getElementById("settingsOptions").style.display = "initial";
  document.getElementById("background").style.display = "initial";
  document.getElementById("background").style.backgroundImage = "";
  document.getElementById("background").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  //document.body.style.position = "fixed";
}