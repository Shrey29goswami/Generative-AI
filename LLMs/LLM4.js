import readlineSync from "readline-sync";
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: "YOUR__API__KEY" });
const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [],
  });
// yaha pe bss modify krke chat.create() use kiya hai, taki history ko manage kar sake bina manually store kiye !
// automatically history manage karega, jaise chatgpt me hota hai ! technologia !!


async function main() {
    const userProblem = readlineSync.question("Ask me anything :-  ");
    const response = await chat.sendMessage({
        message: userProblem,
    });
    console.log(response.text);
    main(); 
}

main();
