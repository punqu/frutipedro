import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">FRUTICIO</NavLink>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login"><span role="img" aria-label="string">🍇</span></NavLink>
                </li>
            </ul>
            <div>
                <button type="button" className="btn btn-primary" style={{ fontSize: '0.8em' }} data-toggle="modal" data-target="#carritoCompras"><ShoppingCartIcon /></button>
            </div>
        </nav>
    )
}
