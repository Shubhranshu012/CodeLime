// components/QuestionForm.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const QuestionForm = () => {
  const [language, setLanguage] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (language === '' || difficulty === '') {
      alert('Please select language and difficulty level');
      return;
    }
    else if (language === 'c++') {
      router.push(`/question?language=c%2B%2B&difficulty=${difficulty}`);
    }
    else {
      router.push(`/question?language=${language}&difficulty=${difficulty}`);
    }
  };

  return (
    <div className='w-[100%] h-[100vh] flex justify-center text-center'>
      <form onSubmit={handleSubmit} className='w-[70%] bg-[#333333] h-[70vh] md:h-[80vh] lg:h-[80vh] flex flex-col justify-between p-[8%] rounded-lg mt-[1vh]'>
        <h1 className='text-xl flex justify-center font-semibold mb-[3vh]'>SELECT TO GENERATE A QUESTION</h1>
        <label className='flex justify-center'>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className='bg-[#333333] ml-[5%] outline-none decoration-none rounded-sm'>
            <option value="">Select Language</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="javascript">JavaScript</option>
            <option value="typeScript">TypeScript</option>
            <option value="python">python</option>
            <option value="java">Java</option>
          </select>
        </label>
        <label className='flex justify-center'>
          Difficulty:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className='bg-[#333333] ml-[5%] outline-none decoration-none rounded-sm'>
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <button type="button" onClick={handleSubmit} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 ">
          Generate Question
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
