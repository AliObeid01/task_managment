# Task Management Web App

Welcome to the Task Management Web App repository! This web application helps you organize and manage your tasks effectively. You can create, edit, and track tasks to stay productive and organized.

## Table of Contents
- [Features](#features)
- [Stack](#stack)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)

## Features
- Create new tasks with titles, descriptions, due dates, and priorities.
- Edit and update task details as needed.
- Mark tasks as completed or delete them.
- Sort and filter tasks based by Due Date.

## Stack
This web app is built using the following technologies:
- Frontend: HTML5, CSS3, JavaScript (ES6+),Next.js v13 app-directioty
- Backend: Node.js, Express.js
- Database: MongoDB

## Getting Started
To run the Task Management Web App locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/AliObeid01/task_management.git
2. Navigate to the project directory:
   ```sh
   cd task-management-web-app
3. Navigate to frontend folder and install dependencies:
   ```sh
   cd frontend
   npm install
4. start the frontend development server:
   ```sh
   npm run dev
5. Navigate to backend folder and install dependencies:
   ```sh
   cd backend
   npm install
6. Create a .env file in the backend directory and configure your server:
   ```sh
   PORT=''
   DATABASE_URL=mongodb://127.0.0.1:27017/db.name
   JWT_SECRET_KEY=''
