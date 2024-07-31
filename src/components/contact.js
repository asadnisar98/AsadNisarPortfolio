import React from 'react'
import { ReactComponent as Up } from '../images/up.svg'

const Contact = ({ onCursor }) => {
    return (
        <>
            <footer id="contact" className="footer container maxwidth">
                <h1>Get </h1>
                <h1 className="footer__second">in touch</h1>
                <div className="footer__inner">
                    <a className="top" href="#hero"
                        onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}
                    >BACK TO TOP
                        <Up />
                    </a>
                    <div className="social">
                        <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}
                            className="email" href="mailto:asadnisar98@gmail.com">asadnisar98@gmail.com</a>
                        <div className="social__icons">
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/asad-nisar-98/">Linkedin</a>
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://twitter.com/AsadSarwani">Twitter</a>
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://github.com/asadnisar98">Github</a>
                        </div>
                    </div>
                </div>
                <p>AN 2024. all rights reserved</p>
            </footer>
        </>
    )
}

export default Contact
