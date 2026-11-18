import { normalizeSentence } from "../engine/normalize_sentence.js";
import { processCommand } from "../engine/process_command.js";
import {
  goodbyeGreetResponses,
  wakeUpModeGreetResponses,
} from "./assistentVoiceResponses_utils.js";

export function receiveCommands(command) {
  const userCommand = normalizeSentence(command);
  let modeStatus = JSON.parse(localStorage.getItem("aiModeStatus"));

  if (command.includes("sleep") && modeStatus) {
    goodbyeGreetResponses();
    localStorage.setItem("aiModeStatus", false);
    return;
  }

  if (command.includes("wake up") && !modeStatus) {
    wakeUpModeGreetResponses();
    localStorage.setItem("aiModeStatus", true);
    return;
  }

  if (
    !command.includes("sleep") &&
    !command.includes("wake up") &&
    modeStatus
  ) {
    processCommand(userCommand);
    return;
  }
}
