"use client";
import { useState } from 'react';
import Link from 'next/link';
import TasksTab from '../components/TasksTab';
import CompletedTasksTab from '../components/CompletedTasksTab';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <div>
      <h2>Task Management</h2>
      <div>
        <Link href="/tasks">Tasks</Link>
        <Link href="/completed-tasks">Completed</Link>
      </div>
      {activeTab === 'tasks' ? <TasksTab /> : <CompletedTasksTab />}
      <div>
        <Link href="/add-task">Add Task</Link>
      </div>
    </div>
  );
};

export default HomePage;
