
  function detenerOtrosAudios(idAudio) {
    // Obtener todos los elementos de audio en la página
    let todosLosAudios = document.getElementsByTagName('audio');

    // Pausar todos los demás audios excepto el especificado
    for (let i = 0; i < todosLosAudios.length; i++) {
        let audio = todosLosAudios[i];
        if (audio.id !== idAudio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
}
