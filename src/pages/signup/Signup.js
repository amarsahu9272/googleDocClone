import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call backend API to store user data
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1>Create your Google Account</h1>
      <p>
        One account is all you need. A single username and password gets you
        into everything Google.
      </p>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={userData.email}
        onChange={handleInputChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={userData.confirmPassword}
        onChange={handleInputChange}
      />

      <div className="password-requirements">
        <p>Your password must:</p>
        <ul>
          <li>Be at least 8 characters long</li>
          <li>Contain at least one uppercase letter</li>
          <li>Contain at least one lowercase letter</li>
          <li>Contain at least one number or special character</li>
        </ul>
      </div>

      <button type="submit">Next</button>
    </form>
  );
}

export default Signup;
