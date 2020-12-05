window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0; //SET AUDIO TIME TO ALWAYS START AT 0 ON BUTTON CLICK
  audio.play();

  console.log(audio);
});
