import React from 'react'
import { NavLink } from 'react-router-dom'
import firebase from '../firebase'

export default function ListaPedidos(props) {

    if (!firebase.getCurrentUsername()) {
		alert('Please login first')
		props.history.replace('/login')
		return null
	}

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-12">
                    <NavLink className="btn btn-secondary mr-2" to="/lista-pedidos">Pedidos</NavLink>
                    <NavLink className="btn btn-secondary" to="/productos">Productos</NavLink>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="card-columns">
                        <div className="card">
                            <div className="card-header">
                                Cliente: Paolo Soncco
                        </div>
                            <div className="card-body">
                                <table className="table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Aguaymanto</td>
                                            <td>1kg</td>
                                            <td>10.60</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Arandano</td>
                                            <td>2kg</td>
                                            <td>26.40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Chirimoya</td>
                                            <td>1kg</td>
                                            <td>7.90</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                Total: S/ 50.00
                        </div>
                        </div>


                        <div className="card">
                            <div className="card-header">
                                Cliente: Paolo Soncco
                        </div>
                            <div className="card-body">
                                <table className="table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Aguaymanto</td>
                                            <td>1kg</td>
                                            <td>10.60</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Arandano</td>
                                            <td>2kg</td>
                                            <td>26.40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Chirimoya</td>
                                            <td>1kg</td>
                                            <td>7.90</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                Total: S/ 50.00
                        </div>
                        </div><div className="card">
                            <div className="card-header">
                                Cliente: Paolo Soncco
                        </div>
                            <div className="card-body">
                                <table className="table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Aguaymanto</td>
                                            <td>1kg</td>
                                            <td>10.60</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Arandano</td>
                                            <td>2kg</td>
                                            <td>26.40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Chirimoya</td>
                                            <td>1kg</td>
                                            <td>7.90</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                Total: S/ 50.00
                        </div>
                        </div><div className="card">
                            <div className="card-header">
                                Cliente: Paolo Soncco
                        </div>
                            <div className="card-body">
                                <table className="table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Aguaymanto</td>
                                            <td>1kg</td>
                                            <td>10.60</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Arandano</td>
                                            <td>2kg</td>
                                            <td>26.40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Chirimoya</td>
                                            <td>1kg</td>
                                            <td>7.90</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                Total: S/ 50.00
                        </div>
                        </div><div className="card">
                            <div className="card-header">
                                Cliente: Paolo Soncco
                        </div>
                            <div className="card-body">
                                <table className="table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Aguaymanto</td>
                                            <td>1kg</td>
                                            <td>10.60</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Arandano</td>
                                            <td>2kg</td>
                                            <td>26.40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Chirimoya</td>
                                            <td>1kg</td>
                                            <td>7.90</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                Total: S/ 50.00
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
