import { useCompleteTaskMutation, useDeleteTaskMutation } from '../redux/tasksApi';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const TaskItem = ({ task }) => {
  const [completeTask] = useCompleteTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  
  const handleCompleteTask = async () => {
    try {
      await completeTask(task._id);
    
    } catch (error) {
      console.error('Complete task error:', error);
    }
  };

  const handleDeleteTask = async () => {
    
    try {

      await deleteTask(task._id);
    } catch (error) {
      console.error('Delete task error:', error);
    }
  };

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default TaskItem;
