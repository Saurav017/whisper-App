const btn = document.querySelector('.btn');
const output = document.querySelector('.text');

// speech recognition
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated, you can to microphone');
};

greetings = ['I am good, how are you ?', 'Doing good homeboi', 'Leave me alone'];
weather = ['Weather is fine', 'You need a tan'];
intro = ["My name is Astro, I am your personal assistant. I can help you with your daily tasks. I can tell you the weather, time, date, and many more things. I am still in development phase, so I can't do much right now."];

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
    speech.text = 'Hey, right Now I dont know what you said. Maybe you can try again later in the upcoming version.';

    if(message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    else if(message.includes('weather')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }
    else if(message.includes('introduce yourself')) {
        const finalText = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

