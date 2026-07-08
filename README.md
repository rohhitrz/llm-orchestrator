# LLM Orchestrator

A JavaScript-based multi-LLM orchestration engine that queries OpenAI, Claude, and Gemini in parallel, then synthesizes the best possible response using a judge model based on the self-consistency workflow.

## Features

- Query multiple AI models simultaneously
- Parallel API execution using `Promise.all()`
- OpenAI, Claude, and Gemini integration
- Final answer synthesized by a dedicated judge model
- Modular provider architecture
- Environment variable support
- CLI-based application

## Project Structure

```
llm-orchestrator/
│
├── providers/
│   ├── openai.js
│   ├── anthropic.js
│   └── gemini.js
│
├── orchestrator.js
├── judge.js
├── index.js
├── package.json
├── .env.example
└── README.md
```

## How It Works

1. The user enters a question.
2. The orchestrator sends the same prompt to:
   - OpenAI
   - Claude
   - Gemini
3. All model responses are collected in parallel.
4. The responses are passed to a judge model.
5. The judge evaluates each response and generates a refined final answer by combining the strongest aspects of each model instead of copying a single response.

## Workflow

```
                User Question
                      │
                      ▼
              Orchestrator
                      │
      ┌─────────┬─────────┬─────────┐
      ▼         ▼         ▼
   OpenAI    Claude    Gemini
      │         │         │
      └─────────┴─────────┘
                │
                ▼
         Judge (Claude)
                │
                ▼
     Final Synthesized Answer
```

## Technologies Used

- JavaScript (Node.js)
- OpenAI API
- Anthropic Claude API
- Google Gemini API
- dotenv

## Installation

Clone the repository:

```bash
git clone https://github.com/rohhitrz/llm-orchestrator.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using `.env.example`.

Example:

```env
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
GEMINI_API_KEY=your_gemini_api_key
```

Run the project:

```bash
npm start
```

## Self-Consistency Flow

Instead of returning the response from a single model, this project follows a multi-model orchestration approach:

- Generate responses from multiple LLMs
- Compare their outputs
- Evaluate strengths and weaknesses
- Produce a new synthesized response

This improves the overall quality, completeness, and reliability of the final answer.

## Models Used

| Provider | Purpose |
|----------|---------|
| OpenAI | Generate candidate response |
| Claude | Generate candidate response and evaluate all responses |
| Gemini | Generate candidate response |

## Future Improvements

- Interactive CLI input
- Promise.allSettled() for fault tolerance
- Retry mechanism for failed providers
- Streaming responses
- Web-based UI
- Response confidence scoring
- Logging and analytics

## License

This project was built as part of the **GenAI with JS 2026** assignment.