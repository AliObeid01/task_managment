"use client";
import { useState, useEffect } from 'react';
import { useGetTaskMutation, useEditTaskMutation } from '../redux/tasksApi';
import { useSearchParams , useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

const EditTaskPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [getTask] = useGetTaskMutation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [due_date, setDuedate] = useState('');

  const fetchTask = async(task_id)=>{
    const response = await getTask(task_id);
    setTitle(response.data.data.title);
    setDescription(response.data.data.description);
    setDuedate(response.data.data.due_date);
  }
  
  useEffect(() => {
    const task_id = searchParams.get('task_id');
    fetchTask(task_id);
  }, []);

  const [ediTask] = useEditTaskMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const task_id = searchParams.get('task_id')
      await ediTask({ task_id, title, description, due_date});
      router.push('/home');
    } catch (error) {
    console.log(task_id)
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.h2}>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Title:</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Description:</label>
            <textarea type="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.input} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Due Date:</label>
            <input type="date" name="due_date" value={due_date} onChange={(e) => setDuedate(e.target.value)} className={styles.input} />
          </div>
          <button type="submit" className={styles.button}>Save</button>
        </form>
        <div className={styles.link}>
          <Link href="/home" className={styles.link}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
