import logo from './logo.svg';
import './App.css';

import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
import { Home } from './components/userdata/userdata';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { UserData } from './components/usersdata/usersdata';
import { ResetPassword } from './components/forgotPwd/forgotPwd';
import { DeleteOne } from './components/deleteone/deleteone';
import { DeleteAll } from './components/deleteall/deleteall';
import { LandingPage } from './components/home/home';
import { WcPg } from './components/welcome/welcome';
import { AcGe } from './components/status/status';

import { Book, BookingPage } from './components/booking/booking';
import { AdminPage } from './components/admin/admin';
import OtpInput from './components/otp/otp';

import React from 'react';
import { Team } from './components/team/team';






function App() {
  const auth = sessionStorage?.auth && JSON.parse(sessionStorage?.auth)?.Email

  return (
    <>
     
    <BrowserRouter>
    <Routes> 
    <Route path='' element={<WcPg/>}/>
      <Route path='/userdata' element={auth?<Home/>:<SignIn/>} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/resetpwd' element={<ResetPassword/>}/>
      <Route path='/deleteone' element={<DeleteOne/>}/>
      <Route path='/deleteall' element={<DeleteAll/>}/>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/status' element={<AcGe/>} />
      <Route path='/otp' element={<OtpInput/>} />
   
      <Route path='/book' element={<Book/>} />
      <Route path='/admin' element={<AdminPage/>} />

      

      {/* tetsing conditional rendering*/}
  
      <Route path='/userdata' element={auth?<UserData/>:<SignIn/>} />

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;





