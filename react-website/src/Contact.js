// import React from 'react';

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>Welcome to the Contact Page!</p>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';

const Contact = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement form submission logic here
    console.log('Submitted user data:', user);

    // Reset form or perform other actions after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>

        <label htmlFor="username">Username</label>
        <p><input
          type="text"
          id="username"
          className="username"
          placeholder="Enter your username"
          name="username" // Use name attribute for easier state management
          value={user.username}
          onChange={handleInputChange}
        /></p><br></br>

        <label htmlFor="email">Email</label>
        <p><input
          type="email"
          id="email"
          className="email"
          placeholder="Enter your email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        /></p><br></br>

        <label htmlFor="phone">Phone</label>
        <p><input
          type="number"
          id="phone"
          className="phone"
          placeholder="Enter your phone"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
        /></p><br></br>

        <label htmlFor="password">Password</label>
        <p><input
          type="password"
          id="password"
          className="password"
          placeholder="Enter your password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        /></p><br></br>

        <input type="submit" value="Register Now" />
      </form>
    </div>
  );
};

export default Contact;

// import React, { useState } from 'react';

// function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//       />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;

