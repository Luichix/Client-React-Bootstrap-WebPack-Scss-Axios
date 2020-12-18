import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar from '../component/navigation/Navbar'
import Footer from '../component/navigation/Footer'
import Staff from '../component/tables/Staff'

function Dashboard () {
  return (
        <div className="sb-nav-fixed">
            <Router>
                <NavBar />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_content">
                        <Switch>
                        <Route path='/staff' component={Staff} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
  )
}

export default Dashboard
