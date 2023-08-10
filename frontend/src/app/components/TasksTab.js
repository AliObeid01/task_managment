import { useCompleteTaskMutation, useDeleteTaskMutation ,useGetTasksMutation} from '../redux/tasksApi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TasksTab = () => {
  const router = useRouter();
  const [completeTask] = useCompleteTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [getTasks] = useGetTasksMutation();

  const [tasks, setTasks] = useState('');
 
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

  const handleEditTask = async (task_id) => {   
    router.push(`/edit?task_id=${task_id}`);
  };

  return (
    <div className="task-item">
      {tasks && tasks.map((task) => (
        <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.due_date}</p>
        <button onClick={() => handleCompleteTask(task._id)}>Complete</button>
        <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
        <button onClick={() => handleEditTask(task._id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default TasksTab;
