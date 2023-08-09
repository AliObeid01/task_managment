'use client';
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
        <Link href="/add-task">Add Task</Link>
      </div>
      <div>
        <button onClick={() => setActiveTab('tasks')}>Tasks</button>
        <button onClick={() => setActiveTab('completed')}>Completed</button>
      </div>
      {activeTab === 'tasks' ? <TasksTab /> : <CompletedTasksTab />}
    </div>
  );
};

export default HomePage;
