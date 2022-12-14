import React from 'react'
import useProfilePage from './useProfilePage';
import Button from '../Button';
import styles from './styles.module.css'

const ProfilePageComponent = () => {
const { handleSubmit, submitHandler, register, errors, getValues } =
  useProfilePage();

  return (
    <form
      className="mx-auto max-w-screen-md"
      onSubmit={handleSubmit(submitHandler)}>
      <h1 className="mb-4 text-xl mf">Update Profile</h1>

      <div className="mb-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="w-full"
          id="name"
          autoFocus
          {...register('name', {
            required: 'Please enter name'
          })}
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="w-full"
          id="email"
          {...register('email', {
            required: 'Please enter email',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: 'Please enter valid email'
            }
          })}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          className="w-full"
          type="password"
          id="password"
          {...register('password', {
            minLength: { value: 6, message: 'password is more than 5 chars' }
          })}
        />
        {errors.password && (
          <div className="text-red-500 ">{errors.password.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="w-full"
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            validate: (value) => value === getValues('password'),
            minLength: {
              value: 6,
              message: 'confirm password is more than 5 chars'
            }
          })}
        />
        {errors.confirmPassword && (
          <div className="text-red-500 ">{errors.confirmPassword.message}</div>
        )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === 'validate' && (
            <div className="text-red-500 ">Password do not match</div>
          )}
      </div>
      <div className="mb-4">
        <Button className="primary-button">Update Profile</Button>
      </div>
    </form>
  );
}

export default ProfilePageComponent