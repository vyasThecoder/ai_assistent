import { get_days } from "./utils/get_timeDay.js";
import {
  sleepModeGreetResponses,
  wakeUpModeGreetResponses,
  welcomeGreetResponses,
} from "./utils/assistentVoiceResponses_utils.js";

function main() {
  const day = localStorage.getItem("day");
  const currentDay = get_days();

  if (!day || day != currentDay) {
    welcomeGreetResponses();
    localStorage.setItem("day", currentDay);
    localStorage.setItem("aiModeStatus", true);
    return;
  }

  const modeStatus = JSON.parse(localStorage.getItem("aiModeStatus"));

  if (!modeStatus) {
    sleepModeGreetResponses();
    return;
  }

  if (modeStatus) {
    wakeUpModeGreetResponses();
    return;
  }
}
main();

// processCommand("aaj ki taza newse");
// const query = "atif song";
// 
