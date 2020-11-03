import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'bootstrap';
import about_img from '../images/maestropizzini-aboutus-bg-1.jpg'


function About() {
    return (
        <div className='about'>
            <Container>
                <Row>
                    <Col>
                        <h3>About Us</h3>
                        <h1>WELCOME TO MAESTRO PIZZINI</h1>
                        <p>
                            Investigationes demonstraverunt lectores legere me lius
                            quod ii legunt saepius. Claritas est etiam processus dynaus,
                            quise sequitur mutationem consuetudium lectorum</p>
                        <button className='about_btn'>
                            <a href="">READ MORE</a>
                        </button>
                    </Col>
                    <Col className='about_img'>
                        <img src={about_img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;




