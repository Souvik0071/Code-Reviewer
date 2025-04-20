// Import necessary React hooks and libraries
import { useState, useEffect } from 'react'
// Import syntax highlighting themes and components
import "prismjs/themes/prism-tomorrow.css" // Dark theme for code editor
import Editor from "react-simple-code-editor" // Code editor component
import prism from "prismjs" // Syntax highlighting library
// Import markdown processing libraries
import markdown from "react-markdown"
import axios from "axios" // HTTP client for API requests
import rehypeHighlight from "rehype-highlight" // Syntax highlighting for markdown
import "highlight.js/styles/github-dark.css" // Dark theme for markdown code blocks
import './App.css' // Application styles
import Markdown from 'react-markdown' // Markdown renderer

function App() {
  // State management
  const [count, setCount] = useState(0) // Counter (currently unused)
  const [code, setCode] = useState(``) // Stores the user's code input
  const [review, setReview] = useState(``) // Stores the AI-generated code review

  // Effect hook to apply syntax highlighting whenever component updates
  useEffect(() => {
    prism.highlightAll()  
  })

  /**
   * Sends the current code to the backend for analysis
   * and updates the review state with the response
   */
  async function reviewCode(){
    try {
      const response = await axios.post(
        "https://code-reviewer-648r.onrender.com:3000/ai/get-review",
        { code } // Send code in request body
      )
      setReview(response.data) // Update review with AI response
    } catch (error) {
      console.error("Error fetching review:", error)
      setReview("Error: Could not get code review. Please try again.")
    }
  }

  return (
    <>
      <main>
        {/* Left panel - Code input area */}
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(
                code,
                prism.languages.javascript,
                "javascript"
              )}
              padding={10}
              style={{
                fontFamily: '"Fira code","Fira mono",monospace',
                fontSize: 20,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                backgroundColor: "#000000", // Match left panel background
                color: "aqua" // Match left panel text color
              }}
            />
          </div>
          {/* Button to trigger code analysis */}
          <div className="review" onClick={reviewCode}>
            Analyse
          </div>
        </div>

        {/* Right panel - Review display area */}
        <div className="right">
          {/* Render the review as markdown with syntax highlighting */}
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
