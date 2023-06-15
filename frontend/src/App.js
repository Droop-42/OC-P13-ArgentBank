/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './views/Home'
import Login from './features/login/featureComponents/Login'
import User from './views/User'
import Footer from './layouts/Footer'
import RequireLogin from './features/login/featureComponents/RequireLogin'

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
          {/* public routes */}
          <Route index element={<Home />}  />
          <Route path="login" element={<Login />}  />

          {/* private routes */}
          <Route element={<RequireLogin />}>
            <Route path="user" element={<User />}  />
          </Route>

        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
