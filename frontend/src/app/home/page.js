'use client';
import { useState } from 'react';
import Link from 'next/link';
import TasksTab from '../components/TasksTab';
import CompletedTasksTab from '../components/CompletedTasksTab';
import styles from './page.module.css';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <div className={styles.container}>
      <div className={styles.header}>Task Management</div>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 'tasks' ? styles.active : ''}`}
          onClick={() => setActiveTab('tasks')}
        >
          Tasks
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'completed' ? styles.active : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed Tasks
        </div>
        <Link href="/add" className={styles.link}>
          Add Task
        </Link>
      </div>
      {activeTab === 'tasks' ? <TasksTab /> : <CompletedTasksTab />}
    </div>
  );
};

export default HomePage;
