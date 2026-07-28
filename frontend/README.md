# VectorShift Pipeline Builder

A visual pipeline builder built as part of the **VectorShift Frontend Technical Assessment**. The application allows users to create node-based workflows using a drag-and-drop interface, dynamically configure text inputs, and analyze the resulting pipeline through a FastAPI backend.

---

## Features

### Node Abstraction
- Designed a reusable **BaseNode** component to eliminate duplicate code across node implementations.
- Added multiple custom nodes to demonstrate the flexibility of the abstraction.
- Shared styling and handle generation for consistent behavior.

### Custom Nodes
- Input Node
- Output Node
- LLM Node
- Text Node
- API Node
- Database Node
- Image Node
- Delay Node
- Filter Node

### Dynamic Text Node
- Auto-resizing text area based on user input.
- Automatically detects variables enclosed in double curly braces.

Example:

```text
Hello {{name}}

Welcome to {{company}}
```

The node automatically generates input handles for:

- `name`
- `company`

### Pipeline Analysis
The frontend sends the complete pipeline (nodes and edges) to a FastAPI backend, which returns:

- Total number of nodes
- Total number of edges
- Whether the pipeline forms a Directed Acyclic Graph (DAG)

The analysis result is displayed to the user after submission.

---

# Tech Stack

## Frontend

- React
- React Flow
- Zustand
- JavaScript
- CSS

## Backend

- Python
- FastAPI
- Pydantic

---

# Project Structure

```
frontend/
│
├── src/
│   ├── components/
│   │   └── BaseNode/
│   │
│   ├── nodes/
│   │
│   ├── utils/
│   │
│   ├── constants/
│   │
│   ├── submit.js
│   ├── toolbar.js
│   ├── ui.js
│   └── store.js
│
└── package.json

backend/
│
├── main.py
├── schemas.py
└── services/
```

---

# Installation

## Clone the repository

```bash
git clone <repository-url>
```

---

## Frontend

```bash
cd frontend

npm install

npm start
```

The frontend runs at:

```
http://localhost:3000
```

---

## Backend

```bash
cd backend
pip install -r requirements.txt

uvicorn main:app --reload
```

The backend runs at:

```
http://127.0.0.1:8000
```

---

# Building for Production

```bash
npm run build
```

---

# Assignment Requirements Covered

| Requirement | Status |
|------------|--------|
| Node abstraction | Completed |
| Unified styling | Completed |
| Five additional node types | Completed |
| Dynamic Text Node | Completed |
| Dynamic variable handles | Completed |
| FastAPI integration | Completed |
| Node & Edge counting | Completed |
| DAG detection | Completed |

---

# Design Highlights

- Reusable component architecture using a shared `BaseNode`.
- Dynamic handle generation driven by parsed variables.
- Utility-based handle positioning for maintainable layouts.
- Clean separation between frontend UI and backend pipeline analysis.
- Production build verified successfully using `npm run build`.

---

# Future Improvements

- Modal-based analysis result instead of browser alerts.
- Save and load pipeline functionality.
- Undo/Redo support.
- Pipeline validation before submission.
- Export and import pipeline JSON.

---

Developed as part of the **VectorShift Frontend Technical Assessment**.