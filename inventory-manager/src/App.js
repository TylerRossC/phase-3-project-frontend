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
  const [guardians, setGuardians] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchUsers = () => {
      fetch("http://localhost:9292/users")
          .then(res => res.json())
          .then(data => {
            setUsers(data)
            setLoading(false)
            })
          // .then(data => console.log(data))
  }
  
  const fetchGuardians = () => {
      fetch(`http://localhost:9292/guardians`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setGuardians(data)
        setLoading(false)
        })
  }

  useEffect(async() => {
      await fetchUsers()
      await fetchGuardians()
  }, [])

  if (loading){
    return (
      <div>
        ...loading
      </div>
    )
  }

    return (
        <div>
            <Navbar bg="primary" variant="dark" className = 'navbar'>
                <Container>
                <Navbar.Brand href="/">Guardian Inventory Manager</Navbar.Brand>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Usersignup />
                    </Route>
                    <Route exact path = "/userlogin">
                        <Userlogin users = {users}/>
                    </Route>
                    <Route exact path="/users/:id">
                        <Guardians guardians = {guardians} users = {users}/>
                    </Route>
                    <Route exact path="/Items">
                        <Items />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App