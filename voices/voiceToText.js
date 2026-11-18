import { receiveCommands } from "../utils/receive_commands.js";

let recognition = null;
let isListening = false;
let shouldListen = false;

function isVoiceSupported() {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

// Handle recognized voice
function onResult(transcript, isFinal) {
  if (isFinal) {
    receiveCommands(transcript)
  }
}

// Handle errors
function onError(error) {
  console.error("Voice Error:", error);
}

function createRecognition() {
  if (!shouldListen) return;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  recognition = new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    isListening = true;
    console.log("AI Listening...");
  };

  recognition.onresult = (event) => {
    let transcript = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }

    const isFinal = event.results[event.results.length - 1].isFinal;

    onResult(transcript, isFinal);
  };

  recognition.onerror = (event) => {
    isListening = false;
    onError(event.error);

    if (
      ["not-allowed", "service-not-allowed", "audio-capture"].includes(
        event.error,
      )
    ) {
      shouldListen = false;
    }
  };

  recognition.onend = () => {
    isListening = false;
    recognition = null;

    if (shouldListen) {
      setTimeout(() => {
        if (shouldListen) createRecognition();
      }, 300);
    }
  };

  try {
    recognition.start();
  } catch (error) {
    isListening = false;
    recognition = null;
    onError(error.message);

    if (shouldListen) {
      setTimeout(createRecognition, 1000);
    }
  }
}

// Start listening
export function startListening() {
  if (!isVoiceSupported()) {
    onError("Speech recognition is not supported.");
    return;
  }

  if (shouldListen) return;

  shouldListen = true;
  createRecognition();
}

// Stop listening
export function stopListening() {
  shouldListen = false;

  if (recognition) {
    recognition.onend = null;
    recognition.stop();
    recognition = null;
  }

  isListening = false;
  console.log("Listening stopped.");
}

// Check listening status
export function isListeningNow() {
  return isListening;
}
