import React from 'react';

const Weather = props => (
    <div className="weather__info">
        { props.time_day && <p className="weather__key">Time: 
            <span className="weather__value"> { props.time_day } </span>
        </p>
        }
        { props.city && props.country && <p className="weather__key">Location: 
            <span className="weather__value"> { props.city }, { props.country }</span>
        </p>
        }
        { props.temperature && <p className="weather__key">Temperature: 
            <span className="weather__value"> { props.temperature }°F</span>
        </p> 
        }
        { props.humidity && <p className="weather__key">Humidity: 
            <span className="weather__value"> { props.humidity }% </span>
        </p> 
        }
        { props.wind && <p className="weather__key">Wind: 
            <span className="weather__value"> { props.wind } MPH </span>
        </p> 
        }
        { props.description && <p className="weather__key">Conditions: 
            <span className="weather__value"> { props.description } <img className="img-fluid" alt="weatherIcon" src={ props.icon } /> </span>
        </p>
        }
        { props.error && <p className="weather__error">{ props.error }</p>}
    </div>
);

export default Weather;