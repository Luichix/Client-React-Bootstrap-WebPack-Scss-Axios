import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import cohete from './../../assets/rocket.svg'
function Navbar () {
  return (
      <nav className='grid-navbar' >
        <Container >
          <Row>
            <Col className="col-navbar">
             <img
              src={cohete}
              width='250px'
              heigth='250px'
              />
          </Col>
          <Col>
          <h1>
              <b>¿Quieres facilitar tu trabajo?</b>
              </h1>
            <p>
              Puedes lograrlo con nuestro <b>Sistema de Nomina</b>
            </p>

            <Button className="btn">
              <b>Contactar</b>
            </Button>

          </Col>
          </Row>

        </Container>
    </nav>
  )
}

export default Navbar
