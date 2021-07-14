import {combineReducers} from 'redux';
import {reducer} from './reducer';
import {liked} from './liked';
import {downloads} from './downloads';
import {watchlist} from './watchlist';
export default combineReducers({
  reducer,
  liked,
  downloads, //
  watchlist,
});
