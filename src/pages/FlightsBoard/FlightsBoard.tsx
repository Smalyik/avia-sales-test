import React, { useEffect } from 'react';
import { withRedux } from '../../lib/redux';
import { flights as flightsSelector } from '../../lib/store/flightsInfo/selectors';
import { getFlights } from '../../lib/store/flightsInfo/actions';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../types/types';
import { ThunkDispatch } from 'redux-thunk';

interface Props {
	flights: string[];
}

const FlightsBoard: React.FC<Props> = props => {
	const flights = useSelector((state: State) => flightsSelector(state));
	console.log(props);
	const dispatch: ThunkDispatch<{}, {}, any> = useDispatch();

	useEffect(() => {
		dispatch(getFlights())
	}, [])

	return (
		<div>
			{flights?.map((flight: string, index: number) => {
				return <div key={index}>{flight}</div>;
			})}
		</div>
	);
};

export default withRedux(FlightsBoard);
