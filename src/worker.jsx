import React from "react"
import './views/worker.css';

function Worker() {

    return (

        <div id="contenidoworker" className="col-7">
            <div>
                <div className="row text-center"><h1 class="display-4">PERFIL EMPLEADOS</h1></div>

                    <hr class="my-4" />
                <div className="row mb-4">
                <div class="jumbotron col-9 bg-white">
                    <h1 class="display-4">Empleado 1</h1>
                    <p class="lead">En este apartado puedes ver todo lo relacionado con los trabajadores..</p>
                    <hr></hr>
                    <div className="row">
                            <div className="col-6 ">
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
                <div className="col-1"></div>
                <div className="col-2 bg-white">
                    <h5 className="text-center ">Lista empleados</h5>
                    <ul className="list-group list-unstyled text-center">
                        <li>empleado 1</li>
                        <li>empleado 2</li>
                    </ul>
                </div>
                </div>
                
            </div>

        </div>
    );
}

export default Worker;