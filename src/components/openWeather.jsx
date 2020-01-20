const API_KEY = "4b6f6cdcae3e85a78c760cbc7cc76c91";

const OpenWeather = {
    fetchDays(city) {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`).then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        });
    },
    fetchCurrent(city) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`).then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        });
    }
}

export default OpenWeather;
