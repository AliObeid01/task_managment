import Link from 'next/link';
import { useState } from 'react';
import { useSignupMutation } from '../redux/authApi';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signup, { isError }] = useSignupMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup({ name, email, password });
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {isError && <div>An error occurred during signup.</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <Link href="/signin">Already have an account? Sign In</Link>
      </div>
    </div>
  );
};

export default SignupPage;
