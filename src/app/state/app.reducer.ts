import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { AppPageActions } from './actions';
import { IState } from './app.state';

export default interface IInitialReducersState {
    cards: IState,
}

const initialState: IState = {
    dolorContent: null,
    ipsumContent: null,
    leromContent: null
};

export const appReducer = createReducer<IState>(
    initialState,
    /**
    * Reducer for setting company data to store
    */
    on(AppPageActions.updateCardContent, (state, action): IState => {
        return {
            ...state,
            dolorContent: action.dolorContent,
            ipsumContent: action.ipsumContent,
            leromContent: action.leromContent
        };
    })
)

export const reducers: ActionReducerMap<IInitialReducersState> = {
    cards: appReducer
};




