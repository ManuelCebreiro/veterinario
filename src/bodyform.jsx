import React, { useState, useContext } from "react";
import './bodyform.css';
import Documentdown from "./Documentdown";
import { Context } from "./store/appContext";




function BodyForm(props) {

    const { store, actions } = useContext(Context);
    const [inputs, setInputs] = useState({ name: "", lastname: "", pet: "", type: "", age: "", sex: null, motive: "", textarea: "" })
    const handleinputs = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

 
    let fecha = new Date();
    let dateactual = String(fecha.getDate()).padStart(2, '0') + '/' + String(fecha.getMonth() + 1).padStart(2, '0') + '/' + fecha.getFullYear();

    return (

        <div id="contenidoform" className="col-7">
            <div className="row float-end py-3 px-3">          
            </div>
                <div id="formulario">
                    <div className="row">
                        <div className="col-lg-10 col-md-8 col-sm-8"></div>
                        <div className="col-lg-2 col-md-4 col-sm-4">{dateactual}</div>
                    </div>
                    <h1 className="text-center">Informe</h1>
                    <div className="row">
                        <div className="col mb-4">
                            <input type="text"
                                value={inputs.name} onChange={(e) => handleinputs(e)}
                                name="name"
                                onKeyDown={(e) => {
                                    let array = Array.from(e.target.value)
                                    array.filter(words => words !== " ");
                                }}

                                className="form-control" placeholder="Nombre" aria-label="First name" />
                        </div>
                        {/* Input de nombre del cliente*/}

                        <div className="col">
                            <input type="text"
                                value={inputs.lastname} onChange={(e) => handleinputs(e)}
                                name="lastname"
                                onKeyDown={(J) => {
                                    let array = Array.from(J.target.value)
                                    let filterArray = array.filter(words => words !== " ");

                                    if (J.key === "Enter" && filterArray.length) {
                                        setInputs.lastname([...inputs.name, J.target.value]);

                                    }
                                }}
                                className="form-control" placeholder="Apellido" aria-label="Last name" />
                        </div>
                    </div>
                    {/* Input con apellido del cliente */}

                    <div className="row">
                        <div className="col mb-4">
                            <input type="text"
                                value={inputs.pet} onChange={(e) => handleinputs(e)}
                                name="pet"
                                onKeyDown={(e) => {
                                    let array = Array.from(e.target.value)
                                    let filterArray = array.filter(words => words !== " ");

                                    if (e.key === "Enter" && filterArray.length) {
                                        setInputs.pet([...inputs.pet, e.target.value]);

                                    }
                                }}

                                className="form-control" placeholder="Nombre mascota" />
                        </div>
                        {/* Input con nombre de la mascota */}

                        <div className="col">
                            <input type="text"
                                value={inputs.type} onChange={(e) => handleinputs(e)}
                                name="type"
                                onKeyDown={(e) => {
                                    let array = Array.from(e.target.value)
                                    let filterArray = array.filter(words => words !== " ");

                                    if (e.key === "Enter" && filterArray.length) {
                                        setInputs.type([...inputs.type, e.target.value]);

                                    }
                                }}

                                className="form-control" placeholder="Tipo de mascota" />
                        </div>
                        {/* Input del tipo de mascota */}

                        <div className="col">
                            <input type="number"
                                value={inputs.age} onChange={(e) => handleinputs(e)}
                                name="age"
                                onKeyDown={(e) => {
                                    let array = Array.from(e.target.value)
                                    let filterArray = array.filter(words => words !== " ");

                                    if (e.key === "Enter" && filterArray.length) {
                                        setInputs.age([...inputs.age, e.target.value]);

                                    }

                                }}

                                className="form-control" placeholder="Edad mascota" />
                        </div>
                        <div class="col-md-2">
                            <select class="form-select"
                                value={inputs.sex} onChange={(e) => handleinputs(e)}
                                name="sex"
                                onClick={(e) => {
                                    if (e.target.value ==="Macho") {
                                        setInputs.sex({ ...inputs.sex, sex: true });
                                    } else if (e.target.value === "Hembra") {
                                        setInputs.sex({ ...inputs.sex, sex: false });

                                    }
                                }}
                            >   <option>Sexo</option>
                                <option>Macho</option>
                                <option>Hembra</option>
                            </select>
                        </div>

                        <div className="col">
                            <input type="text"
                                value={inputs.motive} onChange={(e) => handleinputs(e)}
                                name="motive"
                                onKeyDown={(e) => {
                                    let array = Array.from(e.target.value)
                                    let filterArray = array.filter(words => words !== " ");

                                    if (e.key === "Enter" && filterArray.length) {
                                        setInputs.motive([...inputs.motive, e.target.value]);

                                    }
                                }}
                                className="form-control" placeholder="Motivo visita" />
                        </div>

                        {/* Input del motivo de la visita^^^^ */}

                        <div className="mb-3 text-center">
                            <label for="exampleFormControlTextarea1" className="form-label"><h6>Comentario para el veterinario</h6></label>
                            <textarea
                                value={inputs.textarea} onChange={(e) => handleinputs(e)}
                                name="textarea"
                                onKeyDown={(e) => {
                                    let array = Array.from(e.target.value)
                                    let filterArray = array.filter(words => words !== " ");

                                    if (e.key === "Enter" && filterArray.length) {
                                        setInputs.textarea([...inputs.textarea, e.target.value]);

                                    }
                                }}
                                className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        {/* Input del area de texto de comentario */}
                    </div>
                    <button type="button" className="btn btn-success me-3 float-start" onClick={(e) => {
                        if (inputs.textarea !== "" && inputs.name !== "" && inputs.lastname !== "" && inputs.pet !== "" && inputs.age !== "" && inputs.type !== "" && inputs.motive !== "" && inputs.sex !== "") {
                            actions.setDatos(inputs);
                            setInputs({ name: "", lastname: "", pet: "", type: "", age: "", sex: "", motive: "", textarea: "" })
                        } else alert("Tienes que rellenar todos los campos.")
                    }}>Enviar</button>
                    
                </div>

                

                <Documentdown name={inputs.name} lastname={inputs.lastname} textarea={inputs.textarea} namepet={inputs.pet} typepet={inputs.type} agepet={inputs.age} motive={inputs.motive} sex={inputs.sex}/>
            

        </div>
    );
}

export default BodyForm;