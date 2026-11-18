import { startListening, stopListening } from "./voiceToText.js";

export function StartSpeak(text) {
  stopListening();
  const isSpeechSupported = () =>
    "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

  if (!isSpeechSupported()) {
    console.error("Speech synthesis is not supported.");
    return;
  }

  const content = String(text ?? "").trim();

  if (!content) {
    console.warn("Please enter some text!");
    return;
  }

  // Stop previous speech
  window.speechSynthesis.cancel();

  let speech = new SpeechSynthesisUtterance(content);

  speech.lang = "hi-IN";
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 20;

  // Speech completed
  speech.onend = () => {
    console.log("Speech completed.");

    setTimeout(() => {
      startListening();
    }, 500);
  };

  // Handle speech errors
  speech.onerror = (event) => {
    console.error("Speech error:", event.error);
  };

  window.speechSynthesis.speak(speech);
}

export function stopSpeak() {
  if (!isSpeechSupported()) return;

  window.speechSynthesis.cancel();
  speech = null;
}
