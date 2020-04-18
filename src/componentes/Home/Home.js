import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import desktopImage from '../img/supermarket.jpg'
import mobileImage from '../img/mobil.jpg'
import '../Estylos/style.css'
import Header from '../Header/Header';

const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

export default function Home() {
    return (
        <Fragment>
            <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
                <Header/>
                <div className="hola">
                    <Link className="btn btn-primary" to="/compras">HACER UN PEDIDO</Link>
                </div>
            </div>
        </Fragment>
    )
}
