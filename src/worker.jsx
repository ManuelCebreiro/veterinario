import React from "react"
import './views/worker.css';

function Worker() {

    return (

        <div id="contenidoworker" className="col-7">
            <div id="formwork">
                <div class="jumbotron">
                    <h1 class="display-4">PERFIL EMPLEADOS</h1>
                    <p class="lead">En este apartado puedes ver todo lo relacionado con los trabajadores..</p>
                    <hr class="my-4" />
                    <div className="row">
                            <div className="col">
                                <img id="img2" src={`https://m.media-amazon.com/images/I/519f8CbN8vL._SX450_.jpg`} />
                            </div>
                            <div className="col">
                                <h1 className="display-4 text-center mt-4"></h1>
                                <p className="lead p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend ex. Aliquam efficitur venenatis diam, sed tincidunt nulla tempus sed. Duis consectetur nisi ligula, eget bibendum augue elementum mattis. Nulla fringilla lacus tortor, sed sagittis magna commodo eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo nisl eget augue vestibulum aliquam. Etiam nec luctus risus.</p>
                            </div>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <button type="button" className="btn btn-success btn-sm">Enviar</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Worker;