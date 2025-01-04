// components/Editor.js
'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ initialCode, language, onChange }) => {
  const [code, setCode] = useState(initialCode);

  const handleEditorChange = (value) => {
    setCode(value);
    onChange(value);
  };

  return (
    <Editor
      height="80vh"
      language={language}
      value={code}
      onChange={handleEditorChange}
      theme='vs-dark'
    />
  );
};

export default CodeEditor;
