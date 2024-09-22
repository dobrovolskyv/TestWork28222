
"use client"

import useWeatherStore from '@/app/store/weatherStore';
import s from './Forecast.module.scss'
import React, { useEffect } from 'react';


const Forecast = ({ city }: any) => {
  const { weatherData, isLoading, fetchWeather } = useWeatherStore();

  useEffect(() => {
    fetchWeather(city);
  }, [fetchWeather]);

  console.log("date",weatherData.list)

  return (
    <div>
      <div className=''>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : weatherData ? (
          <div className={s.card} >
     
            {weatherData.list?.slice(0, 12).map((item: any) => {
              return (
                <div key={item.dt} className=' border rounded border-dark-subtle p-2 m-1'>
                  <h3>{new Date(item.dt * 1000 ).toLocaleDateString()}</h3>
                  <h3>{new Date(item.dt * 1000 ).toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        })}</h3>
                  <div>
                    <div>
                      <p>{item.weather[0].main}</p>
                      <h4>Температура: {item.main?.temp?.toFixed(0)}&#176;</h4>
                    </div>
                    <div className='gap-4 ' >
                      <div className='d-flex gap-1'>
                        <p>Ощущается как:</p>
                        <p>{item.main.feels_like.toFixed(0)}&#176;</p>
                      </div>
                      <div className='d-flex gap-1'>
                        <p>Влажность:</p>
                        <p>{item.main.humidity}%</p>
                      </div>
                      <div className='d-flex gap-1'>
                        <p>Ветер:</p>
                        <p>{item.wind.speed.toFixed(0)} м/с</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            )}
          </div>
        ) : (
          <div>Ошибка: чет не загрузилось </div>
        )}
      </div>
    </div>
  );
};

export default Forecast;
