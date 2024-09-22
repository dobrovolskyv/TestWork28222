
import axios from 'axios';
import { create } from 'zustand';

const useWeatherStore = create((set: any) => ({
  weatherData: {
    list: []
  },
  isLoading: false,
  error: null,

  
  

  fetchWeather: async (city: string) => {
    set({ isLoading: true });

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`);
      set({ weatherData: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useWeatherStore;