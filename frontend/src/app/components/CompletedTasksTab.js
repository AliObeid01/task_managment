"use client";
import { useDeleteTaskMutation , useGetCompletedTasksMutation} from '../redux/tasksApi';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

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
    <div className={styles.taskItem}>
      <div>
        <label className={styles.label}>Filter by Due Date: </label>
        <input type="date" name="due_date" onChange={(e) => handleFilterTasks(e.target.value)} className={styles.input} />
      </div>
      {tasks &&
        tasks.map((task) => (
          <div key={task._id} className={styles.task}>
            <div className={styles.taskHeader}>
              <div className={styles.taskInfo}>
                <h3 className={styles.h3}>{task.title}</h3>
                <h4 >{task.description}</h4>
                <h5 className={styles.h5}>Due: {task.due_date}</h5>
              </div>
              <div className={styles.taskActions}>
                <button className={`${styles.delete} ${styles.button}`} onClick={() => handleDeleteTask(task._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CompletedTasksTab;
