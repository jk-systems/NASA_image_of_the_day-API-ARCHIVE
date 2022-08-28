import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <Container>
        <Row >
            <Col >
            <div>
                <h1>
                    Image of the day NASA API
                </h1>
                <p>
                One of the most popular Imaging API from NASA is the Astronomy Picture of the Day. In fact, this is one of the most popular across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications.
                </p>
            </div>
            </Col>
         </Row>
    </Container>
  )
}

export default Banner