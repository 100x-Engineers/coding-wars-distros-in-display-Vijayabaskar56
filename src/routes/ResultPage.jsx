import React from "react";

const ResultPage = () => {
  return (
    <>
      <div>
        <h2>Heres your result:</h2>

        {/* HTML Code Block */}
        <div>
          <h3>HTML Code:</h3>
          <pre>
            <code className="language-html">
              {`
          <html>
            <head>
              <title>My Portfolio</title>
            </head>
            <body>
              <header>
                <h1>Welcome to My Portfolio</h1>
              </header>
              <section>
                <h2>About Me</h2>
                <p>I am a passionate web developer...</p>
              </section>
              <section>
                <h2>My Projects</h2>
                <ul>
                  <li>Project 1: ...</li>
                  <li>Project 2: ...</li>
                  <li>Project 3: ...</li>
                </ul>
              </section>
              <footer>
                <p>Contact Me: email@example.com</p>
              </footer>
            </body>
          </html>
        `}
            </code>
          </pre>
        </div>

        {/* CSS Code Block */}
        <div>
          <h3>CSS Code:</h3>
          <pre>
            <code className="language-css">
              {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }

          h1 {
            color: #333;
          }

          p {
            color: #555;
          }

          ul {
            list-style: none;
          }
        `}
            </code>
          </pre>
        </div>

        {/* JavaScript Code Block */}
        <div>
          <h3>JavaScript Code:</h3>
          <pre>
            <code className="language-js">
              {`
          // Sample JavaScript code
          console.log('Hello, World!');
        `}
            </code>
          </pre>
        </div>

        {/* Tailwind CSS Code Block */}
        <div>
          <h3>Tailwind CSS Code:</h3>
          <pre>
            <code className="language-css">
              {`
          <div className="bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">Welcome to My Portfolio</h1>
            <p className="text-gray-600">I am a passionate web developer...</p>
            <ul className="list-disc pl-5">
              <li>Project 1: ...</li>
              <li>Project 2: ...</li>
              <li>Project 3: ...</li>
            </ul>
            <p className="text-gray-600">Contact Me: email@example.com</p>
          </div>
        `}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
