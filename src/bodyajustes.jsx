import { useState } from "react";
import React from "react"
import './bodyajustes.css';
import Documentdown from "./Documentdown";





function BodyAjustes(props) {



    return (

        <div id="contenidoform" className="col-7">
            <div id="formulario2">
                {/* <div><p>{output}</p></div> FECHA ACTUAL*/}
                <div class="jumbotron">
                    <h1 class="display-4">AJUSTES</h1>
                    <p class="lead">Hemos habilitado unas pequeñas opciones, para que puedas poner a tu gusto la interfaz.</p>
                    <hr class="my-4" />
                    <div className="row">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12 col-md-offset-2">
                                    <div class="card">
                                        <div class="card-body d-flex justify-content-between align-items-center">
                                            <h3>Tema</h3>
                                            
                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" class="btn btn-info">Left</button>
                                                    <button type="button" class="btn btn-dark">Middle</button>
                                                    <button type="button" class="btn btn-ligth">Right</button>
                                                </div>
                                        </div>
                                        <div class="card-body d-flex justify-content-between align-items-center">
                                            <h3>Fuente</h3>
                                            
                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" class="btn btn-secondary">Fuente A</button>
                                                    <button type="button" class="btn btn-secondary">Fuente B</button>
                                                    <button type="button" class="btn btn-secondary">Fuente C</button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default BodyAjustes;
