/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import Service from '../../services/service'
import { Form, Button, Col, Container } from 'react-bootstrap'

const Recruitment = () => {
  const initialDataState = {
    id: null,
    lastname: '',
    firstname: '',
    card: '',
    phone: '',
    typeContract: '',

    area: '',
    job: '',
    monthlySalary: '',
    regime: '',
    workday: '',
    timeControl: '',
    paymentMethod: '',
    published: false
  }
  const [Data, setData] = useState(initialDataState)
  const [validated, setValidated] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target
    setData({ ...Data, [name]: value })
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    saveData()
  }

  const saveData = () => {
    const data = {
      lastname: Data.lastname,
      firstname: Data.firstname,
      card: Data.card,
      phone: Data.phone,
      typeContract: Data.typeContract,
      startContract: Data.startContract,
      finishContract: Data.finishContract,
      area: Data.area,
      job: Data.job,
      monthlySalary: Data.monthlySalary,
      regime: Data.regime,
      workday: Data.workday,
      timeControl: Data.timeControl,
      paymentMethod: Data.paymentMethod
    }
    console.log(data.startContrat)

    Service.create(data).then(response => {
      setData({
        id: response.data.id,
        lastname: response.data.lastname,
        firstname: response.data.firstname,
        card: response.data.card,
        phone: response.data.phone,
        typeContract: response.data.typeContract,
        startContract: response.data.startContract,
        finishContract: response.data.finishContract,
        area: response.data.area,
        job: response.data.job,
        monthlySalary: response.data.monthlySalary,
        regime: response.data.regime,
        workday: response.data.workday,
        timeControl: response.data.timeControl,
        paymentMethod: response.data.paymentMethod,
        published: response.data.published
      })
      console.log(response.data)
    })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <Container >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as ={Col} md="6" controlId="lastname" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  value={Data.lastname}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as ={Col} md="6" controlId="firstname" >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  value={Data.firstname}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as ={Col} md="6" controlId="card" >
                <Form.Label>Identification Card</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Identification card"
                  name="card"
                  value={Data.card}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as ={Col} md="6" controlId="phone" >
                <Form.Label>Number Phone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Number phone"
                  name="phone"
                  value={Data.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="4" controlId="typeContract" >
                <Form.Label>Type Contract</Form.Label>
                <Form.Control as="select"
                  required
                  type="text"
                  value={Data.typeContract}
                  onChange={handleInputChange}
                >
                  <option>Default Select</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="startContract" >
                <Form.Label>Start Contract</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Start contract"
                  value={Data.startContract}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="finishContract" >
                <Form.Label>Finish Contract</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Finish contract"
                  value={Data.finishContract}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="6" controlId="area" >
                <Form.Label>Area</Form.Label>
                <Form.Control as="select"
                  required
                  type="text"
                  value={Data.area}
                  onChange={handleInputChange}
                >
                  <option>Default Select</option>
                </Form.Control>
              </Form.Group>
            <Form.Group as={Col} md="6" controlId="job" >
                <Form.Label>Job</Form.Label>
                <Form.Control as="select"
                  required
                  type="text"
                  value={Data.job}
                  onChange={handleInputChange}
                >
                  <option>Default Select</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="6" controlId="regime" >
                <Form.Label>Regime</Form.Label>
                <Form.Control as="select"
                  required
                  type="text"
                  value={Data.regime}
                  onChange={handleInputChange}
                >
                  <option>Default Select</option>
                </Form.Control>
              </Form.Group>
            <Form.Group as={Col} md="6" controlId="workday" >
                <Form.Label>Workday</Form.Label>
                <Form.Control as="select"
                  required
                  type="text"
                  value={Data.workday}
                  onChange={handleInputChange}
                >
                  <option>Default Select</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="6" controlId="paymentMethod" >
                <Form.Label>Payment Method</Form.Label>
                <Form.Control as="select"
                  required
                  type="text"
                  value={Data.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option>Default Select</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="4" controlId="timeControl">
                <Form.Label>Time Control</Form.Label>
                <Form.Check
                  type="switch"
                  name="timeControl"
                  label="Check for activate"
                />
                </Form.Group>
            </Form.Row>
            <Button variant="success" type="submit">Submit form</Button>
          </Form>

    </Container>
  )
}

export default Recruitment
