const resultElement = document.getElementById('result');
let recognition;
let finalTranscript = '';

function startConverting() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            console.log('Speech recognition started');
        };

        recognition.onresult = function(event) {
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }
            resultElement.innerHTML = finalTranscript + '<i style="color:#999;">' + interimTranscript + '</i>';
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error', event.error);
        };

        recognition.onend = function() {
            console.log('Speech recognition ended');
        };

        recognition.start();
    } else {
        console.log('Speech recognition not supported in this browser');
    }
}

function stopConverting() {
    if (recognition) {
        recognition.stop();
        console.log('Speech recognition stopped');
    }
}