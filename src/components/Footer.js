import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-danger mt-5">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/" className="btn btn-warning">Go somewhere</Link>
                </div>
                <div className="card-footer text-dark">
                    {new Date().toLocaleDateString()}
                </div>
            </div>
        </footer>
    )
}

export default Footer
