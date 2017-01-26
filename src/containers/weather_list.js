import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	//cityData sera el objeto que contiene toda la Data de la Ciudad:
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const tempsCelsius = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<Chart data={tempsCelsius} color="blue" units="C" />
				</td>
				<td>
					<Chart data={pressures} color="green" units="hPa" />
				</td>
				<td>
					<Chart data={humidities} color="black" units="%" />
				</td>

			</tr>
		);
	}


	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>

				<tbody>

					
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		);
	}
}

//este container sufrira varios cambios de STATE que provienen de los REDUCERS cuando el container "SearchBar" envie ACTIONS, por lo que se usa "MapStateToProps" para estar atento a cualquier nueva orden para modificarse:
function mapStateToProps(state){

	//mapStateToProps devuelve un PROPs como "Objeto" (se utilizara de esta manera "this.props.weather"):
	//en este caso WEATHER, es un array que es un grupo de 
	return{ weather: state.weather };
}

//con esto voy a traer la info del clima a traves de Props y alimentar este container:
export default connect(mapStateToProps)(WeatherList);