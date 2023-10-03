import React, { useEffect, useRef, useState }from "react";

const Main = () => {
    const inputValue = useRef();
    const [cityName, setCityName] = useState("nagpur");
    const [error, setError] = useState(true);
    const [lang, setLang] = useState(true);
    const [myData, setMYData] = useState([]);
    const [cityDetails, setCityDetails] = useState([]);
    const [dataWeather, setDataWeather] = useState([]);
    const [windData, setWindData] = useState([]);
    const APP_KEY = ''

    useEffect(() => {
        (async _=> {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${APP_KEY}&units=metric&lang=${lang?('en'):('hi')}`);
            const data = await response.json();
            if(response.ok){
                setCityDetails(data.city)
                setMYData(data.list[0].main)
                setDataWeather(data.list[0].weather[0])
                setWindData(data.list[0].wind)
                setError(true)
            }else{
                setError(false)
            }
        })();
    }, [cityName, lang])

    const onKeydownHandler = ((e) => {
        if(e.key==='ENTER'){
           e.preventDefault();
           setCityName(inputValue.current.value)
        }
    })

    const onSubmitHandler = ((e) => {
        e.preventDefault();
        setCityName(inputValue.current.value)
    })

    return (
        <div className="box">
            <div className="cityName">
                {error?(<p>{cityDetails.name}, {cityDetails.country} <a href={`https://en.wikipedia.org/wiki/$(cityDetails.name)`} target="_ "> </a></p>): (<p className="invalid">{lang?'Invalid city Name':'Asaman city Name'}</p>)}
                <div className="search">
                    <input type="text" ref={inputValue} onKeyDown={onKeydownHandler} placeholder="city Name" />
                    <img style={{cursor:'pointer'}} onClick={onSubmitHandler} src="" alt=""/>
                </div>
            </div>
            
        </div>
    )
}

export default Main