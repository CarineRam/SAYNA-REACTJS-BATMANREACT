import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Eshop from '../pages/Eshop';
import Layout from '../pages/Layout';
import MonCompte from '../pages/MonCompte';
import NotFoundPage from '../pages/NotFoundPage';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import ProtectedRoutes from './ProtectedRoutes';
import { AuthContextProvider } from '../context/AuthContext';
import ForgotPassword from '../pages/ForgotPassword';
 
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='game' element={<Game />} />
              <Route path='eshop' element={<Eshop />} />
              <Route path='compte' element={
                  <ProtectedRoutes route='eshop'>
                    <MonCompte />
                  </ProtectedRoutes>
              }/>
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='cart' element={<Cart />} />
              <Route path='login/forgotpassword' element={<ForgotPassword/>} />
              <Route path='*' element={<NotFoundPage />} />

            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
