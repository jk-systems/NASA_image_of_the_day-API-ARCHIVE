import React from 'react'
import { Container, Card } from 'react-bootstrap'

const Cardd = (props) => {
    return (
      <Container className='mp-3' >
        <div></div>
        <div>
        <Card bg="dark" border="info" text="light">
            <Card.Img variant="top" src={props.url} className='card-image'/>
            <Card.Header>Copyright : {props.copy} <span> </span>
            </Card.Header>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className='h6 sm'>{props.explanation}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated {props.date}</small>
              </Card.Footer >
          </Card>
        </div>
      </Container>
    )
}

export default Cardd