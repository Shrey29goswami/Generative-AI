import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCvU53I1CkqsI9FbWCcXYozjX23of_u7h4" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
        {
            role : "user",
            parts : [{ text: "Hi my name is shrey"}]
        },
        {
            role : "model",
            parts : [{ text: "Hi Shrey! It's nice to meet you. How can I help you today?"}]
        },
        {
            role : "user",
            parts : [{ text: "what is my name?"}]
        }


    ],
  });
  console.log(response.text);
}

main();