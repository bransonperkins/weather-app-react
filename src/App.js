import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import moment from 'moment'
import 'moment-timezone'

var zipcode_to_timezone = require( 'zipcode-to-timezone' );
const API_KEY = process.env.REACT_APP_OW_API_KEY;

class App extends React.Component {
  state = {
    time_day: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }

  // using async await API call
  getWeather = async (e) => {
    e.preventDefault();
    const zip_code = e.target.elements.zipcode.value;
    const weather_Api = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip_code}&appid=${API_KEY}&units=imperial`);
    const data = await weather_Api.json();
    var icon_code = data.weather[0].icon;
    var iconurl = "https://openweathermap.org/img/w/" + icon_code + ".png";
    var zone_name = zipcode_to_timezone.lookup(zip_code);
    var timezone = moment.tz([2012, 0], zone_name).zoneAbbr()
    if (zip_code) {
      this.setState({
        time_day: (moment().format('h:mm A ') + timezone + moment().format(' dddd')),
        temperature: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: Math.round(data.wind.speed),
        description: data.weather[0].description,
        icon: iconurl,
        error: ""
      })
    } else {
      this.setState({
        time_day: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        icon: undefined,
        error: "Please enter a valid location."
      })
    }
  }

  render() {
    return (
      <div>
        <div className="main">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Titles />
                </div>
                <div className="col-md-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                  time_day={this.state.time_day}
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  wind={this.state.wind}
                  description={this.state.description}
                  icon={this.state.icon}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;