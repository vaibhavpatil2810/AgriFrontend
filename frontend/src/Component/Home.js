//import Carousel from 'Carousel'
import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <container>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img src='Images/home1.jpg' alt="home" height={550} width={600} class="d-block w-100" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Agricultre Rental Buisness</h5>
                                    <p>Farmers can take and give product on rent</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src='Images/home2.jpg' alt="home" height={550} width={600} class="d-block w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src='Images/home3.jpg' alt="home" height={550} width={600} class="d-block w-100" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

            </container>
        </div>
    )
}