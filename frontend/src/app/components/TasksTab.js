import { useCompleteTaskMutation, useDeleteTaskMutation ,useGetTasksMutation,useFilterTasksMutation} from '../redux/tasksApi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const TasksTab = () => {
  const router = useRouter();
  const [completeTask] = useCompleteTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [getTasks] = useGetTasksMutation();
  const [filterTasks] = useFilterTasksMutation();

  const [tasks, setTasks] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }  
  
  const handleCompleteTask = async (task_id) => {
    try {
      await completeTask(task_id);
      fetchTasks();
    } catch (error) {
      console.error('Complete task error:', error);
    }
  };

  const handleDeleteTask = async (task_id) => {   
    try {
      await deleteTask(task_id);
      fetchTasks();
    } catch (error) {
      console.error('Delete task error:', error);
    }
  };

  const handleFilterTasks = async (due_date) => {   
    try {
      const response = await filterTasks(due_date);
      setTasks(response.data.data.tasks);
      if(due_date==''){
        fetchTasks();
      }
    } catch (error) {
      console.error('Filter task error:', error);
    }
  };

  const handleEditTask = async (task_id) => {   
    router.push(`/edit?task_id=${task_id}`);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <div className={styles.taskItem}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Filter by Due Date: </label>
        <input type="date" name="due_date" onChange={(e) => handleFilterTasks(e.target.value)} className={styles.input} />
      </div>
      {tasks &&
        currentTasks.map((task) => (
          <div key={task._id} className={styles.task}>
            <div className={styles.taskHeader}>
              <div className={styles.taskInfo}>
                <h3 className={styles.h3}>{task.title}</h3>
                <h4 >{task.description}</h4>
                <h5 className={styles.h5}>Due: {task.due_date}</h5>
              </div>
              <div className={styles.taskActions}>
                <button className={`${styles.complete} ${styles.button}`} onClick={() => handleCompleteTask(task._id)}>
                  Complete
                </button>
                <button className={`${styles.edit} ${styles.button}`} onClick={() => handleEditTask(task._id)}>
                  Edit
                </button>
                <button className={`${styles.delete} ${styles.button}`} onClick={() => handleDeleteTask(task._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastTask >= tasks.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TasksTab;
