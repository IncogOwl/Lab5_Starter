// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti()

function init() {
  // TODO
  const horn = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const button = document.querySelector('button');
  const audio = document.querySelector('audio');
  const image = document.querySelector('img');

  horn.addEventListener('change', function() {
    image.src = `assets/images/${horn.value}.svg`;
    audio.src = `assets/audio/${horn.value}.mp3`;;
  });

  volumeSlider.addEventListener('input', function() {
    const volume = volumeSlider.value;
    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  button.addEventListener('click', function() {
    audio.play();
    if (horn.value === 'party-horn') {
      jsConfetti.addConfetti({
        confettiRadius: 6,
      })
    }
  });
}
