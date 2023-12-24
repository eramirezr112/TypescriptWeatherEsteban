import { WeatherResponse } from "../model/weatherResponse";

// TODO: Create an async function with an argument called city to return the that of the endpoint
export const getWeather = async (city: string) :Promise<WeatherResponse> =>  {
    const API_KEY = 'ac679ff239002eac9b0a606e7052c222';
    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    
    let response = await fetch(API_CURRENT, requestOptions);
    return response.json();
} 
