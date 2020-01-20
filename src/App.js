import React, { Component } from 'react';
import openWeather from './components/openWeather';
import Forecast from './components/Forecast/Forecast';
import SearchBar from './components/SearchBar/SearchBar';
import moment from 'moment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentTemp: '',
        currentWeather: [],
        fiveDays: [],
        error: '',
        isCity: false
    };
  }

  onSearch = (searchTerm) => {

   openWeather.fetchCurrent(searchTerm).then(data => {
     if (data.main) {
      let currentTemp = Math.floor(data.main.temp);
      let info = data.weather.map(text => {
        return(
          <div id="current-info" key={text['id']}>
            <p id="descrip">{text['description'].toUpperCase()}</p>
          </div>
        );
      });
      this.setState({
            isCity: true,
            error: false,
            currentWeather: info,
            currentTemp: currentTemp,
      });
    } else {
      this.setState({
        currentWeather: null,
        isCity: false,
        error: 'Please Enter a Valid City Name'
      });
    }
  });

   openWeather.fetchDays(searchTerm).then(data => {
    if (data.list) {

     let weatherList = data.list;
     let fiveDayForecast = [];

     for (let i = 0; i < weatherList.length; i += 8) {
       let date = moment.unix(weatherList[i].dt).format("dddd");
       let weatherIcon = weatherList[i].weather[0].icon;
       let Temp = Math.floor(weatherList[i].main.temp);

       fiveDayForecast.push([date, weatherIcon, Temp]);
     }
     this.setState({
       fiveDays: fiveDayForecast
      });
    }
  });
}


  render() {
    const isCity = this.state.isCity;

    const displayForecast = isCity ? (
      <Forecast
        currentWeather={this.state.currentWeather}
        city={this.state.city}
        currentTemp={this.state.currentTemp}
        fiveDays={this.state.fiveDays}
      />
    ) : ("");

    return (
            <div className="App">
              <SearchBar onSearch={this.onSearch}/>
              {this.state.error}
              {displayForecast}
            </div>
    );
  }
}

export default App;
