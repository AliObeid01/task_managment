import { useDispatch } from 'react-redux';
import { useCompleteTaskMutation, useDeleteTaskMutation } from '../redux/tasksApi';
import Link from 'next/link';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [completeTask] = useCompleteTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleCompleteTask = async () => {
    try {
      await completeTask(task.id);
    } catch (error) {
      console.error('Complete task error:', error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await deleteTask(task.id);
    } catch (error) {
      console.error('Delete task error:', error);
    }
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <button onClick={handleCompleteTask}>Complete</button>
      <button onClick={handleDeleteTask}>Delete</button>
      <div>
        <Link href={`/edit-task/${task.id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default TaskItem;
