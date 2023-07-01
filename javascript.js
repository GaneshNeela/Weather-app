const apikey = '5edda351ec4f98d27ba0db1442145718';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const search = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const icon = document.querySelector(".weather-icon")


async function weather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`)
    var data = await response.json()
    console.log(data)
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr"
    if(data.weather[0].main == 'Clouds'){
        icon.src = 'images/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
        icon.src = 'images/clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
        icon.src = 'images/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        icon.src = 'images/drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
        icon.src = 'images/mist.png'
    }
}

searchbtn.addEventListener('click',() =>{

    weather(search.value)
})


