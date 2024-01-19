import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Registration data:', data); 
  };

  return (
    <form
 
onSubmit={handleSubmit(onSubmit)}>

      
<div>

        
<label
 
htmlFor="firstName">First Name:</label>

        
<input
          {...register('firstName', { required:
 
true })}
          id="firstName"
          placeholder="Enter your first name"
        />
        {errors.firstName && <span className="error">First name is required</span>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          {...register('lastName', { required: true })}
          id="lastName"
          placeholder="Enter your last name"
        />
        {errors.lastName && <span className="error">Last name is required</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          {...register('email', { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ })}
          id="email"
          placeholder="Enter your email"
        />
        {errors.email && <span className="error">Invalid email address</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;