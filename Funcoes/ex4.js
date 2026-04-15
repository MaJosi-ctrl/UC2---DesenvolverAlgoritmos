function converterCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9
    console.log(`${fahrenheit}°F equivale a ${celsius.toFixed(1)}°C`)
}

// exemplo de uso 
converterCelsius(98.3)


