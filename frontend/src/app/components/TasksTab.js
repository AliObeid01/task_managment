import { useGetTasksQuery } from '../redux/tasksApi';
import TaskItem from './TaskItem';

const TasksTab = () => {
  const { data: tasks } = useGetTasksQuery();

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksTab;
