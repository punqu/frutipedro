import React from 'react'

export default function Productos(props) {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre de Producto</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Aguaymanto</td>
                                <td>https://cdn.pixabay.com/photo/2017/12/27/18/02/cape-gooseberry-3043259_960_720.jpg</td>
                                <td>10.60</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
