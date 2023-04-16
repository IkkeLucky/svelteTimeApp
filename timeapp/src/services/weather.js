const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '58c383bf67msh74b2cd1a886242dp14f27ajsna9fda90ca19c',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeatherFrom (query = 'Buenos Aires') {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS) 

    const data = await response.json()

    const {location, current} = data;
    const {country, localtime, name} = location;
    const {condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir} = current;
    const {text, icon} = condition;

    return {
        conditionText: text,
        conditionIcon: icon,
        country,
        localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    }
}