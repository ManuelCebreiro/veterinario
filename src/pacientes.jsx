import { useState } from "react";
import React from "react"
import './bodyajustes.css';




function BodyPacientes(props) {

    return (

        <div id="contenidoform" className="col-7">
            <div id="formulario2">
                {/* <div><p>{output}</p></div> FECHA ACTUAL*/}
                <div class="jumbotron">
                    <h1 class="display-4">PACIENTES</h1>
                    <p class="lead">Hemos habilitado unas pequeñas opciones, para que puedas ver tus informes</p>
                    <hr class="my-4"/>
                    <div className="row">
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <button type="button" className="btn btn-success btn-sm">Enviar</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}




export default BodyPacientes;
