"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useSigninMutation } from './redux/authApi';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [signin, { isError }] = useSigninMutation();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin({ email, password });
      if(response.data){
        localStorage.setItem('token',response.data.token)
        router.push('/home');
      }
      
    } catch (error) {
      console.error('Signin error:', error);
    }
  };

  return (
    
    <div className={styles.container}>
      <h2>Sign In</h2>
      {isError && <div className={styles.error}>Invalid Credentials</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
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
          Sign In
        </button>
      </form>
      <div>
        <Link href="/signup" className={styles.link}>
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
   
  );
};

export default SigninPage;
