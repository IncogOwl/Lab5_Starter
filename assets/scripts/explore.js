// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Load available voices
  const voiceSelect = document.getElementById('voice-select');
  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
  
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Button functionality
  const button = document.querySelector('button');
  const textToSpeak = document.getElementById('text-to-speak');
  const smilingImage = document.querySelector('img');

  button.addEventListener('click', () => {
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoiceObj = voices.find(voice => voice.name === selectedVoice);
    utterance.voice = selectedVoiceObj;

    utterance.onstart = () => {
      // Change the image to the open-mouthed face when speech starts
      smilingImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      // Change the image back to the smiling face when speech ends
      smilingImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}