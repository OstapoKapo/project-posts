import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">

            <p > All copyright by Creator{year}</p>

        </footer>
    )
}

export default Footer