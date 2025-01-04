"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CodeEditor from '../../components/Editor';
import { AlarmClockCheck, MessageCircleQuestion, CloudUpload, NotebookText, Pause, Play, RefreshCw, RotateCcw } from 'lucide-react';
import { useRef } from 'react';
import TimerComponent from '@/components/TimerComponent';
export default function QuestionPage() {
  const searchParams = useSearchParams();
  const language = searchParams.get('language');
  const difficulty = searchParams.get('difficulty');
  const [question, setQuestion] = useState(null);
  const [code, setCode] = useState('');
  const [response, setResponse] = useState(null);
  const [feedbackResponse, setFeedbackResponse] = useState(null);
  const [rLoading, rsetLoading] = useState(false);
  const [sLoading, ssetLoading] = useState(false);
  const [fLoading, fsetLoading] = useState(false);




  function codeRunning(code) {

    const Language_version = {
      "c": "10.2.0",
      "c++": "10.2.0",
      "java": "15.0.2",
      "javascript": "18.15.0",
      "python": "3.10.0",
      "typescript": "5.0.3"
    }
    const fileExtensions = {
      "c": ".c",
      "c++": ".cpp",
      "java": ".java",
      "javascript": ".js",
      "python2": ".py",
      "python": ".py",
      "typescript": ".ts"
    };

    const body = {
      language: language,
      version: Language_version[language],
      files: [
        {
          name: `my_cool_code${fileExtensions[language]}`,
          content: code
        }
      ],
      stdin: "",
      args: ["1", "2", "3"],
      compile_timeout: 10000,
      run_timeout: 3000,
      compile_memory_limit: -1,
      run_memory_limit: -1
    };

    const request = new Request("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    fetch(request)
      .then(response => response.json())
      .then(data => {
        rsetLoading(false);
        setResponse(data.run.output);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  function extractParts(response) {
    // Extract problem statement
    const problemStatementMatch = response.match(/\*\*Problem Statement:\*\*\s*([\s\S]*?)(?=\*\*Constraints:\*\*|\*\*Code Template:\*\*)/);
    const problemStatement = problemStatementMatch ? problemStatementMatch[1].trim() : '';

    // Extract constraints
    const constraintsMatch = response.match(/\*\*Constraints:\*\*\s*([\s\S]*?)(?=\*\*Code Template:\*\*)/);
    const constraints = constraintsMatch ? constraintsMatch[1].trim() : '';

    // Extract code template
    const codeTemplateMatch = response.match(/\*\*Code Template:\*\*\s*```([a-zA-Z]+)\s*([\s\S]*?)\s*```/);
    const codeTemplateLanguage = codeTemplateMatch ? codeTemplateMatch[1].trim() : '';
    const codeTemplate = codeTemplateMatch ? codeTemplateMatch[2].trim() : '';
    
    return { problemStatement, constraints, codeTemplate, codeTemplateLanguage };
  }
  function check() {
    rsetLoading(true);
    codeRunning(code);
  }

  async function Feedback() {
    fsetLoading(true);
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: problemStatement, code: code }),
    });

    const data = await response.json();
    fsetLoading(false);
    setFeedbackResponse(data);
  }
  
    useEffect(() => {
      if (language && difficulty) {
        fetch(`/api/generate-question?language=${language}&difficulty=${difficulty}`)
          .then((response) => response.json())
          .then((data) => setQuestion(data));
      }
    }, [language, difficulty]);
  
  if (!question) return <div className='h-[90vh] flex justify-center items-center'>
    <div role="status flex flex-row">
      <svg aria-hidden="true" className="w-8 h-8  animate-spin text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
    </div>
    <p className='ml-[1vw]'>Loading....</p>
  </div>;
  
  const { problemStatement, constraints, codeTemplate } =extractParts(question.Output);

  async function handleSubmit() {
    ssetLoading(true);
    const response = await fetch('/api/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: problemStatement, code: code }),
    });

    const data = await response.json();
    ssetLoading(false);
    setResponse("Did Your Code Pass Submission?: "+data.Output);
  }

  return (
    <div className='pt-[3vh]'>
      <div className='flex justify-center items-center'>
        <div className='flex flex-row gap-[1vw]'>
          <button className='bg-[#333333] rounded-sm  pt-[3px] pb-[3px] flex min-w-[8vw]  justify-center' onClick={check}>
            {rLoading &&<div role="status flex flex-row">
              <svg aria-hidden="true" className=" w-6 h-6 animate-spin text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>}
            {!rLoading && <><span className='flex flex-row items-center h-[100%] pr-[4px]'>
              <Play size={16} strokeWidth={2.25} />
            </span>Run</>}
            
          </button>
          <button className='bg-[#333333] min-w-[13vw] rounded-sm pt-[3px] pb-[3px] flex justify-center items-center' onClick={handleSubmit}>
          {sLoading &&<div role="status flex flex-row">
              <svg aria-hidden="true" className=" w-6 h-6 animate-spin text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>}
            {!sLoading && <><span className='flex flex-row items-center h-[100%] pr-[6px]'><CloudUpload color="#00ff11" strokeWidth={1.25} /></span>Submit</>}
            </button>
          <button className='bg-[#333333] rounded-sm min-w-[15vw] pt-[3px] pb-[3px] flex justify-center items-center' onClick={Feedback}>
          {fLoading &&<div role="status flex flex-row">
              <svg aria-hidden="true" className=" w-6 h-6 animate-spin text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>}
            {!fLoading && <><span className='flex flex-row items-center h-[100%] pr-[6px]'><MessageCircleQuestion color="#1E39A1" strokeWidth={2} /></span>Feedback</>}
            </button>
          <div className='bg-[#333333] flex items-center justify-start rounded-sm pl-[10px] pr-[10px] pt-[3px] pb-[3px]'>
            <TimerComponent />
          </div>

        </div>
      </div>

      <div className='flex text-white'>
        <div className='w-[50%]'>
          <div className='bg-[#1E1E1E] m-[1vw] rounded-md overflow-hidden h-[60vh]'>
            <h1 className='bg-[#333333] text-white h-[6vh] flex items-center pl-2 w-[100%] rounded-t-lg'><span className='flex items-center pr-2'><NotebookText size={16} color="#007BFF" /></span>Description</h1>
            <div className='h-[calc(100%-6vh)] overflow-y-auto pr-[10px] pl-[10px] pb-[10px]'>
              <h1>Problem:</h1>
              <p className='mt-[4vh]'>{problemStatement}</p>
              <br />
              <h1>Constraint:</h1>
              <p>{constraints}</p>
            </div>
          </div>
          <div className='bg-[#1E1E1E] m-[1vw] rounded-md overflow-hidden h-[24vh]'>
            <h1 className='bg-[#333333] text-white h-[6vh] flex items-center pl-2 w-[100%] rounded-t-lg'>Test Result</h1>
            {response === null && <div className='h-[calc(100%-6vh)] overflow-y-auto flex justify-center items-center pb-[1vh] text-[#ffffffa0]'>You must run your code first</div>}
            {response && (
              <div className="h-[calc(100%-6vh)] overflow-y-auto pb-[1vh] pl-[1vw] text-[#ffffffa0]">
                <pre>{response}</pre>
              </div>
            )}
          </div>
        </div>
        <div className='w-[50%] m-[1vw] rounded-lg overflow-hidden'>
          <h1 className='bg-[#333333] text-white h-[6vh] flex items-center pl-2 w-[99.9%] rounded-t-lg'><span className='text-green-500 '>{"</>"}</span>Code</h1>
          <CodeEditor
            initialCode={codeTemplate}
            language={language === 'c++' ? 'cpp' : (language === 'c#' ? 'csharp' : language)}
            onChange={(code) => setCode(code)}
          />
        </div>
      </div>
      <div className='bg-[#1E1E1E] m-[1vw] rounded-md overflow-hidden min-h-[25vh]'>
        <h1 className='bg-[#333333] text-white h-[6vh] flex items-center pl-2 w-[100%] rounded-t-lg '>FeedBack</h1>
        {feedbackResponse === null && <div className='pt-[1vh] h-[calc(100%-6vh)] overflow-y-auto flex justify-center items-center pb-[1vh] text-[#ffffffa0]'>Click on Feedback to get feedback</div>}
        {feedbackResponse && (
          <div className=" h-[calc(100%-6vh)] overflow-y-auto pb-[1vh] pl-[1vw] text-[#ffffffa0]">
            <pre className='whitespace-pre-wrap break-words'>{feedbackResponse.Output}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
