import React from 'react';
import '../../styles/global.styl'
import logo from '../../images/logo.svg';

type Props = any;

const Layout: React.FC<Props> = props => {
    const { children } = props;

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