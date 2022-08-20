import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import React, { useState } from "react";
import Navbar from './Navbar';
import NavbarRigth from './Navbarrigth';
import BodyForm from './bodyform';
import Documentdown from "./Documentdown";
import BodyAjustes from './bodyajustes';
import Navbardown from "./navbardown";
import Worker from "./worker";
import BodyInformes from "./informes";
import BodyPacientes from "./pacientes";
import Login from "./login";
import injectContext from "./store/appContext";




function App() {
  const [isStarter, setIsStarter] = useState(false);

  const basename = process.env.BASENAME || "";

  return (
    <div className="row">
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BodyForm />} />
          <Route exact path="/about" element={<BodyAjustes />} />
          <Route exact path="/worker" element={<Worker />} />
          <Route exact path="/informes" element={<BodyInformes />} />
          <Route exact path="/pacientes" element={<BodyPacientes />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <NavbarRigth />
        <Navbardown />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
