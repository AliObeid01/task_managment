"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useSignupMutation } from '../redux/authApi';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signup, { isError }] = useSignupMutation();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response= await signup({ name, email, password }); 
      if(response.data){
        router.push('/');
      }
    } catch (error) {
      console.log('Signup error:', error);
    }
  };

  return (
    
<div className={styles.container}>
      <h2>Sign Up</h2>
      {isError && <div className={styles.error}>Email Already Exist</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Name:</label>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email:</label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Password:</label>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
      <div>
        <Link href="/" className={styles.link}>
          Already have an account? Sign In
        </Link>
      </div>
    </div>
   
  );
};

export default SignupPage;
