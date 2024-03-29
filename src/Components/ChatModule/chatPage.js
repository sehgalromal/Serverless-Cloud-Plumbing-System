import React, { Component } from 'react';
import ChatWindow from './chatWindow';
import { BrowserRouter as Router,Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
class chatPage extends Component{
    render(){
        return(
            <div id="main-container">
                <section id="product-overview"></section>
                <section>
                    <h2 className="cards__section-heading">Our Services</h2>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <Link to='/onlinesupportpage'>
                                <article className="image-container">
                                    <img style={{ borderRadius: '8px' }} src={require("../../assets/card-image.jpg")} width="300" height="300" alt="Halifax"></img>
                                    <h4 className="image-centered">Online Support Service</h4>
                                </article>
                                </Link>  
                            </MDBCol>
                            <MDBCol md="6">
                                <Link to='/DataProcessing'>
                                <article className="image-container">
                                    <img style={{ borderRadius: '8px' }} src={require("../../assets/card-image.jpg")} width="300" height="300" alt="Halifax"></img>
                                    <h4 className="image-centered">Data Processing Service</h4>
                                </article> 
                                </Link> 
                            </MDBCol>
                        </MDBRow>
                        <br></br>
                        <MDBRow>
                            <MDBCol md="6">
                                <Link to='/chatservice'>
                                <article className="image-container">
                                    <img style={{ borderRadius: '8px' }} src={require("../../assets/card-image.jpg")} width="300" height="300"alt="Halifax"></img>
                                    <h4 className="image-centered">Real Time Chat Service</h4>
                                </article>  
                                </Link>
                            </MDBCol>
                            <MDBCol md="6">
                                <Link to='/predictionService'>
                                <article className="image-container">
                                    <img style={{ borderRadius: '8px' }} src={require("../../assets/card-image.jpg")} width="300" height="300" alt="Halifax"></img>
                                    <h4 className="image-centered">Prediction Service</h4>
                                </article>
                                </Link>  
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <div style = {{bottom: '0px',zIndex: '1', right: '0px', position: 'fixed' }}>
                    <ChatWindow></ChatWindow>
                    
                </div>
                {/* <div className="jumbotron mt-5">
                    <div className="col-sm-8-mx-auto">
                        <h1 className="text-center">Welcome to Serverless Cloud Plumbing System</h1>
                    </div> */}
            </div>
        )
    }
    
}

export default chatPage;