import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');
    console.log('Logging in with:', email, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-heading">Login</h2>

      <div className="form-group">
        <label className="login-label">Email:</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
      </div>

      <div className="form-group">
        <label className="login-label">Password:</label>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit" className="login-btn">Login</button>
    </form>
  );
}

export default LoginForm; 

