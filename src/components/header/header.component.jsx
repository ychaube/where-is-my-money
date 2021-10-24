import React from 'react'
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <nav className="header__container">
            <div className="container">
                <Link to="/" className="link--home">Where's my money?</Link>
            </div>
        </nav>
    )
}

export default Header;
