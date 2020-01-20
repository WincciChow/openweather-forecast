import React, { Component } from 'react';
import './Forecast.css';
class Forecast extends Component {

    renderFiveDayForecast = () => {
      return this.props.fiveDays.map((day) => {
        return(
          <div key={day[0]} className="daily">
            <p>{day[0]}</p>
            <img src={`http://openweathermap.org/img/wn/${day[1]}.png`} alt="weatherIcon"/>
            <p id="Temp">{day[2]}<span>&deg;</span><span>C</span></p>
        </div>
        );
      });
    }

    render() {
        return (
                <div className="content">
                    <p id="temp"> {this.props.currentTemp}<span>&deg;</span><span>C</span></p>
                    <p>{this.props.currentWeather}</p>
                    <div className="fiveDays">
                    {this.renderFiveDayForecast()}
                    </div>
                </div>
        );
    }
}

export default Forecast;
