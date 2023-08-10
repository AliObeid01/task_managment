"use client";
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddTaskMutation } from '../redux/tasksApi';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';


const AddTaskSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  due_date: Yup.date().required('Required'),
});

const AddTaskPage = () => {
  const [addTask] = useAddTaskMutation();
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      await addTask(values);
      router.push('/home');

    } catch (error) {
      console.error('Add task error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.h2}>Add Task</h2>
        <Formik
          initialValues={{ title: '', description: '', due_date: '' }}
          validationSchema={AddTaskSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Title:</label>
              <Field type="text" name="title" className={styles.input} />
              <ErrorMessage name="title" component="div" className={styles.error} />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Description:</label>
              <Field as="textarea" name="description" className={styles.input} />
              <ErrorMessage name="description" component="div" className={styles.error} />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Due Date:</label>
              <Field type="date" name="due_date" className={styles.input} />
              <ErrorMessage name="due_date" component="div" className={styles.error} />
            </div>
            <button type="submit" className={styles.button}>Add Task</button>
          </Form>
        </Formik>
        <div className={styles.link}>
          <Link href="/home" className={styles.link}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AddTaskPage;
