import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "../css/Navbar.css"
export const Navbar = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navcol">
  <div class="container-fluid connav">
    <a class="navbar-brand" href="#">HackerZone</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
      <form class="d-flex" role="search">
      
        <button onClick = {handleLogin} class="btn btn-outline-success" type="submit">{loggedIn ? "Sign out" : "Login"}</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
