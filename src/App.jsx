import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import React,{useState} from "react";
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




function App(props) {
	const [isStarter, setIsStarter] = useState(false);


  return (
    <div className="row">
      
      <Navbar/>
      <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<BodyForm/>} />
                <Route exact path="/about" element={<BodyAjustes/>} />
                <Route exact path="/worker" element={<Worker/>} />
                <Route exact path="/informes" element={<BodyInformes/>} />
                <Route exact path="/pacientes" element={<BodyPacientes/>} />
                <Route exact path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
      <NavbarRigth/>
      <Navbardown/>
    </div>
  );
}

export default injectContext(App);
