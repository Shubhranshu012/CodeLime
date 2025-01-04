# CodeLime

## Overview
Welcome to our **Online Coding Platform**, a web-based tool designed to assist programmers in practicing coding, generating programming questions, and executing their code across various languages. The platform supports a wide array of programming languages, including C, C++, Java, JavaScript, Python, Swift, Rust, and more. We have integrated **Google Gemini** for question generation and leveraged external services to compile and run code.
Also
The WebApp Include Online Compilers to Compile Code in multiple Languages Such as C, C++, Java, JavaScript, Python, Swift, Rust, HTML, CSS and etc.

### Key Features
1. **Generate Coding Questions**:
   - Generate coding questions for multiple languages with varying levels of difficulty (easy, medium, hard).
   - Powered by **Google Gemini**, the platform dynamically generates programming challenges based on your selected difficulty and programming language.

2. **Code Compilation for Multiple Languages**:
   - The platform uses an external API service for compiling and running code.
   - Supported languages include:
     - **C**, **C++**
     - **Java**, **JavaScript**
     - **Python**, **Swift**, **Rust**
     - **HTML**, **CSS**

3. **Code Execution**:
   - Write, execute, and test your code directly in the browser.
   - Receive instant feedback on the correctness of your code output.

4. **Code Submission and Feedback**:
   - Submit your code for evaluation and receive detailed feedback on its correctness, efficiency, and optimization.
   - Track your progress over time.

## Features in Detail

### 1. **Generate Coding Questions**
   - **Difficulty Levels**: Choose from three levels: Easy, Medium, or Hard.
   - **Multiple Languages**: Generate questions in different programming languages like C, C++, Java, JavaScript, Swift, Rust, HTML, and CSS.
   - **Google Gemini Integration**: Google Gemini generates a variety of coding challenges tailored to the difficulty and language you select.

### 2. **Code Compilation for Multiple Languages**
   - **External Compilation Service**: Uses an external API service to compile and execute code in different languages.
   - **C/C++ Compiler**: Run C and C++ code with instant feedback.
   - **Java Compiler**: Execute Java programs and check the output.
   - **JavaScript Compiler**: Write and run JavaScript code with real-time results.
   - **Python Compiler**: Compile and run Python code for various coding challenges.
   - **Swift Compiler**: Execute Swift code directly in the browser.
   - **Rust Compiler**: Run and test Rust code.
   - **HTML/CSS**: Test HTML/CSS code with a live preview.

### 3. **Real-time Code Execution**
   - **Instant Feedback**: View immediate results of your code after execution and debug effectively.
   - **Error Handling**: The platform will display error messages if there are issues with your code and guide you towards resolving them.
   - **Syntax Highlighting**: Tailored syntax highlighting to improve readability and reduce errors in your code.

### 4. **Code Submission and Evaluation**
   - **Submit Your Code**: Once you’ve tested your code, submit it for evaluation.
   - **Instant Feedback**: Receive detailed feedback about your solution’s correctness and performance.
   - **Track Progress**: Review your submission history to monitor progress and growth over time.

## Technologies Used
- **Frontend**:
  - **Next.js** (for building the React-based application)
  - **Tailwind CSS** (for utility-first, responsive styling)
  - **React.js** (for UI components and state management)
  - **CodeMirror** or **Monaco Editor** (for the in-browser code editor)
  
- **Backend**:
  - **Node.js** (for backend services and API handling)

- **External Services**:
  - **Google Gemini**: Used for dynamic question generation based on language and difficulty level.
  - **External Compiler API**: Provides API-based compilation for supported languages.
    - Examples of services used: 
      - [JDoodle](https://www.jdoodle.com/)
      - [Repl.it](https://replit.com/)
      - [Sphere Engine](https://sphere-engine.com/)

- **Deployment**:
  - **Vercel** (for deploying Next.js applications)

## Installation Instructions

### Prerequisites
Before running this application locally, ensure you have the following tools installed:
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (package managers)


### 1. Clone the Repository
git clone https://github.com/Shubhranshu012/CodeLime.git
cd CODING

### 2. Install Dependencies
npm install

### 3. Run the Development Server
npm run dev
Your application will be available at http://localhost:3000.

### 4. Set Up External Compilation API
You will need to configure an external compiler API to handle code compilation for various languages. Some popular services include:
    a.JDoodle
    b.Repl.it
    c.Sphere Engine
After signing up and obtaining an API key, configure the backend to make API calls to the respective service.

### 5. Build and Deploy for Production
To build the application for production:
->npm run build
->Deploy the platform using services like Vercel, Netlify, or any cloud platform of your choice.

### Usage Instructions
1.For practicing a Coding Question:

->Go to the "Pratice" section.
->Select your preferred language and difficulty level.
->Google Gemini will generate a question based on your preferences.
->Write, Run your Code
->Once you're confident in your solution, click "Submit Code" for evaluation.

2.Select your language and start coding.
->Select the Language You want to test.
->Use the in-browser code editor and write your code.
->Click "Run Code" to compile and execute the code.
->check the output.

### Contributing
We welcome contributions to the platform! To contribute:
->Fork the repository.
->Clone your forked repository locally.
->Create a new branch for your changes.
->Make your changes and commit them with descriptive messages.
->Push your changes to your forked repository.
->Submit a pull request with a detailed description of the changes.


### Acknowledgments
->Next.js: For building the modern React app with server-side rendering and static site generation.
->Google Gemini: For generating dynamic and diverse coding challenges.
->External Compiler APIs: For enabling code compilation across various languages.
->Tailwind CSS: For fast and responsive styling in the frontend.
->Monaco Editor: For providing an advanced, feature-rich in-browser code editor.