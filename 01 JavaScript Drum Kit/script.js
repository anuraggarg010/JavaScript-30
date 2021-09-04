function removeTransition(e) {
    if (e.propertyName !== 'transform') return;//check in console if prop name is transition after 0.7 sec is remove
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//used template literals 
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function all together if no audio

    key.classList.add('playing');//add css transition while pressing the key  
    audio.currentTime = 0; //rewind to the start if we press over and over again then by this we can achieve
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));/*In this we press anykey action
   is listened and every action remove transition fuction is fired*/
  
  window.addEventListener('keydown', playSound);