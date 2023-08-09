import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectCompletedTasks } from '../redux/tasksSlice';
import TaskItem from './TaskItem';

const CompletedTasksTab = () => {
  const completedTasks = useSelector(selectCompletedTasks);

  return (
    <div>
      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default CompletedTasksTab;
