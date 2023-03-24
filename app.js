const btn = document.querySelector('.btn');
const output = document.querySelector('.text');

// speech recognition
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated, you can to microphone');
};

recognition.onresult = function(event) {
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    output.textContent = transcript;
    readOutLoud(transcript);
    console.log(transcript);
}

// add the listener to the button
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    // speech.text = 'I dont know what you said';

    // if(message.includes('how are you')) {
    //     const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    //     speech.text = finalText;
    // }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

