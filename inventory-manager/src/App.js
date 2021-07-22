import React, {useState, useEffect} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './App.css'
import Userlogin from './components/Userlogin'
import Usersignup from './components/Usersignup'
import Guardians from './components/Guardians'
import Items from './components/Items'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  const [users, setUsers] = useState({})
  const [guardians, setGuardians] = useState([])

  const fetchUsers = () => {
      fetch("http://localhost:9292/users")
          .then(res => res.json())
          .then(data => setUsers(data))
          // .then(data => console.log(data))
  }
  
  const fetchGuardians = () => {
      fetch(`https://localhost:9292/guardians`)
      .then(res => res.json())
      .then(data => setGuardians(data))
  }

  useEffect(() => {
      fetchUsers()
      fetchGuardians()
  }, [])

    return (
        <div>
            <Navbar bg="primary" variant="dark" className = 'navbar'>
                <Container>
                <Navbar.Brand href="/">Guardian Inventory Manager</Navbar.Brand>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route path = "/userlogin">
                        <Userlogin users = {users}/>
                    </Route>
                    <Route path="/usersignup">
                        <Usersignup />
                    </Route>
                    <Route path="/Guardians">
                        <Guardians guardians = {guardians}/>
                    </Route>
                    <Route path="/Items">
                        <Items />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App