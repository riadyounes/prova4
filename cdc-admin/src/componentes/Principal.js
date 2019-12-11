import React, { Component } from 'react';
import Header from './Header';
import Conteudo1 from './Conteudo1';
import FooterPage from './Footer';

class Principal extends Component {
    render() {
        return (
            <>
                <Header />
                <Conteudo1 />
                <FooterPage />
            </>
        );
    }
}

export default Principal