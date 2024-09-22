"use client"
import React, {useState } from 'react'

import axios from 'axios'
import Weather from '../Weather/Weather'
import AddCity from '../AddCity/AddCity'



interface Iweather {
    main: {}
}

export default function SearchCity() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState<Iweather | any>({})
    const [loading, setLoading] = useState(false)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

    const fetchWeather = (e: any) => {
        e.preventDefault();
        axios.get(url).then((response) => {
            setWeather(response.data)
            setLoading(false)
        })
      
        setLoading(true)
    }

    if (loading) {
        return <p>Загрузка данных...</p>
    } else {
        return (
            <div>
                <div className='d-flex align-items-center gap-4 mt-3 '>
                    <form onSubmit={fetchWeather} className='col-4'>
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            type="text" placeholder='Напишите название города'
                            className='form-control'
                           value={city}
                        />
                    </form>
                    <button onClick={fetchWeather}
                        className='btn btn-primary btn-md'>Поиск</button>
                         <AddCity data={weather}/>
                </div>
                {weather.main && <Weather data={weather} favorites={false} />}

            </div>
        )
    }
}

