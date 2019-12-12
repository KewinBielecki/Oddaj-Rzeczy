import React from 'react';
import './Navbars.scss';
import ScrollIntoView from 'react-scroll-into-view';


const Navbars = () => {
    return (
        <div>
            <div className="page-header-login">
                <ul>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">Zaloguj</a></li>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">Załóż konto</a></li>
                </ul>
            </div>
            <nav className="page-header-menu">
                <ul>
                    <li><ScrollIntoView
                        selector='#stats'
                        smooth={true}
                        alignToTop={true}
                    >
                        Start
                    </ScrollIntoView></li>
                    <li><ScrollIntoView
                        selector='#steps'
                        smooth={true}
                        alignToTop={true}
                    >
                        O co chodzi?
                    </ScrollIntoView></li>
                    <li><ScrollIntoView
                        selector='#aboutUs'
                        smooth={true}
                        alignToTop={true}
                    >
                        O nas
                    </ScrollIntoView></li>
                    <li><ScrollIntoView
                        selector='#foundations'
                        smooth={true}
                        alignToTop={true}
                    >
                        Fundacje i organizacje
                    </ScrollIntoView></li>
                    <li><ScrollIntoView
                        selector='#contact'
                        smooth={true}
                        alignToTop={true}
                    >
                        Kontakt
                    </ScrollIntoView></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbars;
