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
  Evaluate the provided solution implementation against all possible test cases. This includes:
  - Typical cases and inputs as expected by the problem statement.
  - Edge cases for the given data type (e.g., empty inputs, maximum size inputs, special characters for strings, etc.).
  - Cases that are likely to be tricky or where naive implementations often fail.

  **Question:** Does the implementation return the correct output for all test cases and edge cases across different types of inputs? Please respond with a simple 'Yes' or 'No'. Only provide the answer without any additional explanation.`;


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
    const { question, code } = await request.json(); // Parse JSON body

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
