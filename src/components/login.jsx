import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { HomePage } from './homePage';

export const Login = () => {
    const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>     
        <HomePage user={user}/>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}