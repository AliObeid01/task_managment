// import { useGetTasksMutation } from '../redux/tasksApi';
// import { useState, useEffect } from 'react';
// import TaskItem from './TaskItem';

// const TasksTab = () => {
//   const [tasks, setTasks] = useState([]);
//   const [getTasks] = useGetTasksMutation();

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await getTasks();
//       setTasks(response.data.data.tasks);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   }  

//   return (
//     <div>
//       {tasks && tasks.map((task) => (
//         <TaskItem key={task._id} task={task} />
//       ))}
//     </div>
//   );
// };

// export default TasksTab;

import { useCompleteTaskMutation, useDeleteTaskMutation ,useGetTasksMutation} from '../redux/tasksApi';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const TasksTab = () => {
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

  return (
    <div className="task-item">
      {tasks && tasks.map((task) => (
        <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.due_date}</p>
        <button onClick={() => handleCompleteTask(task._id)}>Complete</button>
        <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
        <div>
          <Link href={`/edit-task/${task._id}`}>Edit</Link>
        </div>
        </div>
      ))}
    </div>
  );
};

export default TasksTab;
