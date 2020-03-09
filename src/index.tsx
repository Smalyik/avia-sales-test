import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Layout from './components/Layout';

const App = () => {
	return (
		<Layout>
			<Router>
				<Switch>
					{routes.map(route => {
						return (
							<Route key={route.name} path={route.path} exact>
								<route.component />
							</Route>
						);
					})}
				</Switch>
			</Router>
		</Layout>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
