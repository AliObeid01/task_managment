"use client";
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddTaskMutation } from '../redux/tasksApi';
import { useRouter } from 'next/navigation';

const AddTaskSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string(),
  due_date: Yup.date().required('Required'),
});

const AddTaskPage = () => {
  const [addTask] = useAddTaskMutation();
  const router = useRouter();

  const handleSubmit = async (values) => {
    console.log(values)
    try {
      await addTask(values);
      router.push('/home');

    } catch (error) {
      console.error('Add task error:', error);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <Formik
        initialValues={{ title: '', description: '', due_date: '' }}
        validationSchema={AddTaskSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Title:</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label>Description:</label>
            <Field as="textarea" name="description" />
          </div>
          <div>
            <label>Due Date:</label>
            <Field type="date" name="due_date" />
            <ErrorMessage name="due_date" component="div" />
          </div>
          <button type="submit">Add Task</button>
        </Form>
      </Formik>
      <div>
        <Link href="/home">Back to Home</Link>
      </div>
    </div>
  );
};

export default AddTaskPage;
