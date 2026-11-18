import { StartSpeak } from "../voices/textToSpeech.js";
export let youtubeTab = null;

export function youtubeTool(command) {
  const words = [
    "youtube",
    "yt",
    "open",
    "search",
    "play",
    "on",
    "searching",
    "in",
  ];

  const query = command
    .filter((word) => !words.includes(word))
    .join(" ")
    .trim();

  const youtubeLink = query
    ? `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    : "https://www.youtube.com";

  StartSpeak(
    query
      ? `Launching YouTube and searching for ${query}. Please wait...`
      : "Opening YouTube. Please wait...",
  );

  youtubeTab = window.open(youtubeLink, "_blank");

  if (!youtubeTab) {
    StartSpeak("Sorry, YouTube could not be opened. Please allow popups.");
  }
  return;
}
