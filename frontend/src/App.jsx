import "./App.css";

import Header from "./components/header/Header";
import SignUp from "./components/registration/SignUp";
import SignIn from "./components/registration/SignIn";
import Home from "./pages/home/Home";

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
