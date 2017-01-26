import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''}
	}



	onInputChange(event){
		this.setState({term: event.target.value});
	}


	onFormSubmit(event){
		event.preventDefault();


		//luego de "conectar" lineas abajo, ya podemos usar el "ActionCreator" como PROPs:
		this.props.fetchWeather(this.state.term);

		//luego de Fetch la data colocada en el INPUT, se asigna que el value del inputText desaparezca:
		this.setState({ term: ""});
	}


	render(){
		return(
			<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
				<input type="text" 
				       placeholder="select city to get the forecast" 
				       value={this.state.term}

				       //cuando se crea una funcion dentro de un evento disparador tipo "onClick" al final de la funcion se debe agregar ".bind(this)"
				       onChange={this.onInputChange.bind(this)}/>
				<span className="input-group-btn">
					<button  type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

//Este container va a "despachar" una Action para q (pasando por el REDUCER) el otro container "weatherList" cambie de STATE automaticamente y renderize  por eso se usa "MapDispathToProps" (luego de ejecutar esta linea, se puede utilizar la DATA DE CLIMA traida por el ActionCreator):
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch); 
}

//se coloca "null" porque ese espacio esta asignado para "mapStateToProps", pero como no lo usamos...colocamos NULL
export default connect(null, mapDispatchToProps)(SearchBar);
