// app/api/generate-question/route.js
import { NextResponse } from 'next/server';
import genAi from "@/lib/gemini";

async function generateQuestion(language, difficulty) {
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  const chat = model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 500,
    },
  });
  const body = `In ${language} at a ${difficulty} level, generate a coding question problem statement,Constraints for the problem,The code template should contain the main function to test the user's solution. (Note: Do not include the answer to the question).Inprortant Generate New Question for each request.
  Note:- Return the output as:-
  **Problem Statement:** The problem statement of the question ,  **Constraints:** The constraints of the question , **Code Template:** Provide a code template that includes the main function and structure necessary to test the user's solution. Do not include the actual implementation or solution to the problem.

  Inportant:- The code template should only include the skeleton of the code necessary to run the problem, such as function signatures and main function setup and includes predefined input values for testing. It should not contain any solution or answer to the question(Striclty:Empty Funtion Declaration).
  `;

  // Generate the content
  const result = await model.generateContent(body);
  const response_Gemini = await result.response;
  let AiOutput = await response_Gemini.text();
  return {
    Output: AiOutput,
    title: `Sample ${difficulty} ${language} Question`,
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get('language');
  const difficulty = searchParams.get('difficulty');

  if (!language || !difficulty) {
    return NextResponse.json({ error: 'Missing language or difficulty' }, { status: 400 });
  }

  try {
    const question = await generateQuestion(language, difficulty);
    return NextResponse.json(question);
  } catch (error) {
    console.error('Error generating question:', error);
    return NextResponse.json({ error: 'Error generating question' }, { status: 500 });
  }
}
