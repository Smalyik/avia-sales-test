import FlightsBoard from './pages/FlightsBoard';

type Props = any

interface IRoute {
    component: React.FC<Props>,
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