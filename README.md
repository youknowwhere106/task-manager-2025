🗂️ Task Manager App
A Full-Stack Web Application built by Piyush Awasthi as part of a Full-Stack Internship Assignment.

This application allows users to add, view, complete, and delete tasks, demonstrating full-stack integration with ReactJS frontend, Node.js + Express backend, and a relational database (Postgres).
✅ Features
🔹 Frontend (ReactJS)
📝 Form to add new tasks (title & description)

📋 Display list of all tasks

✅ Button to mark a task as completed

❌ Button to delete a task

🎨 Optional UI: Visual indicator for completed tasks (e.g., strikethrough or color change)

🔹 Backend (Node.js + Express)
Exposes REST API endpoints:

POST /tasks – Add a new task

GET /tasks – Get all tasks

PUT /tasks/:id/complete – Mark task as completed

DELETE /tasks/:id – Delete a task

🔹 Database (PostgreSQL)
Each task includes the following fields:

id (Primary Key)

title

description

is_completed (Boolean)

created_at (Timestamp)

📦 Installation & Setup
1. Clone the Repository
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app
2. Set Up Backend
cd backend
npm install
npm start
3. Set Up Frontend
cd frontend
npm install
npm start
Make sure backend and database are running properly before launching the frontend.

