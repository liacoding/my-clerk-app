import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import SignInPage from './pages/SignInPage'
import ProtectedPage from './pages/ProtectedPage'
import { SignedIn, SignedOut, SignInButton, UserButton, RedirectToSignIn } from "@clerk/clerk-react";
import SignUpPage from './pages/SignUpPage'
import Header from './pages/Header'

function App() {


  return (

    <div>

      {/* Add Header */}
      <Header />
 

    <Routes>



      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/protected" element={<> <SignedIn> <ProtectedPage/> </SignedIn>
    <SignedOut>   <Navigate to="/signin" /> </SignedOut> </>} />
    </Routes>
    </div>
  )
}

export default App;


