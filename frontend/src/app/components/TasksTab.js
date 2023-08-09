import { useGetTasksQuery } from '../redux/tasksApi';
import TaskItem from './TaskItem';

const TasksTab = () => {
    const { data: tasksData, isLoading, isError } = useGetTasksQuery();
    if (isLoading) {
      return <div>Loading tasks...</div>;
    }
  
    if (isError) {
      return <div>Error loading tasks.</div>;
    }

  return (
    <div>
      {tasksData.data.tasks && tasksData.data.tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TasksTab;
