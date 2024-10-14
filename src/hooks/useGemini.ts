import { GoogleGenerativeAI } from "@google/generative-ai";

const BASE_PROMPT = "Me retorne apenas um modelo de dados mockados de acordo com essa especificação:";

const useGemini = () => {
  const generateMock = async (contract: string) => {    
    const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `${BASE_PROMPT} ${contract}`;
    
    const result = await model.generateContent(prompt);
    return sanitizeResponse(result.response.text());
  };
 
  const sanitizeResponse = (response: string): string => {
    const dataWithouDirty = JSON.parse(response.replace('```json\n', '').replace('```', ''));
    const prettyPrintedJSON = JSON.stringify(dataWithouDirty, null, 6).replace(/"([^"]+)":/g, '$1:');
    const lastIndex = prettyPrintedJSON.length - 1;    
    return prettyPrintedJSON.substring(0, lastIndex) + ' '.repeat(4) + prettyPrintedJSON.charAt(lastIndex);
  };

  return { generateMock };
};

export default useGemini;
