import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './navigation/header'
import Footer from './navigation/footer'
import Main from './navigation/main'
import Navbar from './navigation/navbar'

function Home () {
  return (
        <div className="grid-container">
            <Router >
                <Header/>
                <Navbar/>
                <Main/>
                <Footer/>
            </Router>
        </div>
  )
}

export default Home
