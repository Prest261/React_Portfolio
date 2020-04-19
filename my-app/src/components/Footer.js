import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <div id="footerContainer">
            <MDBFooter className="footer">
                <MDBContainer fluid className="text-center text-md-center">
                    <MDBRow>
                        <MDBCol md="6" className="profLinks">
                            <h5 className="title">Contact:</h5>
                            <p>
                                Phone: 919-830-4428
                                <br></br>
                                Email: prest261@umn.edu
                            </p>
                        </MDBCol>
                        <MDBCol md="6" className="profLinks">
                            <h5 className="title">Links:</h5>
                            <ul id="linkList">
                                <li className="list-unstyled">
                                    <a href="https://www.linkedin.com/in/sydney-preston-178ab3124/" class="Links"
                                        target="_blank">Linkedin Profile</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://github.com/Prest261" class="Links" target="_blank">GitHub Profile</a>
                                </li>

                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid id="copyright">
                        &copy; {new Date().getFullYear()} Copyright: Sydney Preston
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;