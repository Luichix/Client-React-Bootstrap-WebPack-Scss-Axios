/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Modal } from 'react-bootstrap'
import Recruitment from '../form/Recruitment'
import Service from './../../services/Service'

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

const Staff = () => {
  const [modalShow, setModalShow] = useState(false)
  const [staff, setStaff] = useState([])

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    Service.getAll().then(res => {
      setStaff(res.data)
      console.log(res.data)
    })
  }

  return (
    <Container className="p-4 col-md-10">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Lastname</th>
      <th>Firstname</th>
      <th>Card</th>
      <th>Phone</th>
      <th>Type Contract</th>
      <th>Start Contract</th>
      <th>Finish Contract</th>
      <th>Area</th>
      <th>Job</th>
      <th>Monthly Salary</th>
      <th>Regime</th>
      <th>Work Day</th>
      <th>Time Control</th>
      <th>Payment Method</th>
      <th>Published</th>
    </tr>
  </thead>
  <tbody>
    {staff.map((elemento) => (
      <tr key={elemento.id} >
        <td>{elemento.id}</td>
        <td>{elemento.lastname}</td>
        <td>{elemento.firstname}</td>
        <td>{elemento.card}</td>
        <td>{elemento.phone}</td>
        <td>{elemento.typeContract}</td>
        <td>{elemento.startContract}</td>
        <td>{elemento.finishContract}</td>
        <td>{elemento.area}</td>
        <td>{elemento.job}</td>
        <td>{elemento.monthlySalary}</td>
        <td>{elemento.regime}</td>
        <td>{elemento.workday}</td>
        <td>{elemento.timeControl}</td>
        <td>{elemento.paymentMethod}</td>
        <td>{elemento.published}</td>
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
