import { GoogleGenerativeAI } from '@google/generative-ai';

const genAi=new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
export default genAi;