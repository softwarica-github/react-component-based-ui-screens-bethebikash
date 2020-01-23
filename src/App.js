import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import './style.css'

const Dashboard = () => {
  return(
    <div>This is from Dashboard Component</div>
  )
}

const Login = () => {
  return(
    <div>This is from Login Component</div>
  )
}

const Register = () => {
  return(
    <div>This is from Register Component</div>
  )
}

const About = () => {
  return(
    <div>This is from About Component</div>
  )
}

const Template = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>eRepair</h1>
          <NavLink to="/" exact>
            Dashboard
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/login">
            Login
          </NavLink>
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
