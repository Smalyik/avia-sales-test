/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { State } from '../../../types/types';

export const flightsInfo = (state: State) => state.flightsInfo;

export const flights = createSelector([flightsInfo], flightsInfo => flightsInfo.flights);
