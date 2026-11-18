import { backToHome } from "../tools/backToHome_tool.js";
import { youtubeTool } from "../tools/youtube_tool.js";

const toolName = [
  {
    intentName: "youtube_intent",
    toolName: youtubeTool,
  },
  // {
  //   intentName: "google_intent",
  //   toolName: googleTool,
  // },
  // {
  //   intentName: "instagram_intent",
  //   toolName: instagramTool,
  // },
  {
    intentName: "home_intent",
    toolName: backToHome,
  },
];

export function executeTools(intent, command) {
  for (let tool of toolName) {
    if (tool.intentName.toLowerCase().includes(intent)) {
      tool.toolName(command);
      return;
    }
  }
}
