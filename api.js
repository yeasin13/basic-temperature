const  API_KEY = `8ef4120dae76699c2161adb94019a2e6`
const searchTemperature = () => {
    const city =  document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const setInnertext = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnertext('city',temperature.name);
    console.log(temperature);
}