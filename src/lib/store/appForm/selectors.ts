/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const appForm = state => state.appForm;

export const isAreaOpen = createSelector([appForm], appForm => appForm.isFormAreaOpen);

export const isModalOpen = createSelector([appForm], appForm => appForm.isModalOpen);

export const isSentSuccesfully = createSelector([appForm], appForm => appForm.isSentSuccesfully);
