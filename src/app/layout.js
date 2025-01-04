// app/layout.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';



export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-[#0F0F0F] text-white' >
      <head>
        <meta charset="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="An interactive platform to practice coding, generate programming questions, and receive instant feedback. Supports a wide range of programming languages including C, C++, Python, Java, JavaScript, HTML, CSS, Swift, Rust, Ruby, Go, PHP, Kotlin, TypeScript, and more. Offers compilers and IDEs for all major languages, allowing you to run, test, and debug your code directly within the platform. Perfect for learners, professionals, and anyone looking to improve coding skills."/>
        <meta name="keywords" content="online coding platform, practice coding, generate coding questions, run code online, compilers for C, C++, Python, Java, Swift, Rust, HTML, CSS, JavaScript, code feedback, coding challenge, coding exercises, coding tests, coding quizzes, programming language compilers, free coding platform, coding practice, learn to code, code editor, code execution, debugging code, coding tutorials, algorithm practice, data structures, programming exercises, coding interview questions, coding for beginners, advanced coding exercises, online coding compiler, coding problem solver, interactive coding platform, test code online, online compiler, programming environments, multi-language compilers, C language compiler, Python compiler, JavaScript compiler, Java compiler, Swift compiler, Rust compiler, online code execution, online programming tools, programming challenges, coding competition, learn JavaScript online, learn Python online, free compilers, coding IDE, beginner coding problems, problem-solving with code, coding problem generator, online test environment, practice algorithms, programming contests, programming challenges platform, competitive programming practice, coding bootcamp, coding interview preparation, online code testing, build projects, software development, programming resources, web development practice, mobile app development practice, backend development coding, frontend coding challenges, web development coding, mobile development practice, full-stack coding exercises, test programming skills, code challenges platform, coding practice website, best online compilers, run JavaScript online, run Python online, run C online, run C++ online, coding test platform, coding project ideas, tech interview preparation, project-based learning, learn programming online, practice coding challenges online, real-time coding editor, code running environment, software engineering practice, problem-solving coding, coding for interview prep, competitive coding platform, online programming learning, build coding projects, coding bootcamp platform,c online compiler,c++ online compiler,java online compiler,javascript online compiler,swift online compiler,css online compiler,html online compiler,python online compiler,Compiler,compiler,online compiler"/>

        <meta name="author" content="Shubhranshu Satpathy" />

        <meta property="og:title" content="Online Coding Platform | Practice & Get Feedback | MultiLanguage Complier" />
        <meta property="og:description" content="Practice coding, generate programming questions, and run code in real-time with support for C, C++, Python, Java, JavaScript, and more. Get instant feedback and improve your skills." />
        <meta property="og:image" content="Logo1.png" />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="Logo1.png" />

        <title>Online Coding Platform | Practice Coding and Get Instant Feedback</title>
      </head>

      <body>
        <link rel="icon" href="/Logo1.png" sizes="any" />
        <Navbar />
        <header>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
