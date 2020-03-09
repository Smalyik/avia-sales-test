/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

interface IState {
    appForm: {
        isFormAreaOpen: boolean,
        isModalOpen: boolean,
        isSentSuccesfully: boolean,
    },
}

export const appForm = (state: IState) => state.appForm;

export const isAreaOpen = createSelector([appForm], appForm => appForm.isFormAreaOpen);

export const isModalOpen = createSelector([appForm], appForm => appForm.isModalOpen);

export const isSentSuccesfully = createSelector([appForm], appForm => appForm.isSentSuccesfully);
