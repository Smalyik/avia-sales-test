import FlightsBoard from './pages/FlightsBoard';

interface IRoute {
    component: React.ElementType,
    name: string,
    path: string,
}

interface IRoutes extends Array<IRoute> { }

export const routes: IRoutes = [
    {
        component: FlightsBoard,
        name: 'Полеты',
        path: '/flights',
    }
]