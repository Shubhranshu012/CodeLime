"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

export default function Page() {
    const [html, setHtml] = useState('<h2>Welcome To CodeLime</h2>');
    const [css, setCss] = useState('h2 { color: Green;font-family:verdana;text-align:center; }');
    const [js, setJs] = useState('console.log("Welcome To CodeLime");');
    const [srcDoc, setSrcDoc] = useState('');
    const [jsOutput, setJsOutput] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>
              ${js}
            </script>
          </body>
        </html>
      `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    useEffect(() => {
        try {
            const originalLog = console.log;
            let output = '';
            console.log = (message) => { output += message + '\n'; };

            new Function(js)();

            console.log = originalLog;
            setJsOutput(output);
        } catch (error) {
            setJsOutput(`Error: ${error.message}`);
        }
    }, [js]); 

    return (
        <>
            <div className="flex overflow-hidden">
                <div className="flex w-[50%] p-[10px] flex-col justify-evenly h-[100vh] overflow-hidden">
                    <h2>HTML</h2>
                    <MonacoEditor
                        height="35vh"
                        defaultLanguage="html"
                        value={html}
                        onChange={value => setHtml(value)}
                        options={{
                            theme: 'vs-dark', 
                        }}
                    />

                    <h2>CSS</h2>
                    <MonacoEditor
                        height="35vh"
                        defaultLanguage="css"
                        value={css}
                        onChange={value => setCss(value)}
                        options={{
                            theme: 'vs-dark',
                        }}
                    />

                    <h2>JavaScript</h2>
                    <MonacoEditor
                        height="35vh"
                        defaultLanguage="javascript"
                        value={js}
                        onChange={value => setJs(value)}
                        options={{
                            theme: 'vs-dark', 
                        }}
                    />
                </div>

                <div className="w-[50%] p-[10px]">
                    <div className="bg-[#1E1E1E] mt-[4vh] rounded-md w-[100%] h-[92.5vh]">
                        <iframe
                            srcDoc={srcDoc}
                            title="Output"
                            sandbox="allow-scripts"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
            <div className=" text-[#ede7e7de] p-4 mt-4 flex justify-center ">
                <div className="w-[70%] bg-[#1E1E1E] h-[35vh] overflow-auto p-[10px] rounded-md">
                    <h3>Console Output:</h3>
                    <pre>{jsOutput}</pre>
                </div>
            </div>
        </>
    );
};
