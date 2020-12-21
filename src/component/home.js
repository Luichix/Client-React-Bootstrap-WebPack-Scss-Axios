import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar from './navigation/navbar'
import Footer from './navigation/footer'
import Staff from './tables/staff'
import Main from './complement/main'

function Home () {
  return (
        <div className="sb-nav-fixed">
            <Router>
                <NavBar />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_content">
                        <Switch>
                        <Route path='/staff' component={Staff} />
                        <Route path='/' exact component={Main} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
  )
}

export default Home
