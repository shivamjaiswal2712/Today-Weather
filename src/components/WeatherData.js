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
            <div id="scrolledItem" className="forcastdata">
                <div>
                    <p>{props.lang?'SUNRISE' : 'sunUp'}</p>
                    <img src="" width={100} alt="" />
                    <p>{getTime(props.city.sunrise)}</p>
                </div>
                <div>
                    <p>{props.lang?'HUMIDITY' : 'garami'}</p>
                    <img src="" width={100} alt="" />
                    <p>{props.weatherData.humidity}&nbsp;mm</p>
                </div>
                <div>
                    <p>{props.lang?'WIND' : 'hawa'}</p>
                    <img src="" width={100} alt="" />
                    <p>{props.windData.speed}&nbsp;mph</p>
                </div>
                <div>
                    <p>{props.lang?'PRESSURE' : 'DAVAv'}</p>
                    <img src="" width={100} alt="" />
                    <p>{props.weatherData.pressure}&nbsp;mb</p>
                </div>
                <div>
                    <p>{props.lang?'SUNRISE' : 'sundown'}</p>
                    <img src="" width={100} alt="" />
                    <p>{getTime(props.city.sunset)}</p>
                </div>
            </div>

            <p className="copyright">&copy;Shivam Jaiswal 2023</p>
            <p onClick={sideRight} className="rightarrow">&gt;</p>
            <p onClick={sideLeft} className="leftarrow">&lt;</p>
        </div>
    )
}

export default WeatherData