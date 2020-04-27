import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="zipcode" placeholder="Enter Zip Code Here" />
        <button>How's the weather?</button>
    </form>
);

export default Form;