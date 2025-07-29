document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const volumen = document.getElementById("volumen");

  audio.volume = 0.2;
  volumen.value = 0.2;

  vinilo.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      vinilo.classList.add("vinilo-girando");
    } else {
      audio.pause();
      vinilo.classList.remove("vinilo-girando");
    }
  });

  audio.addEventListener("play", () =>{
    vinilo.classList.add("vinilo-girando");
  });

  audio.addEventListener("pause", () =>{
    vinilo.classList.remove("vinilo-girando");
  });
  volumen.addEventListener("input", () => {
    audio.volume = volumen.value;
  });
});
