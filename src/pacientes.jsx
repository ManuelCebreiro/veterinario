import { useState } from "react";
import React from "react"
import './bodyajustes.css';




function BodyPacientes(props) {

    return (

        <div id="contenidoform" className="col-7">
            <div id="formulario2">
                {/* <div><p>{output}</p></div> FECHA ACTUAL*/}
                    <div className="row text-center"><h1 class="display-4">PACIENTES</h1></div>
                    <p class="lead text-center">Espacio para añadir y completar informes de pacientes</p>
                    <hr class="my-4" />
                    <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Buscar informe por nombre del paciente" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="bi bi-search"></i>
                            </span>
                        </div>
                    <hr/>
                    <div className="row mb-4">
                        <div class="jumbotron col-9 bg-white ms-3">
                            <h1 class="display-4">Paciente</h1>
                            <p class="lead">En este apartado puedes ver todo lo relacionado con los trabajadores..</p>
                            <hr></hr>
                            <div className="row">
                                <div className="col-6">
                                    <img id="img2" src={`https://m.media-amazon.com/images/I/519f8CbN8vL._SX450_.jpg`} alt="100%" className="img-fluid" />
                                </div>
                                <div className="col-6 ps-5">
                                    <p className="lead p-2 bg-light">ID:</p>
                                    <p className="lead p-2">2342342343</p>
                                    <p className="lead p-2 bg-light">Nombre:</p>
                                    <p className="lead p-2">Manuel</p>
                                    <p className="lead p-2 bg-light">Apellidos:</p>
                                    <p className="lead p-2"> Cebreiro</p>
                                    <p className="lead p-2 bg-light">Pacientes:</p>
                                    <p className="lead p-2"> ENLACE</p>

                                </div>
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <button type="button" className="btn btn-success btn-sm">Enviar</button>
                            </div>
                        </div>
                        <div className="col-2 bg-white ms-5">
                            <h5 className="text-center mt-3">Lista empleados</h5>
                            <ul className="list-group list-unstyled text-center">
                                <li className="py-2">empleado 1</li>
                                <li className="py-2">empleado 2</li>
                            </ul>
                        </div>
                    </div>
                    
              

            </div>
        </div>
    );
}




export default BodyPacientes;
