import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const homePage = () => {
    return(
        <>
        <div>
            Endereço + telefone
        </div>
            <section>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3>CLAUDIELLI POZZI MENEGARDO <br />
                        ADVOGADA E CONSULTORA JURÍDICA
                        </h3>
                        <p>Especialista em ações trabalhistas</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>ÁREAS DE ATUAÇÃO</h3>
                        <div>
                            <p>Área 1</p>
                            <p>Área 2</p>
                            <p>Área 3</p>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section>
                <h3>ATENDIMENTOS</h3>
                <div>
                    <div>
                        <Link to="/login" style={{ textDecoration: 'none' }}>PRESENCIAL</Link>
                    </div>
                    <div>
                        <Link to="/login" style={{ textDecoration: 'none' }}>ONLINE</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default homePage;