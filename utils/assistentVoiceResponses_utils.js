import { StartSpeak } from "../voices/textToSpeech.js";
import { getCurrentTemperature } from "./get_temperature.js";
import { get_days, get_greet } from "./get_timeDay.js";

export async function welcomeGreetResponses() {
  const greet = get_greet();
  const day = get_days();
  const tem = await getCurrentTemperature();
  const messages = [
    `Hello, ${greet}, Sir! I'm online and ready to assist. It's ${day}, with a current temperature of ${tem} degrees Celsius. Let's begin!`,

    `${greet}, Sir! Today is ${day}, and the temperature is ${tem} degrees Celsius. I'm online and ready to assist you. Let's make today productive!`,

    `${greet}, Sir! It's ${day}, and the temperature is ${tem} degrees Celsius. Your personal AI assistant is ready. How can I help you today?`,

    `${greet}, Sir! A new day brings new opportunities. Today is ${day}, with a temperature of ${tem} degrees Celsius. Let's make it a great day!`,

    `Hello, Sir!, ${greet} Your AI assistant is now online. It's ${day}, and the current temperature is ${tem} degrees Celsius. I'm ready to help you.`,

    `${greet}, Sir! I hope you're having a wonderful day. The temperature is ${tem} degrees Celsius today. What would you like to do?`,

    `Welcome back, ${greet}, Sir! It's ${day}, and the temperature is ${tem} degrees Celsius. Your personal assistant is ready. Let's get started!`,

    `${greet}, Sir! All systems are ready. Today is ${day}, and it's ${tem} degrees Celsius outside. What's the plan for today?`,

    `System online... ${greet}, Sir! Your AI assistant is ready and waiting for your command.`,

    `${greet}, Sir! It's great to have you here. I'm ready to make your daily tasks easier and faster.`,
  ];
  const index = Math.floor(Math.random() * messages.length);
  StartSpeak(messages[index]);
}

export function sleepModeGreetResponses() {
  const messages = [
    "Sir, I'm currently in sleep mode and not listening to voice commands. Just say 'Wake Up' whenever you need me.",

    "Your assistant is now in standby mode, Sir. Say 'Wake Up' to bring me back online.",

    "Sleep mode is active, Sir. I'm waiting for your wake-up command.",

    "Sir, my voice listening is paused. Say 'Wake Up' whenever you're ready.",

    "I'm currently resting in sleep mode, Sir. Just say 'Wake Up' to start interacting with me again.",

    "Your personal assistant is temporarily inactive, Sir. I'll be back as soon as you say 'Wake Up'.",

    "Standby mode is active, Sir. I'm saving power and waiting for your next command.",

    "Sir, I'm not available for voice commands right now. Say 'Wake Up' to bring me back online.",

    "System Status: Standby. Voice Listening: Paused. Sir, say 'Wake Up' to continue.",

    "I'm taking a short break, Sir. Just say 'Wake Up' whenever you need my assistance.",
  ];
  const index = Math.floor(Math.random() * messages.length);
  StartSpeak(messages[index]);
}

export function wakeUpModeGreetResponses() {
  const greet = get_greet();
  const messages = [
    `${greet}, Sir! I'm back online and ready to assist you. What would you like me to do?`,

    `${greet}, Sir! Welcome back. All systems are active, and I'm ready for your commands.`,

    `${greet}, Sir! Your assistant is now awake and ready. How can I help you today?`,

    `${greet}, Sir! I'm awake and listening. It's great to have you back. What's next?`,

    `${greet}, Sir! Voice recognition is active. I'm here and ready to help you.`,

    `${greet}, Sir! I'm back and fully ready. Let's make the most of your day!`,

    `${greet}, Sir! System activated successfully. Your personal assistant is now online.`,

    `${greet}, Sir! Ready when you are. Just tell me what you need.`,

    `${greet}, Sir! It's nice to have you back. I'm ready to make your tasks easier.`,

    `${greet}, Sir! I'm online and listening. Let's get started with your next command.`,
  ];
  const index = Math.floor(Math.random() * messages.length);
  StartSpeak(messages[index]);
}

export function clarificationGreetResponses() {
  const messages = [
    "Sorry, I didn't quite understand that. Could you please say it again?",

    "Sorry, I missed that. Could you please repeat it?",

    "I'm sorry, I didn't get that. Could you try saying it another way?",

    "Sorry about that! Could you please explain it a little more?",

    "I didn't quite catch that. Could you please try again?",

    "Sorry, I'm not sure I understood your request. Could you rephrase it?",

    "I may have misunderstood. Could you please clarify what you mean?",

    "Sorry, I couldn't understand that clearly. Could you say it again?",

    "I'm sorry for the confusion. Could you please explain it differently?",

    "I didn't get that properly. Could you please repeat your request?",
  ];
  const index = Math.floor(Math.random() * messages.length);
  StartSpeak(messages[index]);
}

export function goodbyeGreetResponses() {
  const messages = [
    "Goodbye, Sir! It was a pleasure assisting you. Have a wonderful day!",

    "See you soon, Sir! I'll be here whenever you need me.",

    "Signing off, Sir. Take care and have a great day!",

    "Alright, Sir! Going offline now. Feel free to call me whenever you need assistance.",

    "Until next time, Sir! Stay safe and keep smiling.",

    "It's time to say goodbye, Sir. Wishing you a productive and peaceful day!",

    "Goodbye for now, Sir! I'll be ready whenever you return.",

    "Take care, Sir! Your AI assistant is signing off. Have a lovely day!",

    "Session ending, Sir. Thank you for your time. See you again soon!",

    "That's all for now, Sir! Stay awesome. I'll be waiting for your next command.",
  ];
  const index = Math.floor(Math.random() * messages.length);
  StartSpeak(messages[index]);
}
