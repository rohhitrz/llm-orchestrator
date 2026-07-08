import orchestrate from "./orchestrator.js";
import judge from "./judge.js";

const question = "What is the value of pi?";

const responses = await orchestrate(question);

const finalAnswer = await judge(question, responses);

console.log(finalAnswer);