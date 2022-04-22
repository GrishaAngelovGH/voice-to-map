const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = {}

if (typeof SpeechRecognition === 'function') {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
}

export default recognition