import React from 'react';
import { withRedux } from '../../lib/redux';
import { Link } from 'react-router-dom';
import s from './MainPage.module.styl';

interface Props {}

const FlightsBoard: React.FC<Props> = props => {
	console.log(props);
	return (
		<div className={s.linkWrapper}>
			<Link className={s.link} to="/flights">К рейсам</Link>
		</div>
	);
};

export default withRedux(FlightsBoard);
