let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = 'fa8d701a220e50267cbc8a93fb03db11'
let defKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then(data=>data.json())
    .then(data=>mostrarDatosClima(data))
}

function mostrarDatosClima(data){
   
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description

    ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre},${paisNombre}`

    temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - defKelvin)} grados celcius `

    humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad} %`

    descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionInfo)
}