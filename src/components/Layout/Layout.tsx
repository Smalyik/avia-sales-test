import React from 'react';
import '../../styles/global.styl'
import logo from '../../images/logo.svg';

const Layout: React.FC = ({children}) => {

    return (
        <>
            <header className="header">
                <img src={logo} alt="" />
            </header>
            {children}
        </>
    )
}

export default Layout;