import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import './app.css';
import SignupForm from './component/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './component/LoginForm';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}
