// app/api/validate-code/route.js

import { NextResponse } from 'next/server';
import genAi from "@/lib/gemini";


async function checkCode(Question, code) {
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  const chat = model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 500,
    },
  });
  const body = `Here is a coding problem and its solution implementation:

  **Problem Statement:**
  ${Question}

  **Solution Implementation:**
  ${code}

  **Task:**
  Evaluate the provided solution implementation and provide feedback on how to improve the solution. This includes:
  - Check for any logical errors in the code.
  - Provide indepth feedback on the code and how to improve it.
  - Suggest alternative approaches or optimizations to the code.
  - Provide a smaller answer to the above Task.`;


  // Generate the content
  const result = await model.generateContent(body);
  const response_Gemini = await result.response;
  let AiOutput = await response_Gemini.text();
  return {
    Output: AiOutput
  };
}

export async function POST(request) {
  try {
    const { question, code } = await request.json(); 

    if (!question || !code) {
      return NextResponse.json({ error: 'Missing question or code' }, { status: 400 });
    }


    const result = await checkCode(question, code);

    // Assuming Gemini returns { isCorrect: boolean }
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error validating code:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
