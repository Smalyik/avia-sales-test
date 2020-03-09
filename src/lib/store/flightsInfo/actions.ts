import axios from 'axios';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ITicket } from '../../../types/types';

interface ITicketsResponse {
	tickets: Array<ITicket>;
	stop: boolean;
}

export const ActionTypes = {
	GET_FLIGHTS: 'flights/get-flights',
	ADD_FLIGHTS: 'flights/add-flights',
};

export const getFlights = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
	return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
		try {
			const searchId: string = (await axios('https://front-test.beta.aviasales.ru/search')).data.searchId;
			const ticketsResponse: ITicketsResponse = (
				await axios.get('https://front-test.beta.aviasales.ru/tickets', {
					params: {
						searchId,
					},
				})
			).data;
			const tickets: Array<ITicket> = ticketsResponse.tickets;
			let stopCounter = ticketsResponse.stop;
			while (!stopCounter) {
				const data: ITicketsResponse = (
					await axios.get('https://front-test.beta.aviasales.ru/tickets', {
						params: {
							searchId,
						},
					})
				).data;
				tickets.push(...data.tickets);
				stopCounter = data.stop;
				console.log(stopCounter);
			}
			dispatch(addFlights(tickets));
		} catch (e) {
			if (e.response.status === 500) {
				dispatch(getFlights());
			}
		}
	};
};

export const addFlights = (tickets: Array<ITicket>): AnyAction => ({
	type: ActionTypes.ADD_FLIGHTS,
	payload: {
		...tickets,
	},
});
