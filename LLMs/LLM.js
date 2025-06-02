import { GoogleGenAI } from "@google/genai";
// @google/genai install kr lena terminal me jake, ni toh run ni hoga !
//package.json me bhi type = "module" update kr lena, ni toh error aayega ki package nahi mila !

const ai = new GoogleGenAI({ apiKey: "YOUR__API__KEY" });
// ye meri API key hai, tumhe apni API key use karni hai, copy paste mat kr dena !

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "what is an array ? how many types of arrays are there ?", 
    // isme kch bhi bol sakte ho, jaise chatgpt me likhte ho vise hi !
                                                                  
  });
  console.log(response.text);
}

await main(); // await ko hata skte ho !
