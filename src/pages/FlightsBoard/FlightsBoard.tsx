import React from 'react';
import { withRedux } from '../../lib/redux';
import { flights as flightsSelector } from '../../lib/store/flightsInfo/selectors';
import { useSelector } from 'react-redux';
import { State } from '../../types/types';

interface Props {
	flights: string[];
}

const FlightsBoard: React.FC<Props> = props => {
	const flights = useSelector((state: State) => flightsSelector(state));
	console.log(props);

	return (
		<div>
			{flights?.map((flight: string, index: number) => {
				return <div key={index}>{flight}</div>;
			})}
		</div>
	);
};

export default withRedux(FlightsBoard);
