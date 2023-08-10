import { useCompleteTaskMutation, useDeleteTaskMutation ,useGetTasksMutation} from '../redux/tasksApi';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const TaskItem = ({ task }) => {
  const [completeTask] = useCompleteTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [getTasks] = useGetTasksMutation();

  const [tasks, setTasks] = useState([]);
 
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
  
  const handleCompleteTask = async () => {
    try {
      await completeTask(task._id);
      fetchTasks();
    } catch (error) {
      console.error('Complete task error:', error);
    }
  };

  const handleDeleteTask = async () => {   
    try {
      await deleteTask(task._id);
      fetchTasks();
    } catch (error) {
      console.error('Delete task error:', error);
    }
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.due_date}</p>
      <button onClick={handleCompleteTask}>Complete</button>
      <button onClick={handleDeleteTask}>Delete</button>
      <div>
        <Link href={`/edit-task/${task._id}`}>Edit</Link>
      </div>
    </div>
    
  );
};

export default TaskItem;
