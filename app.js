
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const toggleLightButton = document.getElementById("toggle-light");


function updateSensorData() {
  
  const temperature = (Math.random() * 30 + 10).toFixed(1); 
  const humidity = (Math.random() * 50 + 30).toFixed(1);    

 
  temperatureElement.textContent = `${temperature} °C`;
  humidityElement.textContent = `${humidity} %`;
}


let lightOn = false;
toggleLightButton.addEventListener("click", () => {
  lightOn = !lightOn;
  toggleLightButton.textContent = lightOn ? "Turn Off" : "Turn On";
  alert(`Light is now ${lightOn ? "ON" : "OFF"}`);
});


setInterval(updateSensorData, 3000);


updateSensorData();
