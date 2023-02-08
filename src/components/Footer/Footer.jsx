import React from 'react'

import './footer.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Miguel Garcia</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Acerca de</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projectos</a>
                    </li>

                    <li>
                        <a href="https://github.com/fernandog197/portfolio" target='_blank' className="footer__link">Repositorio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/fernandog197" className="footer__social-link" target='_blank'>
                        <i class='bx bxl-github'></i>
                    </a>

                    <a href="https://www.linkedin.com/in/miguel-fernando-garcia-1b1670186/" className="footer__social-link" target='_blank'>
                        <i class='bx bxl-linkedin'></i>
                    </a>

                    <a href="https://twitter.com/MiguelF33016837" className="footer__social-link" target='_blank'>
                        <i class='bx bxl-twitter'></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Miguel Garcia. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer