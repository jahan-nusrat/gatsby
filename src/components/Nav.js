import { Link } from 'gatsby'
import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <Link className="navbar-brand text-danger" to="/"><h1>Logo</h1></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link text-danger" to="/">Home</Link>
                    <Link className="nav-link text-danger" to="/blog">Blog</Link>
                    <Link className="nav-link text-danger" to="/product">Product</Link>
                    <Link className="nav-link text-danger" to="/example">Example</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
