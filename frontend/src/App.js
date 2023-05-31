/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import SignIn from './views/SignIn'
import User from './views/User'
import Footer from './components/Footer'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="home" element={<Home />}  />
          <Route path="sign-in" element={<SignIn />}  />
          <Route path="user" element={<User />}  />
        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
