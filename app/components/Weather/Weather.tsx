
import Forecast from '@/app/(pages)/forecast/Forecast'
import React from 'react'


export default function Weather({ data }: any) {

    const [weatherMore, setWeatherMore] = React.useState(false)
    return (
        <div className='mt-4'>
            <div className='border rounded border-dark-subtle py-2 px-5 bg-dark text-white bg-opacity-75'>
                <div>
                    <h2 className=''><span>{data.name}</span></h2>
                </div>
                <div>
                    <div className='d-flex align-items-center gap-1'>
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="l" width="100" height="100" />
                        <div>
                            <p>{data.weather[0].main}</p>
                            <p>Температура: {data.main.temp.toFixed(0)}&#176;</p>
                        </div>
                    </div>

                </div>


                <div className='d-flex gap-4'>
                    <div className='d-flex gap-1'>
                        <p>Ощущается как:</p>
                        <p>{data.main.feels_like.toFixed(0)}&#176;</p>
                    </div>
                    <div className='d-flex gap-1'>
                        <p>Влажность:</p>
                        <p>{data.main.humidity}%</p>
                    </div>
                    <div className='d-flex gap-1'>
                        <p>Ветер:</p>
                        <p>{data.wind.speed.toFixed(0)} м/с</p>
                    </div>
                </div>

            </div>
            <div className='border rounded border-dark-subtle py-2 px-5 bg-dark text-white bg-opacity-75 mt-2'>
                <button className='btn btn-secondary mb-4'
                    onClick={() => { setWeatherMore(!weatherMore) }}>
                    Прогноз на несколько дней

                </button>
                {
                    weatherMore ? <Forecast city={data.name} /> : null
                }

            </div>
        </div>
    )
}
