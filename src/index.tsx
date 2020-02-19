import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.styl'
import logo from './logo.svg';

const App = () => {
	return (
		<header className="header">
			<img src={logo} alt=""/>
		</header>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
