import React, { useState, useEffect } from 'react'
import firebase from '../firebase';
import { NavLink } from 'react-router-dom';

export default function Productos(props) {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        firebase.listaProductos().then((snapshot) => {
            setProd(snapshot.docs)
        });
    }, [prod])

    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [imagen, setImagen] = useState('');
    const [precio, setPrecio] = useState('');
    const [borrar, setBorrar] = useState('');
    
    useEffect(()=>{
        if(borrar){
            firebase.eliminarProducto(borrar)
        }
    },[borrar])

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
            <div className="row mt-5">
                <div className="col-md-12">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre de Producto</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prod.map(doc => (
                                    <tr key={doc.id}>
                                        <th scope="row">{doc.id}</th>
                                        <td>{doc.data().nombre}</td>
                                        <td>{doc.data().imagen}</td>
                                        <td>{doc.data().precio}</td>
                                        <td><button className="btn btn-danger" onClick={() => setBorrar(doc.id)}>X</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><input type="text" placeholder="Id" aria-label="Id" size="3" value={id} onChange={e => setId(e.target.value)}/></td>
                                <td><input type="text" className="form-control" placeholder="Nombre producto" aria-label="Nombre" aria-describedby="basic-addon1" value={nombre} onChange={e => setNombre(e.target.value)} /></td>
                                <td><input type="text" className="form-control" placeholder="Ruta de la imagen" aria-label="Imagen" aria-describedby="basic-addon1" value={imagen} onChange={e => setImagen(e.target.value)} /></td>
                                <td><input type="text" className="form-control" placeholder="Precio" aria-label="Precio" aria-describedby="basic-addon1" value={precio} onChange={e => setPrecio(e.target.value)} /></td>
                                <td><button className="btn btn-success" type="submit" onClick={crearProd}>+</button></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
    function crearProd() {
        try {
            firebase.crearProducto(id, nombre, imagen, precio)
            props.history.replace('/productos')
            setId('')
            setNombre('')
            setImagen('')
            setPrecio('')
        } catch (error) {
            alert(error.message)
        }
    }
}