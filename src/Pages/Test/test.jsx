/** @format */

import React from "react";

export default function Test() {
  return (
    <div>
      <h1>This is a test page</h1>
    </div>
  );
}

// function RegisterForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       setError('Please fill out all fields');
//       return;
//     }

//     axios.post('/api/register', { name, email, password })
//       .then(() => {
//         setName('');
//         setEmail('');
//         setPassword('');
//         setError('');
//         setSuccess('User created');
//       })
//       .catch(() => {
//         setError('An error occurred. Please try again later.');
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <div className="error">{error}</div>}
//       {success && <div className="success">{success}</div>}
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError('Please fill out all fields');
//       return;
//     }

//     axios.post('/api/login', { email, password })
//       .then(({ data }) => {
//         localStorage.setItem('token', data.token);
//         setError('');
//         window.location = '/profile';
//       })
//       .catch(() => {
//         setError('Email or password is incorrect');
//       });
//   };

//   return (
// <form onSubmit={handleSubmit}>
//   {error && <div className="error">
