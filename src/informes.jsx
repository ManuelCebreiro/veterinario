
import React, { useContext } from "react"
import { Context } from "./store/appContext";
import './informes.css';
import Documentdown from "./Documentdown";




function BodyInformes(props) {

    const { store, actions } = useContext(Context);
    let misdatos = store.datos

    return (

        <div id="contenidoform" className="col-7">
            <div id="">
                {/* <div><p>{output}</p></div> FECHA ACTUAL*/}
                <div class="jumbotron">
                    <div className="row text-center"><h1 class="display-4">INFORMES</h1></div>
                    <div className="row text-center"><p class="lead">Hemos habilitado unas pequeñas opciones, para que puedas ver tus informes</p></div>
                    <hr class="my-4" />
                    <div className="row">
                     
                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Buscar informe por nombre del cliente" aria-label="Search" aria-describedby="search-addon" />
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
                                        {/* <div className="card" id="cardnavbarinfor2">
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
                                        </div> */}
                                        <Documentdown name={dato.name} lastname={dato.lastname} textarea={dato.textarea} namepet={dato.pet} typepet={dato.type} agepet={dato.age} motive={dato.motive} sex={dato.sex}/>

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
