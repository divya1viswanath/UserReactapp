import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <Link class="navbar-brand" to={'/view'}>USERAPP </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link active" to='/'>ADD USER</Link>
                    <Link class="nav-link active" to='/search' >SEARCH USER</Link>
                    <Link class="nav-link active" to='/view' >VIEW USER</Link>
                    <Link class="nav-link active" to='/todo' >VIEW USER</Link>
                </div>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Header