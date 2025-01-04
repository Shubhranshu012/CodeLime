"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { AlarmClockCheck, CloudUpload, NotebookText, Pause, Play, RefreshCw, RotateCcw } from 'lucide-react';

export default function page() {
    const searchParams = useSearchParams();
    const language = searchParams.get('Language');
    const [loader, setLoader] = useState(false);

    const iinitial = {
        "c++": "// Online C++ compiler to run C program online\n#include <iostream>\nusing namespace std;\nint main() {\n    // Write C code here\n    cout<<\"Try CodeLime\";\n    return 0;\n}",
        "python": "print('Try CodeLime')",
        "java": "// Online Java Compiler\n// Use this editor to write, compile and run your Java code online\npublic class Main {\n    public static void main(String[] args) {\n        // Write Java code here\n        System.out.println(\"Try CodeLime\");\n    }\n}",
        "javascript": "console.log('Try CodeLime');",
        "c": "#include <stdio.h>\nint main() {\n    // Write C code here\n    printf(\"Try CodeLime\");\n    return 0;\n}",
        "rust": "fn main() {\n    // Write Rust code here\n    println!(\"Try CodeLime\");\n}",
        "c#": "using System;\nclass Program {\n    static void Main() {\n        // Write C# code here\n        Console.WriteLine(\"Try CodeLime\");\n    }\n}"
    }
    const [code, setCode] = useState(iinitial[language]);
    const [response, setResponse] = useState("");
    function check() {
        setLoader(true);
        codeRunning(code);
    }
    function formatErrorOutput(errorMessage) {
        const formattedMessage = errorMessage.replace(/\\n/g, '\n');
        console.log(formattedMessage);
        return formattedMessage;
    }
    function codeRunning(code) {

        const Language_version = {
            "c": "10.2.0",
            "c#":"5.0.201",
            "c++": "10.2.0",
            "java": "15.0.2",
            "javascript": "18.15.0",
            "python": "3.10.0",
            "swift": "5.3.3",
            "rust": "1.68.2",
            "typescript": "5.0.3"
        }
        const fileExtensions = {
            "c": ".c",
            "c#":".cs",
            "c++": ".cpp",
            "java": ".java",
            "javascript": ".js",
            "python": ".py",
            "swift": ".swift",
            "rust": ".rs",
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
                console.log("Output:", data);
                setResponse(data.run.output);
                setLoader(false);
                console.log("Responce:", response);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
    return (
        <div className='pt-[3vh]'>

            <div className='flex flex-row'>
                <div className='w-[5vw] border-[0.1px] border-[#333333] flex flex-col items-center mt-[1vw] mb-[1vw] gap-3 overflow-hidden hidden md:block justify-between pl-[6px]'>
                    <a href='/Compiler?Language=python' className="text-white  font-medium rounded-sm bg-[#1E1E1E] p-[5px] h-[50px] w-[50px] flex justify-center items-center mb-[2vh] mt-[1.5vh]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 25" >
                            <path fill-opacity=".4" d="M9.091 11.663h5.782c1.61 0 2.877-1.353 2.877-2.96V3.225c0-1.559-1.315-2.73-2.886-2.99A18.088 18.088 0 0011.853 0a16.25 16.25 0 00-2.738.235c-2.45.43-2.866 1.33-2.866 2.99v2.132H12v.788H4.025C2.342 6.145.868 7.152.408 9.064c-.532 2.191-.556 3.531 0 5.82.411 1.702 1.394 2.888 3.076 2.888h1.972V15.2c0-1.9 1.672-3.538 3.635-3.538zm-.364-7.707c-.6 0-1.087-.489-1.087-1.093 0-.606.486-1.1 1.087-1.1.597 0 1.086.494 1.086 1.1a1.09 1.09 0 01-1.086 1.093zm14.83 5.108c-.416-1.665-1.21-2.919-2.895-2.919h-2.118v2.558c0 1.98-1.744 3.551-3.671 3.551H9.091c-1.584 0-2.842 1.444-2.842 3.02v5.479c0 1.558 1.338 2.475 2.868 2.923 1.833.535 3.568.632 5.76 0 1.458-.42 2.873-1.264 2.873-2.923V18.56H12v-.788h8.662c1.682 0 2.31-1.138 2.895-2.89.604-1.801.578-3.506 0-5.818zm-8.32 10.958c.6 0 1.087.488 1.087 1.093 0 .606-.486 1.1-1.087 1.1a1.095 1.095 0 01-1.086-1.1 1.09 1.09 0 011.086-1.093z"></path>
                        </svg>
                    </a>
                    <a href='/HtmlRun' className="text-white mb-[2vh] font-medium rounded-sm bg-[#1E1E1E] p-[5px] h-[50px] w-[50px] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="86" height="98" viewBox="0 0 86 98" >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L7.81641 87.668L42.8914 97.4047L78.0625 87.6547L85.8875 0H0ZM42.9624 39.9803H28.7717L27.7889 28.9693H42.9624H42.9998H68.9343L69.1499 26.5537L69.6405 21.1021L69.8976 18.2178H42.9998H42.9624H16.0381L16.2959 21.1021L18.9381 50.7326H42.9624H42.9998H56.2022L54.9546 64.6772L42.9624 67.9139V67.9149L42.9521 67.9178L30.9779 64.6834L30.2131 56.1092H19.4186L20.9248 72.9912L42.9506 79.1053L42.9998 79.092V79.0902L65.0054 72.9912L65.1671 71.1748L67.6936 42.8678L67.9554 39.9803H65.0585H42.9998H42.9624Z" fill="#F9F7F7"></path>
                        </svg>
                    </a>
                    <a href='/Compiler?Language=java' className="text-white mb-[2vh] font-medium rounded-sm bg-[#1E1E1E] p-[5px] h-[50px] w-[50px] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 21 28" >
                            <path fill-rule="evenodd" d="M13.266 1s2.718 2.703-2.578 6.857c-3.285 2.578-2.069 4.3-.902 5.951.343.485.68.963.9 1.456-2.48-2.223-4.298-4.18-3.078-6.002.596-.89 1.543-1.626 2.501-2.372 1.922-1.495 3.889-3.026 3.157-5.89zm-1.403 12.431c1.263 1.445-.331 2.744-.331 2.744s3.204-1.644 1.733-3.703a46.915 46.915 0 00-.175-.242c-1.278-1.764-2.008-2.772 3.452-5.92 0 0-8.956 2.223-4.679 7.122zm-4.65 7.678s-.998.577.713.772c2.073.236 3.133.202 5.417-.227 0 0 .601.374 1.44.698-5.122 2.18-11.592-.127-7.57-1.244zm-.625-2.847s-1.121.825.591 1.001c2.215.227 3.964.246 6.99-.333 0 0 .419.422 1.076.652-6.191 1.8-13.088.142-8.657-1.32zm11.235 6.028c1.554-.468.815-1.075.815-1.075 2.708 1.215-5.885 3.655-16.326 1.972-3.83-.617 1.842-2.77 2.88-2.044 0 0-.328-.022-.902.101-.55.118-2.3.678-1.368 1.082 2.597 1.122 11.945.854 14.9-.036zM6.01 16.845c-3.07-.409 1.684-1.531 1.684-1.531s-1.847-.124-4.117.967c-2.686 1.29 6.641 1.879 11.47.616.503-.34 1.196-.636 1.196-.636s-1.975.351-3.943.516c-2.409.2-4.993.24-6.29.067zM17.28 15.41c1.584-.328 3.854 2.108-1.055 4.642-.02.055-.084.115-.096.127l-.002.001c6.555-1.712 4.145-6.036 1.011-4.941a.89.89 0 00-.419.321s.174-.07.561-.15zm3.017 9.127c-.172 2.216-7.408 2.681-12.118 2.382-3.096-.198-3.699-.694-3.699-.694 2.941.483 7.902.57 11.923-.182 3.564-.666 3.893-1.506 3.893-1.506z" clip-rule="evenodd"></path>
                            <path d="M10.688 7.857l-.186-.236.186.236zM13.266 1l.212-.213a.3.3 0 00-.502.287l.29-.074zm-3.48 12.808l-.245.174.245-.174zm.9 1.456l-.2.223a.3.3 0 00.474-.345l-.274.122zM7.608 9.262l-.25-.167.25.167zm2.501-2.372l.184.237-.184-.237zm1.423 9.285l-.19-.233a.3.3 0 00.327.5l-.137-.267zm.331-2.744l-.226.198.226-.197zm1.402-.96l.244-.174-.244.175zm-.175-.241l-.243.176.243-.176zm3.452-5.92l.15.26a.3.3 0 00-.222-.55l.072.29zM7.926 21.882l-.034.298.034-.298zm-.712-.773l.15.26a.3.3 0 00-.23-.549l.08.29zm6.129.546l.158-.255a.3.3 0 00-.214-.04l.056.295zm1.44.698l.118.276a.3.3 0 00-.01-.556l-.108.28zM7.18 19.263l-.03.298.03-.298zm-.591-1l.177.24a.3.3 0 00-.271-.526l.094.285zm7.582.667l.213-.211a.3.3 0 00-.27-.084l.057.295zm1.075.652l.084.288a.3.3 0 00.016-.571l-.1.283zm3.393 3.633l.122-.273a.3.3 0 00-.312.505l.19-.232zm-.815 1.075l.086.287-.086-.287zm-15.511.897l-.048.297.048-.297zm2.88-2.044l-.02.3a.3.3 0 00.192-.546l-.172.246zm-.902.101l.063.293-.063-.293zm-1.368 1.082l-.119.275.12-.275zm4.773-9.012l.069.292a.3.3 0 00-.049-.591l-.02.299zm-1.684 1.53l.04-.297-.04.297zm-2.433-.563l.13.27-.13-.27zm11.47.616l.077.29a.301.301 0 00.092-.042l-.168-.248zm1.196-.636l.118.276a.3.3 0 00-.17-.571l.052.295zm-3.943.516l.025.299-.025-.3zm3.923 3.275l-.137-.267a.3.3 0 00-.143.16l.28.107zm1.055-4.642l.061.294-.06-.294zm-1.15 4.769l-.208-.218-.005.005.212.213zm0 0l.208.215.003-.003-.212-.212zm-.003.001l-.209-.215a.3.3 0 00.285.506l-.076-.29zm1.011-4.941l-.099-.284.1.284zm-.419.321l-.252-.162a.3.3 0 00.364.44l-.112-.278zm-8.54 11.36l-.02.298.02-.299zm12.117-2.383l.3.023a.3.3 0 00-.579-.132l.28.11zM4.48 26.225l.049-.296a.3.3 0 00-.349.296h.3zm11.923-.182l-.055-.295.055.295zm-5.53-17.95c2.69-2.11 3.41-3.904 3.391-5.227-.01-.655-.2-1.17-.391-1.521a2.916 2.916 0 00-.353-.514 1.677 1.677 0 00-.036-.039L13.48.79h-.001V.787L13.265 1c-.211.213-.211.213-.212.212l.002.003.016.016c.014.017.037.042.064.078.055.07.131.178.208.32.154.286.311.706.32 1.246.015 1.067-.555 2.702-3.162 4.746l.37.473zm-.84 5.542c-.597-.844-1.13-1.613-1.165-2.467-.033-.82.397-1.812 2.006-3.075l-.37-.472c-1.677 1.316-2.28 2.473-2.235 3.571.043 1.064.703 1.982 1.273 2.79l.49-.347zm.928 1.507c-.233-.525-.59-1.028-.929-1.507l-.49.347c.347.49.666.944.871 1.404l.548-.244zM7.358 9.095c-.34.51-.475 1.04-.432 1.585.043.537.257 1.068.578 1.59.638 1.037 1.745 2.108 2.982 3.217l.4-.446c-1.242-1.114-2.285-2.133-2.871-3.086-.291-.473-.458-.912-.49-1.323-.033-.404.063-.801.332-1.203l-.499-.334zm2.567-2.442c-.948.738-1.938 1.505-2.567 2.442l.499.334c.564-.841 1.468-1.549 2.436-2.302l-.368-.474zm3.05-5.579c.343 1.342.056 2.352-.54 3.214-.609.882-1.54 1.61-2.51 2.365l.368.474c.953-.741 1.965-1.526 2.637-2.498.685-.993 1.016-2.18.627-3.703l-.582.148zm-1.443 15.1l.19.233.002-.002.006-.004a12.436 12.436 0 00.073-.066 2.969 2.969 0 00.639-.861c.137-.287.235-.64.201-1.03-.034-.395-.2-.806-.554-1.21l-.452.395c.279.318.386.612.408.866a1.39 1.39 0 01-.145.72 2.287 2.287 0 01-.556.726l-.002.002.19.232zm1.49-3.528c.32.45.375.854.3 1.211-.079.37-.303.722-.592 1.035a5.084 5.084 0 01-.888.745 5.698 5.698 0 01-.417.255l-.024.013-.005.002h-.001l.137.268.137.267.001-.001.003-.001a5.685 5.685 0 001.498-1.14c.328-.356.629-.802.738-1.319.111-.53.014-1.104-.4-1.684l-.488.35zm-.175-.24l.174.24.488-.349-.176-.243-.486.352zm3.545-6.355c-1.371.79-2.366 1.453-3.064 2.034-.696.577-1.12 1.093-1.318 1.595-.204.519-.15.99.036 1.439.179.43.488.854.801 1.287l.486-.352c-.325-.45-.587-.813-.733-1.166-.14-.335-.168-.642-.031-.99.143-.363.479-.8 1.142-1.352.66-.549 1.622-1.192 2.98-1.975l-.299-.52zm-4.303 7.183c-1.026-1.175-1.214-2.133-1.01-2.905.212-.794.86-1.479 1.69-2.047.823-.564 1.783-.985 2.544-1.266a15.575 15.575 0 011.296-.413h.004l.001-.001-.072-.291-.073-.291h-.002l-.005.002a3.097 3.097 0 00-.098.025 16.165 16.165 0 00-1.258.406c-.784.29-1.796.73-2.677 1.334-.875.6-1.664 1.388-1.93 2.388-.27 1.023.026 2.18 1.138 3.454l.452-.395zm-4.13 8.35c-.417-.048-.627-.116-.72-.168-.045-.024-.041-.034-.03-.015a.124.124 0 01.013.083c-.005.02-.003-.003.057-.054a.704.704 0 01.082-.06l.004-.002-.151-.26-.15-.26v.001h-.001l-.002.001-.004.003a1.94 1.94 0 00-.05.032c-.031.02-.073.05-.117.089-.074.063-.215.197-.255.385a.477.477 0 00.054.342.658.658 0 00.258.24c.2.11.507.189.945.238l.068-.596zm5.328-.225c-2.256.424-3.285.456-5.327.224l-.068.596c2.105.24 3.194.204 5.506-.23l-.11-.59zm1.604.713a9.737 9.737 0 01-1.367-.659c-.008-.005-.014-.009-.018-.01l-.004-.003-.001-.001-.158.255-.159.255h.001l.002.001.006.004.023.014.084.05a10.362 10.362 0 001.375.654l.216-.56zm-7.757-1.253c-.517.144-.905.316-1.152.523a.919.919 0 00-.284.379.665.665 0 00-.001.46c.098.276.358.488.648.649.302.168.696.313 1.15.428 1.81.457 4.777.49 7.406-.63l-.235-.552c-2.494 1.061-5.324 1.03-7.023.6a4.304 4.304 0 01-1.007-.37c-.256-.143-.352-.263-.374-.326a.066.066 0 01-.001-.051.335.335 0 01.106-.127c.149-.125.438-.269.927-.404l-.16-.579zm.076-1.854c-.415-.043-.597-.121-.665-.172-.028-.021-.024-.027-.02-.014.004.012 0 .015.004.001a.509.509 0 01.125-.176 1.176 1.176 0 01.106-.096l.005-.004h.001l-.178-.242-.178-.241h-.001l-.002.001-.004.003-.012.01a1.51 1.51 0 00-.166.15c-.088.088-.218.24-.272.428-.029.1-.04.22 0 .346a.63.63 0 00.231.313c.203.153.523.244.965.29l.061-.597zm6.904-.33c-2.996.573-4.715.554-6.904.33l-.061.596c2.24.23 4.018.248 7.077-.337l-.113-.589zm1.23.664a2.835 2.835 0 01-.96-.579l-.002-.002h.001l-.213.212a46.433 46.433 0 00-.213.211v.001l.003.002.005.005.018.018.065.058a3.438 3.438 0 001.098.64l.199-.566zm-8.85-1.322c-.566.187-.984.386-1.25.603-.265.216-.45.517-.325.86.104.287.394.487.703.629.327.15.756.275 1.255.37 1.993.382 5.313.343 8.452-.569l-.167-.576c-3.052.887-6.276.92-8.172.556-.473-.09-.85-.203-1.117-.326-.284-.131-.374-.243-.39-.288-.003-.009-.005-.016.003-.036a.457.457 0 01.137-.155c.18-.147.516-.319 1.059-.498l-.188-.57zm12.144 5.238l-.19.232h-.001l-.002-.001v-.001c-.001 0-.001 0 0 0l.008.008c.008.008.02.021.03.037.025.035.031.06.03.074 0 .001.002.047-.098.129-.106.087-.309.198-.679.31l.173.574c.408-.123.695-.263.888-.42.198-.164.307-.358.316-.567a.722.722 0 00-.139-.445.907.907 0 00-.127-.145l-.012-.01-.004-.004-.002-.002-.191.231zM2.264 25.484c5.253.846 10.045.657 13.194.1 1.564-.278 2.76-.652 3.4-1.058.163-.104.305-.218.407-.345a.724.724 0 00.177-.47c-.008-.372-.334-.613-.681-.77l-.246.548c.15.068.24.13.287.178.023.023.033.04.037.048l.003.008v.005a.26.26 0 01-.044.076c-.047.059-.13.132-.261.215-.535.34-1.632.699-3.183.973-3.081.546-7.806.735-12.995-.1l-.095.592zm3.1-2.587c-.202-.14-.475-.19-.74-.2a4.4 4.4 0 00-.91.077 7.598 7.598 0 00-1.92.618c-.28.137-.534.293-.725.46-.18.158-.36.376-.369.643-.01.302.193.518.447.66.255.141.626.25 1.117.329l.095-.593c-.466-.075-.756-.17-.92-.26a.411.411 0 01-.13-.102l-.009-.013c0-.01.017-.083.164-.213.136-.12.34-.247.595-.372a7.003 7.003 0 011.759-.566c.295-.053.565-.076.784-.068.229.009.36.051.418.092l.344-.492zm-1.01.64c.271-.058.482-.081.621-.09a2.307 2.307 0 01.197-.005l.02-.299.02-.3h-.024a2.871 2.871 0 00-.25.005 4.88 4.88 0 00-.711.103l.126.586zm-1.313.513c-.097-.042-.115-.069-.11-.061.02.027.03.078.015.119-.006.017-.006.002.044-.039.045-.037.112-.08.2-.126.356-.188.903-.35 1.163-.406l-.126-.586c-.29.062-.894.239-1.317.461-.107.057-.212.121-.3.193a.715.715 0 00-.226.293.464.464 0 00.066.45.85.85 0 00.353.253l.238-.55zm14.695-.047c-1.434.431-4.473.721-7.502.76-1.508.018-3.002-.026-4.276-.143-1.285-.119-2.315-.31-2.917-.57l-.238.55c.696.302 1.809.498 3.1.617 1.3.12 2.816.164 4.339.145 3.033-.038 6.146-.327 7.667-.785l-.173-.574zM7.695 15.314l-.07-.292h-.003c-.002.002-.006.002-.01.003l-.041.01a16.032 16.032 0 00-.652.172c-.401.112-.913.27-1.332.442-.208.086-.406.18-.559.282-.076.051-.152.11-.213.18a.521.521 0 00-.135.297.45.45 0 00.128.35c.076.08.176.137.276.18.202.086.497.152.888.204l.079-.595c-.377-.05-.606-.108-.732-.162-.063-.027-.079-.043-.075-.04.01.012.039.053.034.114-.004.047-.026.064-.011.047a.495.495 0 01.094-.075c.104-.07.26-.147.455-.227.386-.16.87-.309 1.265-.42a20.51 20.51 0 01.632-.166l.038-.01.01-.001h.002v-.001l-.068-.292zm-3.987 1.237a9.68 9.68 0 012.822-.866c.36-.05.65-.068.849-.074a4.554 4.554 0 01.28.002h.016l.02-.299.02-.3h-.001-.027a3.501 3.501 0 00-.324-.002 8.124 8.124 0 00-.917.08c-.77.108-1.83.357-2.998.919l.26.54zm11.265.056c-2.373.62-5.878.79-8.46.64-1.3-.075-2.323-.23-2.849-.428a.984.984 0 01-.252-.128c-.045-.036-.014-.03-.011.023.003.054-.029.062.018.017.045-.044.134-.105.289-.18l-.26-.54c-.181.087-.334.18-.445.287a.581.581 0 00-.201.448c.01.19.126.327.236.414.112.09.257.16.414.22.619.235 1.725.39 3.026.466 2.617.151 6.19-.017 8.647-.659l-.152-.58zm1.271-.346l-.117-.276h-.001l-.002.001a7.207 7.207 0 00-1.243.662l.336.497c.234-.158.52-.31.75-.424a9.775 9.775 0 01.367-.172l.021-.009.006-.002-.117-.277zm-3.918.815a45.615 45.615 0 002.728-.322 52.192 52.192 0 001.152-.182l.067-.011.018-.003.004-.001h.001l-.052-.296-.052-.295h-.002-.004c-.003.002-.009.002-.016.004a13.238 13.238 0 01-.314.053c-.214.035-.52.084-.889.137a45.05 45.05 0 01-2.69.318l.05.598zm-6.354.066c1.33.177 3.941.135 6.354-.066l-.05-.598c-2.404.2-4.962.237-6.225.07l-.08.594zm10.39 3.177c2.47-1.276 3.309-2.614 3.12-3.712-.184-1.077-1.331-1.684-2.264-1.49l.122.587c.652-.135 1.432.312 1.551 1.005.115.671-.366 1.817-2.804 3.076l.275.534zm-.027.077a.91.91 0 00.066-.07.584.584 0 00.104-.168l-.561-.212a.147.147 0 01.007-.016l.002-.003-.008.01a.326.326 0 01-.024.024l.414.435zm.005-.005l-.424-.425.424.425zm-.004.004l.002-.001-.419-.43-.002.001.419.43zm.9-4.873c1.441-.503 2.593.258 2.732 1.18.07.463-.093 1.038-.687 1.615-.597.58-1.622 1.153-3.23 1.573l.151.58c1.669-.435 2.8-1.046 3.497-1.723.701-.681.968-1.44.863-2.135-.21-1.394-1.83-2.248-3.524-1.656l.198.566zm-.518.038l.253.162-.001.001v.001l-.001.001v-.002l.011-.014a.594.594 0 01.257-.187l-.2-.566a1.169 1.169 0 00-.566.434l-.003.005-.001.002h-.001v.001l.252.162zm.5-.444a5.432 5.432 0 00-.566.149 1.725 1.725 0 00-.04.015h-.003l-.002.001.111.28.112.278h-.001l.003-.001.018-.007a4.842 4.842 0 01.49-.127l-.122-.588zm-9.06 12.102c2.37.151 5.38.11 7.825-.25 1.22-.18 2.32-.441 3.133-.809.793-.358 1.422-.868 1.479-1.599l-.599-.046c-.029.377-.368.756-1.127 1.099-.739.333-1.775.585-2.974.761-2.393.353-5.358.395-7.698.246l-.038.598zm-3.979-.993a.622.622 0 00.105.228l.004.003a.41.41 0 00.004.004l.006.005a.385.385 0 00.055.037c.033.02.079.046.14.075.123.058.312.132.594.21.564.156 1.51.332 3.071.431l.039-.598c-1.535-.098-2.438-.27-2.95-.411a3.156 3.156 0 01-.497-.174.819.819 0 01-.081-.043l-.008-.005.003.002.003.003.004.002.003.004a.622.622 0 01.105.228h-.6zm12.168-.477c-3.985.746-8.91.659-11.82.181l-.097.592c2.974.488 7.97.576 12.027-.183l-.11-.59zm3.948-1.21l-.279-.111v-.001l.002-.002v-.003l.003-.006a.173.173 0 01.004-.007l-.001.002a.426.426 0 01-.05.06c-.063.064-.19.173-.434.308-.49.272-1.428.64-3.193.97l.11.59c1.8-.336 2.808-.72 3.374-1.035.284-.158.462-.301.573-.415a1.027 1.027 0 00.153-.203.499.499 0 00.015-.03l.001-.005.001-.001v-.001l-.279-.11z"></path>
                        </svg>
                    </a>
                    <a href='/Compiler?Language=c' className="text-white mb-[2vh] font-medium rounded-sm bg-[#1E1E1E] p-[5px] h-[50px] w-[50px] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 28" >
                            <path fill-opacity=".4" d="M23.903 6.916l.067-.044c-.134-.243-.334-.464-.534-.574L12.696.155C12.518.045 12.274 0 12.007 0c-.267 0-.511.066-.69.155L.646 6.32C.267 6.54 0 7.093 0 7.513v12.308c0 .243.044.508.2.752l-.044.022c.11.176.266.331.422.42l10.718 6.165c.178.11.422.154.689.154.267 0 .511-.066.69-.154l10.672-6.165c.378-.221.645-.774.645-1.194V7.491c.022-.177 0-.376-.089-.575zM12.007 19.07a5.455 5.455 0 004.736-2.74l2.869 1.68a8.794 8.794 0 01-7.605 4.374c-4.847 0-8.783-3.91-8.783-8.728 0-4.817 3.936-8.728 8.783-8.728a8.796 8.796 0 017.627 4.42l-2.89 1.656a5.43 5.43 0 00-4.737-2.762c-3.002 0-5.448 2.431-5.448 5.414 0 2.983 2.446 5.414 5.448 5.414z"></path>
                        </svg>
                    </a>
                    <a href='/Compiler?Language=c%2B%2B' className="text-white mb-[2vh] font-medium rounded-sm bg-[#1E1E1E] p-[5px] h-[50px] w-[50px] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 27" >
                            <path fill="#25265E" fill-opacity=".4" d="M23.903 6.639l.067-.043c-.134-.233-.334-.445-.534-.551L12.696.148C12.518.042 12.274 0 12.007 0a1.64 1.64 0 00-.69.148L.646 6.066C.267 6.278 0 6.808 0 7.21v11.814c0 .233.044.488.2.72l-.044.022c.11.17.266.318.422.403l10.718 5.918c.178.106.422.148.689.148.267 0 .511-.064.69-.148l10.672-5.918c.378-.212.645-.742.645-1.145V7.19c.022-.17 0-.36-.089-.551zm-7.893 6.893v-.849h1.111v-1.06h1.112v1.06h1.112v.849h-1.112v1.06h-1.112v-1.06H16.01zm.733-2.97c-.934-1.59-2.712-2.65-4.736-2.65-3.002 0-5.448 2.332-5.448 5.195 0 2.864 2.446 5.197 5.448 5.197 2.024 0 3.802-1.06 4.736-2.63l2.869 1.612c-1.512 2.502-4.358 4.2-7.605 4.2-4.847 0-8.783-3.755-8.783-8.379 0-4.623 3.936-8.377 8.783-8.377 3.269 0 6.115 1.718 7.627 4.242l-2.89 1.59zm6.604 2.97h-1.112v1.06h-.889v-1.06h-1.334v-.849h1.334v-1.06h.89v1.06h1.111v.849z"></path>
                        </svg>
                    </a>

                    <a href='/Compiler?Language=c%23' className="text-white mb-[2vh] font-medium rounded-sm bg-[#1E1E1E] p-[5px] h-[50px] w-[50px] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 28" >
                            <path fill-opacity=".4" d="M23.903 6.916l.067-.044c-.134-.243-.334-.464-.534-.574L12.696.155C12.518.045 12.274 0 12.007 0c-.267 0-.511.066-.69.155L.646 6.32C.267 6.54 0 7.093 0 7.513v12.308c0 .243.044.508.2.752l-.044.022c.11.176.266.331.422.42l10.718 6.165c.178.11.422.154.689.154.267 0 .511-.066.69-.154l10.672-6.165c.378-.221.645-.774.645-1.194V7.491c.022-.177 0-.376-.089-.575zM12.007 22.384c-4.847 0-8.783-3.91-8.783-8.728 0-4.817 3.936-8.728 8.783-8.728a8.796 8.796 0 017.627 4.42l-2.89 1.656a5.43 5.43 0 00-4.737-2.762c-3.002 0-5.448 2.431-5.448 5.414 0 2.983 2.446 5.414 5.448 5.414a5.455 5.455 0 004.736-2.74l2.869 1.68a8.794 8.794 0 01-7.605 4.374zm11.34-9.17h-.711l-.2.884h.911v1.105h-1.112l-.266 1.326h-1.09l.267-1.326H20.3l-.267 1.326h-1.067l.267-1.326h-.556v-1.105h.778l.2-.884h-.978V12.11h1.178l.267-1.325h1.09l-.267 1.325h.845l.267-1.325h1.067l-.267 1.325h.49v1.105zm-2.824.884h.845l.2-.884h-.845l-.2.884z"></path>
                        </svg>
                    </a>
                    <a href='/Compiler?Language=js' className="text-white mb-[2vh] font-medium rounded-sm bg-[#1E1E1E] p-[5px] h-[50px] w-[50px] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 630 630" >
                            <rect width="630" height="630" fill="#25265E" fill-opacity="0.0"></rect>
                            <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"></path>
                        </svg>
                    </a>
                    <a href='/Compiler?Language=rust' className="text-white mb-[2vh] font-medium rounded-sm bg-[#1E1E1E] p-[5px] h-[50px] w-[50px] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="40" height="40" viewBox="0 0 40 40"  >
                            <g clip-path="url(#clip0_2886_605)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8839 2.84442L14.4084 2.68631L15.1505 0.663847C15.2559 0.46731 15.603 0.273265 15.9643 0.487312C16.1369 0.589616 16.7641 1.30652 17.1641 1.76388C17.2685 1.88336 17.3577 1.98513 17.419 2.05361H18.0516L19.129 0.167618C19.2712 -0.0427356 19.6845 -0.0686346 19.924 0.167618C20.0716 0.313238 20.3929 0.883897 20.6664 1.36934C20.8365 1.6714 20.9878 1.94045 21.0674 2.05361H21.7002L23.0602 0.523151C23.2474 0.335748 23.7311 0.346159 23.9339 0.741787C24.0241 0.917836 24.1409 1.26358 24.261 1.61915C24.4107 2.06265 24.5658 2.52141 24.6807 2.68514C24.8677 2.79683 25.0045 2.83134 25.2354 2.82004L26.8525 1.60471C27.0398 1.4173 27.596 1.5539 27.7135 1.90697C27.7613 2.05037 27.7923 2.37341 27.826 2.72628C27.8754 3.24222 27.931 3.82191 28.0541 3.99709C28.1741 4.11715 28.4858 4.32123 28.7737 4.17717C29.0617 4.03311 29.9347 3.61122 30.3351 3.41829C30.5515 3.36255 30.9609 3.33726 31.0997 3.70769V6.0165L31.4596 6.33811L33.3422 5.88792C33.4493 5.86421 33.6878 5.83122 33.7855 5.88792C33.8831 5.94446 34.079 6.15146 34.1646 6.24798C34.1882 6.28658 34.2134 6.46532 34.1261 6.87189C34.0386 7.27831 33.7984 8.13447 33.6892 8.51171L34.0233 8.9619L36.2913 8.88484C36.452 8.95764 36.6884 9.30023 36.6319 9.54721C36.5883 9.7375 36.2534 10.4298 35.9726 11.0103C35.8889 11.1831 35.8101 11.3462 35.7453 11.4829L35.9958 12.036L38.0905 12.3383C38.249 12.4048 38.5492 12.6355 38.4824 13.0264L37.2295 14.7949C37.2038 14.9386 37.1935 15.2555 37.3579 15.3739C37.5225 15.4921 38.7073 15.899 39.2792 16.0876C39.4055 16.1627 39.6506 16.3732 39.6198 16.615C39.5888 16.8568 39.5469 16.9473 39.5297 16.9623L37.9813 18.3772V18.9046C38.6516 19.3032 39.9924 20.1328 39.9924 20.2615C39.9924 20.291 39.9939 20.3274 39.9956 20.3675C40.003 20.5459 40.0137 20.8013 39.9089 20.8853C39.8061 20.9677 38.581 21.687 37.9813 22.0365V22.6282C38.5252 23.1083 39.612 24.0892 39.6069 24.1716C39.6053 24.1959 39.606 24.2307 39.6067 24.2719C39.6091 24.4049 39.6128 24.6049 39.549 24.7376C39.4822 24.8765 38.0561 25.3871 37.3516 25.6251L37.2231 26.1975C37.6301 26.7419 38.4478 27.8425 38.4631 27.8888C38.4824 27.9467 38.5081 28.4548 38.174 28.6863L36.0537 28.9821L35.7838 29.4645L36.6641 31.4324C36.6983 31.5782 36.6757 31.9211 36.3106 32.1269L34.0167 32.0755L33.7149 32.4356L34.2032 34.6545C34.2009 34.7894 34.0656 35.0828 33.5413 35.1753L31.5174 34.6995L31.1126 34.9952L31.1768 37.2655C31.1211 37.424 30.8915 37.7195 30.4186 37.6321L28.5232 36.7381L28.0348 36.9954L27.6749 39.2076C27.5893 39.3319 27.3178 39.5497 26.9167 39.4263L25.1756 38.1786C25.0406 38.1916 24.7567 38.2327 24.7 38.2945C24.6435 38.3562 24.094 39.7864 23.8263 40.4939C23.6999 40.5817 23.3816 40.7138 23.1194 40.5389L21.6223 38.9568H21.1148L19.8619 40.9119C19.7612 40.9784 19.4982 41.0715 19.2514 40.9119L17.9663 38.9568H17.433L15.8587 40.6032C15.7367 40.646 15.4475 40.6856 15.2677 40.5003L14.3938 38.3651C14.3402 38.2966 14.1626 38.1659 13.8798 38.1916L12.0614 39.4906C11.8793 39.4991 11.4909 39.4468 11.3932 39.169C11.2956 38.8912 11.1427 37.6385 11.0784 37.0468L10.5515 36.7317L8.66886 37.6192C8.50183 37.6813 8.12144 37.7028 7.93648 37.2912V34.9888C7.92145 34.9373 7.82077 34.8075 7.53802 34.6995L5.48195 35.1817C5.30641 35.1883 4.94094 35.1007 4.8844 34.6995C4.82785 34.2981 5.17779 33.1217 5.35986 32.5836L5.07076 32.0948L2.7769 32.1527C2.62698 32.0605 2.33741 31.8041 2.37854 31.516C2.41966 31.2279 3.02536 30.0755 3.32307 29.5352L3.02108 29.0079L0.842888 28.6992C0.716532 28.6456 0.481784 28.4278 0.553747 27.9853L1.84522 26.1975C1.83237 26.0431 1.77584 25.7087 1.65246 25.6058L-0.300845 24.9434C-0.412213 24.8533 -0.623394 24.5948 -0.577139 24.2809C-0.53087 23.967 0.547293 23.0612 1.08058 22.6475V22.0365C0.476606 21.7278 -0.768624 21.0409 -0.917697 20.7631C-1.06676 20.4853 -0.979805 20.2743 -0.917697 20.2036L1.11917 18.943V18.3965C0.652268 18.0127 -0.335528 17.1526 -0.551416 16.7822V16.3513C-0.544992 16.3021 -0.460183 16.1712 -0.172317 16.0426C0.115533 15.914 1.23269 15.5517 1.75527 15.3866L1.87094 14.8272L0.579441 13.0457V12.602C0.624419 12.4969 0.818471 12.2816 1.23483 12.2611C1.6512 12.2406 2.62056 12.1067 3.0532 12.0424L3.31021 11.5086L2.38496 9.57289C2.34212 9.36072 2.36183 8.92466 2.78333 8.8783C3.20484 8.8321 4.44964 8.859 5.01935 8.8783L5.38552 8.53754L4.85229 6.36379C4.84801 6.1773 4.97437 5.80812 5.51414 5.82347L7.57021 6.31881L7.97505 5.9972L7.87863 3.72056C7.92357 3.56192 8.12918 3.25751 8.59187 3.30896L10.5002 4.24791L11.0721 3.96495L11.374 1.89411C11.4553 1.70332 11.7184 1.36547 12.1194 1.5404C12.5203 1.71532 13.4628 2.48263 13.8839 2.84442ZM20.7002 4.89056C20.7002 5.53728 20.1767 6.06134 19.5305 6.06134C18.8845 6.06134 18.3608 5.53728 18.3608 4.89056C18.3608 4.244 18.8845 3.71982 19.5305 3.71982C20.1767 3.71982 20.7002 4.244 20.7002 4.89056ZM24.5236 10.4094H8.48148C11.3531 7.29655 13.1362 6.23065 16.6696 5.7262C16.6696 5.7262 18.6748 7.73337 19.0091 7.90056C19.3433 8.0679 19.7703 8.10498 20.1788 7.90056C20.513 7.73337 22.3512 5.7262 22.3512 5.7262C27.0871 6.75866 29.3134 8.52402 32.7117 13.2527C32.3775 13.7546 31.6422 14.9588 31.3748 15.7616C31.1076 16.5644 31.4863 17.0997 31.709 17.2669L34.3827 18.605L34.5499 21.6156H32.5447C33.3802 25.2953 29.7038 25.4625 29.2026 22.9536C28.8835 21.3574 28.0884 20.5562 27.1972 19.7758C31.8762 17.2669 30.3723 11.2457 24.5236 10.4094ZM7.14457 17.2669C7.81303 16.8655 7.7573 16.3191 7.64599 16.0961L7.27076 15.1849C7.25269 15.1409 7.28504 15.0925 7.33257 15.0925H9.81838V24.7934H5.12585C4.3237 22.6525 4.45268 19.7955 4.61979 18.6246C5.17688 18.3459 6.47627 17.6683 7.14457 17.2669ZM16.3354 15.0925V17.7686H21.6827C23.6881 17.7686 24.0223 15.2599 21.6827 15.0925H16.3354ZM16.3354 24.7934V22.1173H20.513C21.5157 22.1173 22.6854 23.2881 23.0196 26.2987C23.287 28.7073 24.5793 29.4209 25.192 29.4766H31.709L30.3723 30.8146C30.0938 30.7588 29.236 30.614 28.0327 30.4801C26.8296 30.3463 26.4175 30.982 26.3617 31.3165L26.0275 34.1597C20.6881 35.8537 17.848 35.8704 12.9933 33.9926C12.9376 33.4351 12.7929 32.1193 12.6591 31.3165C12.5254 30.5135 11.935 30.3129 11.6565 30.3129L8.64867 30.8146L7.57583 29.5876C7.53802 29.5443 7.5687 29.4766 7.62625 29.4766H19.6775C19.7698 29.4766 19.8447 29.4017 19.8447 29.3093V24.9607C19.8447 24.8683 19.7698 24.7934 19.6775 24.7934H16.3354ZM34.3827 16.9324C35.0288 16.9324 35.5524 16.4082 35.5524 15.7616C35.5524 15.115 35.0288 14.5908 34.3827 14.5908C33.7367 14.5908 33.213 15.115 33.213 15.7616C33.213 16.4082 33.7367 16.9324 34.3827 16.9324ZM4.68672 16.8641C5.33268 16.8641 5.85641 16.3399 5.85641 15.6934C5.85641 15.0468 5.33268 14.5226 4.68672 14.5226C4.04068 14.5226 3.51697 15.0468 3.51697 15.6934C3.51697 16.3399 4.04068 16.8641 4.68672 16.8641ZM11.5203 33.1356C11.5203 33.7822 10.9966 34.3064 10.3506 34.3064C9.70449 34.3064 9.18091 33.7822 9.18091 33.1356C9.18091 32.4891 9.70449 31.9649 10.3506 31.9649C10.9966 31.9649 11.5203 32.4891 11.5203 33.1356ZM28.7012 34.3271C29.3471 34.3271 29.8709 33.8029 29.8709 33.1563C29.8709 32.5096 29.3471 31.9854 28.7012 31.9854C28.0552 31.9854 27.5314 32.5096 27.5314 33.1563C27.5314 33.8029 28.0552 34.3271 28.7012 34.3271Z" fill="#25265E" fill-opacity="0.67"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_2886_605">
                                    <rect width="40" height="40" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className='md:flex w-[95vw] ml-[1vw]'>
                    <div className='w-[99vw] md:w-[50%] m-[1vw] rounded-lg overflow-hidden'>
                        <div className='flex flex-row bg-[#333333]'>
                            <h1 className='bg-[#333333] h-[6vh] flex items-center pl-2 w-[99.9%] rounded-t-lg'><span className='text-green-500 '>{"</>"}</span>Code</h1>

                            {loader && <div role="status" className="bg-[#292929] rounded-sm w-[9vw] flex items-center justify-center">
                                <svg aria-hidden="true" className="inline w-6 h-6 animate-spin text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>}

                            {!loader && <button className='bg-[#292929] rounded-sm pt-[3px] pb-[3px]  w-[9vw] flex justify-center' onClick={check}><span className='flex flex-row items-center h-[100%] pr-[4px] pb-[2px]'><Play size={16} strokeWidth={2.25} /></span>Run</button>}
                        </div>
                        <Editor
                            height="80vh"
                            language={language === 'c++' ? 'cpp' : (language === 'c#' ? 'csharp' : language)}
                            value={iinitial[language]}
                            onChange={(code) => setCode(code)}
                            theme='vs-dark'
                        />
                    </div>
                    <div className='w-[99vw] md:w-[50%]'>
                        <div className='bg-[#1E1E1E] m-[1vw] rounded-md overflow-hidden h-[86vh]'>
                            <h1 className='bg-[#333333] text-white h-[6vh] flex items-center pl-2 w-[100%] rounded-t-lg'><span className='flex items-center pr-2'><NotebookText size={16} color="#007BFF" /></span>Output</h1>
                            <div className='h-[calc(100%-6vh)] overflow-y-auto pr-[10px] pl-[10px] pb-[10px]'>
                                <pre className='mt-[4vh] whitespace-pre-wrap break-words'>{formatErrorOutput(response)}</pre>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
