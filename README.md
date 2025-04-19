# AI Code Review Assistant


A web application that provides AI-powered code reviews using Google's Gemini AI model. The tool analyzes your code and provides professional-level feedback on quality, best practices, security, and performance.

## Features

- 🚀 Real-time code analysis with Google Gemini AI
- 📝 Markdown-formatted reviews with syntax highlighting
- 🔍 Detailed feedback on code quality, security, and performance
- 💻 Split-panel interface for easy code comparison
- 🌙 Dark theme for comfortable extended use
- 📱 Responsive design works on all device sizes

## Tech Stack

**Frontend:**
- React.js
- Prism.js (syntax highlighting)
- react-simple-code-editor
- react-markdown

**Backend:**
- Node.js
- Express.js
- Google Generative AI SDK

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-code-reviewer.git
   cd ai-code-reviewer
Install dependencies for both frontend and backend:

bash
# Install backend dependencies
cd src
npm install

# Install frontend dependencies
cd ../client
npm install
Create a .env file in the src directory with your Google Gemini API key:

GOOGLE_GEMINI_KEY=your_api_key_here
Usage
Start the backend server:

bash
cd src
npm start
In a separate terminal, start the frontend:

bash
cd client
npm run dev
Open your browser to http://localhost:5173 (or the port your frontend runs on)

Enter your code in the left panel and click "Analyze" to get a professional code review

Configuration
You can customize the AI's behavior by modifying the system instruction in ai.service.js. The current configuration includes:

7+ years of experience persona

Focus on code quality and security

Detailed review guidelines

Example output format

Environment Variables
The following environment variables are required:

Variable	Description
GOOGLE_GEMINI_KEY	Your Google Gemini API key
PORT	Server port (default: 3000)
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements.

License
MIT


This README includes:
1. Project title and screenshot placeholder
2. Key features list
3. Technology stack
4. Installation instructions
5. Usage guide
6. Configuration notes
7. Environment variables
8. Contribution guidelines
9. License information

You can customize it further by:
- Adding actual screenshots
- Including demo gifs/videos
- Adding more detailed setup instructions
- Expanding the features list
- Adding acknowledgments or credits
