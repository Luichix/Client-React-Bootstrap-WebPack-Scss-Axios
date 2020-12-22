import React from 'react'
import SlideCard from '../complement/carousel'
import Card from '../complement/card'
import { Container } from 'react-bootstrap'

function Main () {
  return (
    <article className='main' >
    <Container className='grid-main'>
      <Card/>
            <SlideCard />
      <Card/>
    </Container>
    </article>
  )
}

export default Main
