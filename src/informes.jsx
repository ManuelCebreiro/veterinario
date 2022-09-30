
import React, { useContext } from "react"
import { Context } from "./store/appContext";
import './informes.css';




function BodyInformes(props) {

    const { store, actions } = useContext(Context);
    let misdatos = store.datos

    return (

        <div id="contenidoform" className="col-7">
            <div id="formulario2">
                {/* <div><p>{output}</p></div> FECHA ACTUAL*/}
                <div class="jumbotron">
                    <h1 class="display-4">INFORMES</h1>
                    <p class="lead">Hemos habilitado unas pequeñas opciones, para que puedas ver tus informes</p>
                    <hr class="my-4" />
                    <div className="row">
                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Buscar informe por nombre" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="bi bi-search"></i>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <br></br>
                        <ul className="list-group list-unstyled" id="list-group">
                            {misdatos.map((dato, index) => {
                                return (
                                    <li key={index} id="ids">
                                        <div className="card" id="cardnavbarinfor2">
                                            <button
                                                type="button"
                                                className="btn-close "
                                                onClick={() => actions.setborrarfavorito()}></button>

                                            <h5 className="text-center" id="titlecard">Informe paciente </h5>
                                            <p>Nombre cliente: <strong>{dato.name}</strong></p>
                                            <p>Nombre paciente: <strong>{dato.pet}</strong></p>
                                            <p>Especie:<strong></strong>{dato.type}</p>
                                            <p>Edad:<strong>{dato.age}</strong> años.</p>
                                            <p>Sexo:<strong> {dato.sex}</strong>.</p>
                                            <p>Motivo consulta: <strong>{dato.motive}</strong></p>
                                            <p className="text-center"><strong>EVALUACIÓN INICIAL</strong><br />

                                            </p>
                                            <p className="text"><strong>DIAGNÓSTICO</strong><br />
                                                TEXTO QUE SE COMPLETA DESPUES DE CONSULTAR
                                            </p>
                                            <div className="text-center">
                                                <p>Nombre y apellidos veterinario</p>
                                                <p>Titulacion empleado</p>
                                                <p>Número de teléfono</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default BodyInformes;
