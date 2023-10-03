import React from "react";

const WeatherData = (props) => {
    
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
            timeStamp *1000
        ).getMinutes()}`;
    };

    const sideRight = () => {
        var slider = document.getElementById('scrolledItem');
        slider.scrollLeft = slider.scrollLeft+300;
    }
    const sideLeft = () => {
        var slider = document.getElementById('scrolledItem');
        slider.scrollLeft = slider.scrollLeft-300;
    }

    return(
        <div className="weatherData">
            <div className="currTemp">
                <div className="tempAndLogo">
                    <div>
                        <img src="" width={200} alt=""/>
                    </div>
                    <div>
                        {Math.round(props.WeatherData.temp)}&deg;C
                        <p>{props.weather.description}</p>
                    </div>
                </div>
                <div className="windData">
                    <p>{props.lang?'wind: ' : 'hawa: '}<span>{props.windData.speed}&nbsp;mph</span></p>
                    <p>{props.lang?'Min Temp: ' : 'kam dup: '}<span>{Math.round(props.weatherData.temp_min)}&deg;C</span></p>
                    <p>{props.lang?'Max Temp: ' : 'jada dup: '}<span>{Math.round(props.weatherData.temp_max)}&deg;C</span></p>
                </div>
            </div>

        </div>
    )
}