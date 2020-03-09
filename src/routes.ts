import FlightsBoard from './pages/FlightsBoard';
import MainPage from './pages/MainPage/MainPage';

interface IRoute {
	component: React.ElementType;
	name: string;
	path: string;
}

interface IRoutes extends Array<IRoute> {}

export const routes: IRoutes = [
	{
		component: MainPage,
		name: 'Главная',
		path: '/',
	},
	{
		component: FlightsBoard,
		name: 'Полеты',
		path: '/flights',
	},
];
