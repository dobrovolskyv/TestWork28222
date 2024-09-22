/*************  ✨ Codeium Command 🌟  *************/
import React, { useState, useEffect } from 'react';

import {ICity} from '@/app/types';


const BookmarkList: React.FC = () => {
    const [bookmarks, setBookmarks] = useState<ICity[]>([]);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        try {
            const storedBookmarks = localStorage.getItem('bookmarks');
            setBookmarks(storedBookmarks ? JSON.parse(storedBookmarks) : [])
        } catch (error) {
            console.error('Ошибка удаления при загрузки из localStorage', error)
            setError('Ошибка удаления при загрузки из localStorage')
        }
    }, []);

    const deleteCity = (index: number) => {
        try {
            const updatedCitiesList = [...bookmarks];
            updatedCitiesList.splice(index, 1)
            setBookmarks(updatedCitiesList)
            localStorage.setItem('bookmarks', JSON.stringify(updatedCitiesList))
        } catch (error) {
            console.error('Ошибка удаления города', error)
            setError('Ошибка удаления города')
        }
    }
    if (bookmarks.length === 0) {
        return (
            <div className='mt-5'>
                <h2>Нет сохраненных городов</h2>
            </div>
        )
    } else {
        return (
            <div className='mt-5'>
                {error && <p>{error}</p>}
                {bookmarks.map((bookmark, index) => {
                    return (
                        <div key={index} className='border rounded border-dark-subtle py-2 px-3 position-relative bg-dark text-white bg-opacity-75 mt-2'>
                            <div>
                                <h2>{bookmark.name}</h2>

                                {bookmark.weather && <p>{bookmark.weather[0].main}</p>}
                                <p>Температура: {bookmark.main?.temp.toFixed(0) ?? 'Нет данных'}&#176;</p>
                                <p>Влажность {bookmark.humidity}% </p>
                                <p>Ветер {bookmark.speed} м/с</p>
                            </div>
                            <button onClick={() => deleteCity(index)}
                                className='btn position-absolute top-0 end-0 text-white'
                            >X</button>
                        </div>
                    )
                })}
            </div>
        );
    }


};

export default BookmarkList;

