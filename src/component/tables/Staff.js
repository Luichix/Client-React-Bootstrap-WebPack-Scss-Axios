/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Container, Table, Button, Modal } from 'react-bootstrap'
import Recruitment from '../form/Recruitment'

function MyVerticallyCenteredModal (props) {
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter" >
            <b>Recruitment Form</b>
          </Modal.Title>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Header>
        <Modal.Body>
            <Recruitment/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
  )
}

const animeflv = [
  { id: 1, personaje: 'Naruto', anime: 'Naruto' },
  { id: 2, personaje: 'Goku', anime: 'Dragon Ball' }
]

const Staff = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Container className="p-4 col-md-10">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Personaje</th>
      <th>Anime</th>
    </tr>
  </thead>
  <tbody>
    {animeflv.map((elemento) => (
      <tr key={elemento.id} >
        <td>{elemento.id}</td>
        <td>{elemento.personaje}</td>
        <td>{elemento.anime}</td>
      </tr>
    ))}

  </tbody>
</Table>
    <Button variant="primary" onClick={() => setModalShow(true)}>
        Recruitment Form
    </Button>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
}

export default Staff
