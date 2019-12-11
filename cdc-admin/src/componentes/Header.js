import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <>
            <div className="container-header">
                <h1>Logo</h1>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#">SOBRE NÓS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PRÊMIOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Login">LOGIN</a>
                    </li>
                </ul>
                </div>
            </>
        );
    }
}

export default Header;