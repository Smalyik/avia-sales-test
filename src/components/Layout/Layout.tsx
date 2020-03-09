import React from 'react';
import s from './Layout.module.styl';
import logo from '../../images/logo.svg';

const Layout: React.FC = ({ children }) => {
    console.log(s)
	return (
		<>
			<header className={s.header}>
				<img src={logo} alt="" />
			</header>
			{children}
		</>
	);
};

export default Layout;
