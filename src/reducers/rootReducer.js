import { combineReducers } from 'redux';
import { favoriteReducer } from './favoriteReducer/reducer';

export const rootReducer = combineReducers({
    favoriteReducer
})