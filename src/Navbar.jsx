import React from "react"
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return ( 
        <div className="col-2 p-0 bg-dark">
            <div>
                <div id="contenidonavbar">
                    <div className="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Empresa</span>
                        </a>
                        <ul className="nav nav-pills flex-column align-items-center align-items-sm-start mb-5" id="menu">
                            <li className="nav-item">
                                {/* <Link to="/"> */}
                                <a href="/" className="nav-link align-middle px-0">
                                    <i className="fs-3 bi-house text-white"></i> <span className="ms-2 fs-5 d-none d-sm-inline text-white">Home</span>
                                </a>
                                {/* </Link> */}
                            </li>
                            <li>
                                <a href="/informes" className="nav-link px-0 align-middle">
                                    <i className="fs-3 bi-speedometer2 text-white"></i> <span className="ms-1 fs-5 d-none d-sm-inline text-white">Informes</span> </a>
                            </li>
                            <li>
                                <a href="/worker" className="nav-link px-0 align-middle">
                                <i className="fs-3 bi bi-file-person text-white"></i> <span className="ms-2 fs-5 d-none d-sm-inline text-white">Empleados</span></a> 
                            </li>
                            <li>
                                <a href="/about" className="nav-link px-0 align-middle">
                                <i className="fs-3 bi bi-gear text-white"></i><span className="ms-2 fs-5 d-none d-sm-inline text-white">Ajustes</span></a> 
                            </li>
                            <li>
                                <a href="/pacientes" className="nav-link px-0 align-middle">
                                    <i class="fs-3 bi-people text-white"></i> <span className="ms-2 fs-5 d-none d-sm-inline text-white">Pacientes</span> </a>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown pb-4 ml-6">
                            <a href="#" className="align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img id="imgperfil" src="https://m.media-amazon.com/images/I/519f8CbN8vL._SX450_.jpg" alt="hugenerd" width="140" height="140" className="rounded-circle mb-3" />
                                <span className="d-none d-sm-block mx-1 ">Trabajador</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">Inicio jornada</a></li>
                                <li><a className="dropdown-item" href="#">Fin jornada</a></li>
                                <li><a className="dropdown-item" href="/worker">Perfil</a></li>
                                
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                            </ul>
                            <div>
                                <ul className="nav nav-pills flex-column align-items-center align-items-sm-start mt-3">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link align-middle px-0">
                                            <i className="fs-5 bi bi-person-circle text-success"></i><span className="ms-2 fs-5 d-none d-sm-inline text-white">Trabajador 1</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link align-middle px-0">
                                            <i className="fs-5 bi bi-person-circle text-success"></i><span className="ms-2 fs-5 d-none d-sm-inline text-white">Trabajador 2</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link align-middle px-0">
                                            <i className="fs-5 bi bi-person-circle text-danger"></i><span className="ms-2 fs-5 d-none d-sm-inline text-white">Trabajador 3</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/login" className="nav-link align-middle px-0">
                                            <i className="fs-5 bi bi-person-plus text-warning"></i><span className="ms-2 fs-5 d-none d-sm-inline text-white">Añadir nuevo</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;