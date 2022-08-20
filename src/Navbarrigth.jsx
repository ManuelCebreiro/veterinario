import React, { useContext, useEffect, useState } from "react"
import { Context } from "./store/appContext";
import "./Navbarrigth.css";

function Navbarrigth() {

    const {store, actions} = useContext(Context);
    const [list, setList] = useState();

    useEffect(() => {
        console.log("useEffect Ejecutado")
        console.log(store.datos)
        setList(generateList)
    }, [store.datos]) 

    const generateList = () => {
        return store.datos?.map((dato, index) => {
            return (
                <li key={index} id="ids">
                    <div className="card" id="cardnavbar">
                        <button
                            type="button"
                            className="btn-close "
                            onClick={() => actions.setborrarfavorito(dato)}></button>

                        <h5 className="text-center" id="titlecard">Informe paciente {dato.namepet}</h5>
                        <p>Nombre cliente: <strong>{dato.name} {dato.lastname}</strong></p>
                        <p>Nombre paciente: <strong>{dato.pet}</strong></p>
                        <p>Especie:<strong>{dato.type}</strong></p>
                        <p>Edad:<strong>{dato.age}</strong> años.</p>
                        <p>Sexo:<strong>{dato.sex}</strong>.</p>
                        <p>Motivo consulta:<strong>{dato.motive}</strong></p>
                        <p className="text-center"><strong>EVALUACIÓN INICIAL</strong><br />
                            {dato.textarea}
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
        })
    }

    return (

        <div id="classrow" className="col-2 bg-dark">
            <div id="derecha" className="d-flex flex-column justify-content-center pe-3 ps-3">
                <ul className="list-group list-unstyled">
                    {list}
                </ul>
            </div>
        </div>
    );
}

export default Navbarrigth;