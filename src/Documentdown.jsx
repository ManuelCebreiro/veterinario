import React from "react"
import './documentdown.css';

function Documentdown({ name, lastname, textarea, namepet, typepet, agepet, motive, sex }) {

    return (

        <div id="formulario1" className="block">
            <h3 className="text-center">Informe paciente {namepet}</h3>
            <br />
            <div className="row"><p>Nombre cliente: <strong>{name} {lastname}</strong></p></div>
            <div className="row"><p>Nombre paciente: <strong>{namepet}</strong></p></div>
            <p>Especie:<strong>{typepet}</strong></p>
            <p>Edad:<strong>{agepet}</strong> años.</p>
            <p>Sexo:<strong>{sex}</strong>.</p>
            <p>Motivo consulta:{motive}</p>
            <p className="text-center"><strong>EVALUACIÓN INICIAL</strong><br />
                {textarea}
            </p>
            <p className="text"><strong>DIAGNÓSTICO</strong><br />
                Apartado para el diagnóstico            </p>
            <div className="text-center">
                <p>Nombre y apellidos veterinario</p>
                <p>Titulacion empleado</p>
                <p>Número de teléfono</p>
            </div>
        </div>

    );
}

export default Documentdown;