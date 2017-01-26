import { FETCH_WEATHER } from '../actions/index';


//se crea un "Array de objetos" VACIO para llenar luego el "STATE":
export default function(state = [], action){

	switch (action.type){
		case FETCH_WEATHER:

		//aqui se llenan la Lista de Objetos dentro del Array que esta vacio, sin "MUTAR" el state:
		return [action.payload.data, ...state];
	}

	return state;
}