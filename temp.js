

const apiKey ='aa14528b42bdd97b864e1f8d697524de'
const apiUrl ='https://api.openweathermap.org/data/2.5/weather'

//gets an HTML Element by id
const locationInput = document.getElementById('locationinput')
const searchButton = document.getElementById('searchButton')
const locationElement = document.getElementById('location')
const temperatureElement = document.getElementById('temperature')
const decriptionElement = document.getElementById('description')

//when ever user types city and clicks on search this will be called
searchButton.addEventListener('click',() =>
{
    const location = locationInput.value
    if(location)
    {
        fetchWeather(location);
        console.log(location)
    }
})

//whenever user types location  in textbox and just  enter then also need to show the data same as searchButton Functionality

locationInput.addEventListener('keydown',(event) =>
    {
    if(event.key==='Enter')
    {
        const location = locationInput.value
        if(location)
        {
            fetchWeather(location)
            console.log(location)
        }
    }
})





function fetchWeather(location)
{
 const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
     locationElement.textContent = data.name;
     temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
     decriptionElement.textContent = data.weather[0].description;
  })
  .catch(error =>{
    console.log("error fetching weather data",error)
  })
}


