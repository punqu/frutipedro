import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">FRUTICIO</NavLink>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login"><span role="img" aria-label="string">🍇</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}
