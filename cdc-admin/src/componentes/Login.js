import React, { Component } from "react";
import '../css/login.css';
import { NavLink } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center align-items-center" >
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <form action="" autocomplete="off">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="username" placeholder="Nome" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" placeholder="Senha" />
                                        </div>
                                        <div className="espacamento">
                                            <NavLink to="/">
                                                <button type="button" id="sendlogin" className="btn btn-primary">login</button>
                                            </NavLink>
                                            <NavLink to="/">

                                                <button type="button" id="sendlogin" className="btn btn-primary">Voltar</button>
                                            </NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;