import React, { Fragment, useState, useEffect } from 'react'
import Header from '../Header/Header'
import '../Estylos/style.css'
import firebase from '../firebase'

let carrito = [];
let subtotal = 0;

export default function Pedidos() {
    // console.log(subtotal);
    
    const [productos, setProductos] = useState([])
    const [proSelec, setproSelec] = useState('')
    const [precioSelec, setprecioSelec] = useState('')
    const [cantSelec, setcantSelect] = useState('')
    const [totalProductos, setTotalProductos] = useState([])

    useEffect(() => {
        setTotalProductos({
            nombreProducto: proSelec,
            precioProducto: precioSelec,
            cantidadProducto: cantSelec
        })
    }, [cantSelec])

    useEffect(() => {
        firebase.listaProductos().then((snapshot) => {
            setProductos(snapshot.docs)
        });
    }, [productos])

    return (
        <Fragment>
            <Header />
            <div className="container pb-5">
                <div className="row">
                    <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Seleccione la cantidad en kilos</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={e => e.preventDefault() && false}>
                                        <div className="form-group">
                                            <input type="text" autoFocus className="form-control" placeholder="ejemplo: 2.5 kg" value={cantSelec} onChange={e => setcantSelect(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                                            carrito.push(totalProductos)
                                            setcantSelect('')
                                        }}>Aceptar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="modal fade" id="carritoCompras" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Carrito de compras</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Cant</th>
                                                <th scope="col">Precio</th>
                                                <th scope="col">X</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                carrito.map((elementos, llave) => (
                                                    
                                                    
                                                    <tr key={llave}>
                                                        {/* <th scope="row">{llave + 1}</th> */}
                                                        <td>{elementos.nombreProducto}</td>
                                                        <td>{elementos.cantidadProducto} kg</td>
                                                        <td>S/{(elementos.precioProducto * elementos.cantidadProducto).toFixed(2)}</td>
                                                        <td><button className="btn btn-danger" onClick={() => {
                                                            carrito.splice(llave, 1)
                                                        }}>x</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                {/* <td> </td> */}
                                                <td><button className="btn btn-primary shadow" onClick={total}>Total</button></td>
                                                <td>
                                                    {
                                                        subtotal.toFixed(2)
                                                    }
                                                </td>
                                                <td> </td>
                                                <td> </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <button type="button" className="btn btn-success" onClick={mandarPedido} data-dismiss="modal">Realizar compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="card-columns productos">
                            {
                                productos.map(element => (
                                    <div className="card shadow frutas" key={element.id}>
                                        <img src={element.data().imagen} className="card-img-top" alt="imagen" />
                                        <div className="card-body">
                                            <h6 className="card-title" style={{ fontSize: '0.8em', marginRight: '0px', marginLeft: '0px' }}>{element.data().nombre} - <small className="text-muted"> {element.data().precio}</small></h6>
                                            <button type="button" className="btn btn-primary" style={{ fontSize: '0.8em' }} data-toggle="modal" data-target="#staticBackdrop" onClick={() => {
                                                setproSelec(element.data().nombre)
                                                setprecioSelec(element.data().precio)
                                            }}>comprar</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
    function mandarPedido() {
        try{
            firebase.crearPedido(carrito)
            setproSelec('')
            setprecioSelec('')
            setcantSelect('')
        }catch(error){
            alert(error.message)
        }
    }
    async function total(){
        await carrito.map(elem=>{
            subtotal=(elem.precioProducto*elem.cantidadProducto)+subtotal
        })
    }
}
