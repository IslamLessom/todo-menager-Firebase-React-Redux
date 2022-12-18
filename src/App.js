import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


import { AntLayout, AntHeader, AntContent, AntSider, AppContent } from "./App.element";
import { GlobalStyle } from "./GlobalStyled";


//components
import Menage from './Pages/Menage'
import Director from './Pages/Director'
import Accountant from './Pages/Accountant'
import Consultant from './Pages/Consultant'
import Content from "./Components/Contents";
import Sider from "./Components/Sider/Sider";
import Navbar from "./Components/Navbar";

//firebase
import { signOut } from "firebase/auth"
import { signInWithPopup } from 'firebase/auth'
import { provider } from "./Fairbase";
import { auth } from "./Fairbase";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
    })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
    })
  }
  return (
    <>
      <Router>
        <AppContent>
          <GlobalStyle />
          <AntLayout>
            <AntSider>
              <Sider isAuth={isAuth} signUserOut={signUserOut} signInWithGoogle={signInWithGoogle} />
            </AntSider>
            <AntLayout>
              <AntHeader>
                <Navbar />
              </AntHeader>
              <AntContent>
                <Routes>
                  <Route path='/menage' element={<Menage isAuth={isAuth} />} />
                  <Route path='/accountant' element={<Accountant />} />
                  <Route path='/consultant' element={<Consultant />} />
                  <Route path='/director' element={<Director />} />
                </Routes>
              </AntContent>
            </AntLayout>
          </AntLayout>
        </AppContent>
      </Router>
    </>
  );
}

export default App;
