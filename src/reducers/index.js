import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({

  //este es el STATE que se usara como base en "weather_list.js"
  weather: WeatherReducer
});

export default rootReducer;
