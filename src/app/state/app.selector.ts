import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './app.state';

const getAppState = createFeatureSelector<IState>('cards');

export const getDolorContent = createSelector(
    getAppState,
    (state) => {
        return state.dolorContent
    }
);

export const getIpsumContent = createSelector(
    getAppState,
    (state) => {
        return state.ipsumContent
    }
);

export const getLeromContent = createSelector(
    getAppState,
    (state) => {
        return state.leromContent;
    }
);
