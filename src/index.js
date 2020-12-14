import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './scss/styles.scss'
import './assets/logo.png'
import App from './App.js'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    window.document.getElementById('app')
)
