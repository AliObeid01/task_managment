"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useSigninMutation } from './redux/authApi';
import { useRouter } from 'next/navigation';

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
    
    <div>
      <h2>Sign In</h2>
      {isError && <div>Invalid Credintals</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div>
        <Link href="/signup">Don't have an account? Sign Up</Link>
      </div>
    </div>
   
  );
};

export default SigninPage;
