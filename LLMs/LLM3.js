import readlineSync from "readline-sync";
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: "YOUR__API__KEY" });
const history = [];

async function chatting(userProblem) {
    history.push({
        role: "user",
        parts: [{ text: userProblem }],
    });
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: history,
  });
  history.push({
    role: "model",
    parts: [{ text: response.text }],
  });
  console.log("\n");
  console.log(response.text);
}

async function main() {
    const userProblem = readlineSync.question("Ask me anything :-  ");
    await chatting(userProblem); // await is used to wait for the response from the AI model,
                                // ni lgaya toh turant agla question puch lega
    main(); //agar main function ko call nahi kiya to program yaha pe ruk jayega, history me store nahi hoga 
}

main();
