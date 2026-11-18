import { traningData } from "../data/traning_data.js";
import { clarificationGreetResponses } from "../utils/assistentVoiceResponses_utils.js";
import { executeTools } from "./execute_tool.js";

function normalizeSentence(sentence) {
  return sentence
    .toLowerCase()
    .replace(/[^a-zA-Z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");
}

function removeMatchingWords(words, command) {
  if (!command) return;
  if (words.length == 0) {
    return command;
  }

  const removingWords = command.filter((text) => !words.includes(text));

  return removingWords;
}

export function processCommand(command) {
  if (!command) return;

  let score = 0;
  let intent = null;
  let normalizeCommand = normalizeSentence(command);

  for (const value of traningData) {
    for (const pattern of value.patterns) {
      const matchingWords = [];
      const normalizePattern = normalizeSentence(pattern);
      const userText = removeMatchingWords(matchingWords, normalizeCommand);

      for (const text of userText) {
        if (normalizePattern.includes(text)) {
          matchingWords.push(text);
        }
      }

      if (score < matchingWords.length) {
        score = matchingWords.length;
        intent = value.intent;
      }
    }
  }

  if (!intent) {
    clarificationGreetResponses();
    return;
  }

  executeTools(intent, normalizeCommand);
}
