import React from 'react';
import '../../globals.css';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <p > All copyright by Creator{year}</p>

        </footer>
    )
}

export default Footer