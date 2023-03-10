import React, { useState } from 'react'

import Switch from '../Switch/Switch'

import './header.css'

const Header = () => {
    /*===========Change Background Header===========*/
    window.addEventListener("scroll", () => {
        const header = document.querySelector('.header')

        if(this.scrollY>=80) {
            header.classList.add('scroll-header')
        }else {
            header.classList.remove('scroll-header')
        }
    })

    /*===========Toggle Menu===========*/
    const [showMenu, setShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')
    
    return (
        <header className="header">
            <nav className="nav container">
                <div className='nav__logo-container'>
                    <a href="index.html" className="nav__logo">Miguel Garcia</a>
                    <Switch />
                </div>

                <div className={showMenu?'nav__menu show-menu':'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav==='#home'?'nav__link active__link':'nav__link'}>
                                <i className="uil uil-home nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about'?'nav__link active__link':'nav__link'}>
                                <i className="uil uil-user nav__icon"></i>Acerca de
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav==='#skills'?'nav__link active__link':'nav__link'}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav==='#portfolio'?'nav__link active__link':'nav__link'}>
                                <i className="uil uil-scenery nav__icon"></i>Portafolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'?'nav__link active__link':'nav__link'}>
                                <i className="uil uil-message nav__icon"></i>Contacto
                            </a>
                        </li>
                    </ul>

                    <i class='uil uil-times nav__close' onClick={() => setShowMenu(!showMenu)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
                    <i class='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header