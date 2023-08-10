"use client";
import { useDeleteTaskMutation , useGetCompletedTasksMutation} from '../redux/tasksApi';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CompletedTasksTab = () => {
  const [getCompletedTasks] = useGetCompletedTasksMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const [tasks, setCompletedTasks] = useState([]);
 
  useEffect(() => {
    fetchCompletedTasks();
  }, []);

  const fetchCompletedTasks = async () => {
    try {
      const response = await getCompletedTasks();
      setCompletedTasks(response.data.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }  

  const handleDeleteTask = async (task_id) => {   
    try {
      await deleteTask(task_id);
      fetchCompletedTasks();
    } catch (error) {
      console.error('Delete task error:', error);
    }
  };

  return (
    <div className="task-item">
      {tasks && tasks.map((task) => (
        <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.due_date}</p>
        <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasksTab;
