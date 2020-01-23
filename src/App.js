import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import './style.css'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import About from './components/About/About'

const Template = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>eRepair</h1>
          <NavLink to="/" exact>
            Dashboard
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
        </header>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<Template />, document.getElementById('app'))
