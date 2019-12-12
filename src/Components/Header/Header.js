import React from 'react';
import './Header.scss';
import CallToAction from './CallAction/CallAction';
import Navbars from './Navbars/Navbars';

const Header = () => {
    return (
        <header className="page-header">
            <Navbars />
            <CallToAction />
        </header>
    );
}

export default Header;