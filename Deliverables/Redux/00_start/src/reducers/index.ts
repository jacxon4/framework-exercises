import {combineReducers} from 'redux';
import {memberReducer, memberState} from './memberReducer';
import {filterReducer} from "./filterReducer";


export interface State {
    memberReducer: memberState;
    filterReducer: string;
}

export const reducers = combineReducers<State>({
    memberReducer,
    filterReducer
});
