import React, { useEffect, useState } from 'react'
import { Container, Spinner, Button, Modal } from 'react-bootstrap'
import Recruitment from '../form/Recruitment'
import Service from './../../services/Service'
import BootstrapTable from 'react-bootstrap-table-next'
import PaginationFactory from 'react-bootstrap-table2-paginator'

const Staff = () => {
  const [modalShow, setModalShow] = useState(false)
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(false)

  const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShow}
        >
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter" >
              <b>Recruitment Form</b>
            </Modal.Title>
            <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
          </Modal.Header>
          <Modal.Body>
              <Recruitment/>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
    )
  }
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
    { dataField: 'id', text: 'Id', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'firstname', text: 'First Name', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'lastname', text: 'Last Name', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'card', text: 'Card', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'phone', text: 'Phone', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'typeContract', text: 'Type Contract', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'startContract', text: 'Start Contract', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'finishContract', text: 'Finish Contract', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'area', text: 'Area', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'job', text: 'Job', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'monthlySalary', text: 'Monthly Salary', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'regime', text: 'Regime', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'workday', text: 'Workday', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'timeControl', text: 'Time Control', align: 'center', headerAlign: 'center', sort: true },
    { dataField: 'paymentMethod', text: 'Payment Method', align: 'center', headerAlignr: 'center', sort: true }
  ]
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    bgColor: '#66CCFF'
  }

  const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
  }]

  const tableStaff = () => {
    return (
      <BootstrapTable
      keyField='id'
      data={staff}
      columns={columns}
      selectRow={selectRow}
      pagination={PaginationFactory()}
      hover
      condensed
      striped
      headerClasses = 'thead-dark'
      defaultSorted={ defaultSorted }
      classes= 'clase table-responsive'
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
    <Container className="p-4">
      <div className='pb-4'>
      <Button variant="primary" onClick={() => setModalShow(true)} className='p-4 font-weight-bold'>
        Recruitment Form
      </Button>
      </div>
        {loading ? tableStaff() : spinnerStaff() }
      {
        modalShow
          ? <MyVerticallyCenteredModal
              show={modalShow}
            />
          : <MyVerticallyCenteredModal
              show='false'
            />
      }
      </Container>
  )
}

export default Staff
