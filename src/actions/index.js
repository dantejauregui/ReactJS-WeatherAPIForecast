import axios from 'axios'; 

const API_KEY = "8bed2c492173f1d9875eeed01eaaefeb";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; 

//creando un ActionCreator que sera responsable de hacer el FETCHing:
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return{
		type: FETCH_WEATHER,

		//como tiene un PROMISE dentro del PAYLOAD automaticamente se ejecuta REDUX-PROMISE (notar que la variable REQUEST es un ARRAY de Objetos):
		payload: request,
	};
}