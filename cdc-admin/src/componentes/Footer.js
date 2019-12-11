import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';


const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Logo</h5>
            <p>
              Aqui tem de tudo 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Riad</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">introducao</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">conteudo</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">vantagens</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">premios</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Direitos autorais.<a href="/"> logo</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;