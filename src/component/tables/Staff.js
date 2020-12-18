/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Container, Spinner, Button, Modal } from 'react-bootstrap'
import Recruitment from '../form/Recruitment'
import Service from './../../services/Service'
import BootstrapTable from 'react-bootstrap-table-next'
import PaginationFactory from 'react-bootstrap-table2-paginator'

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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    try {
      Service.getAll().then(res => {
        setStaff(res.data)
        setLoading(true)
        console.log(res.data)
      })
    } catch (e) {
      console.log(e)
    }
  }
  const columns = [
    { dataField: 'id', text: 'Id', align: 'center', headerAlign: 'center' },
    { dataField: 'firstname', text: 'First Name', align: 'center', headerAlign: 'center' },
    { dataField: 'lastname', text: 'Last Name', align: 'center', headerAlign: 'center' },
    { dataField: 'card', text: 'Card', align: 'center', headerAlign: 'center' },
    { dataField: 'phone', text: 'Phone', align: 'center', headerAlign: 'center' },
    { dataField: 'typeContract', text: 'Type Contract', align: 'center', headerAlign: 'center' },
    { dataField: 'startContract', text: 'Start Contract', align: 'center', headerAlign: 'center' },
    { dataField: 'finishContract', text: 'Finish Contract', align: 'center', headerAlign: 'center' },
    { dataField: 'area', text: 'Area', align: 'center', headerAlign: 'center' },
    { dataField: 'job', text: 'Job', align: 'center', headerAlign: 'center' },
    { dataField: 'monthlySalary', text: 'Monthly Salary', align: 'center', headerAlign: 'center' },
    { dataField: 'regime', text: 'Regime', align: 'center', headerAlign: 'center' },
    { dataField: 'workday', text: 'Workday', align: 'center', headerAlign: 'center' },
    { dataField: 'timeControl', text: 'Time Control', align: 'center', headerAlign: 'center' },
    { dataField: 'paymentMethod', text: 'Payment Method', align: 'center', headerAlign: 'center' }
  ]
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: '#00BFFF'
  }

  const tableStaff = () => {
    return (
      <BootstrapTable
      keyField='id'
      data={staff}
      columns={columns}
      selectRow={selectRow}
      pagination={PaginationFactory()}
      striped
      hover
      condensed
    />
    )
  }
  const spinnerStaff = () => {
    return (
      <Spinner
        animation= "border"
      />
    )
  }

  return (
    <Container className="p-4 col-md-4">

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Recruitment Form
      </Button>

      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        {
        loading ? tableStaff() : spinnerStaff() }
    </Container>
  )
}

export default Staff
