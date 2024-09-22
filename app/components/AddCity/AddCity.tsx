import React, { FC} from 'react';
import axios from 'axios';

import {ICity} from '@/app/types';
import {Idata} from '@/app/types';


const AddCity: FC<Idata> = ({ data }: any) => {


  const handleAddCity = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.name}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`);
      const newCity: ICity = {
        name: response.data.name,
        humidity: response.data.main.humidity,
        speed: response.data.wind.speed,
        feelsLike: response.data.main.feels_like,
        main: response.data.main,
        temp: response.data.main.temp,

      };
      const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]') as ICity[];
      const isCityUnique = !existingBookmarks.some((bookmark) => bookmark.name === newCity.name);

      if (isCityUnique) {
        localStorage.setItem('bookmarks', JSON.stringify([...existingBookmarks, newCity]));
 
      } else {
        alert('Город уже добавлен');
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='d-flex gap-3 align-items-center'>
      <button className='btn btn-primary btn-sm' onClick={handleAddCity}>Добавить в избранное</button>
    </div>
  );
};

export default AddCity;