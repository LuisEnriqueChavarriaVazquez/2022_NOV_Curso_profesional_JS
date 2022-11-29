import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const button = document.querySelector("button");

//Creamos una instancia
const player = new MediaPlayer({ el: video });

//Cuando hacemos click al boton ejecutamos el método
button.onclick = () => player.togglePlay();