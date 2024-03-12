function WeatherApp() {
  const api_key = "c9d8678c783c9eeef1edb34860979a30";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + "Km/h";
    temp[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name;
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="bg-blue-800 border-4 rounded-3xl w-1/2">
          <h1 className="text-white text-4xl font-bold m-2 p-2">Weather App</h1>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="search....."
              className="cityInput p-2 rounded-2xl w-1/2"
            />
            <div>
              <img
                src="https://www.bing.com/th?id=OIP.qLQCPaWxeYifioMDyQUoJwHaHa&pid=3.1&cb=&w=300&h=300&p=0"
                alt="not found image"
                className="w-11 rounded-full border-2 "
                onClick={() => {
                  search();
                }}
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
              width={150}
            />
          </div>
          <div className="temp text-white text-3xl">24°C</div>
          <div className="location text-white text-3xl">London</div>
          <div>
            <div className="flex justify-between m-4">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5664/5664982.png"
                  width={120}
                />
                <div className="humidity-percent text-white text-2xl">64°C</div>
                <div className="text-white text-2xl">Humidity-percent</div>
              </div>
              <div>
                <img
                  src="https://th.bing.com/th/id/R.1c9cbdadbcc8340039c12f940ad35355?rik=XKk79xRsYJigKA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwind-clipart-transparent%2fwind-clipart-transparent-3.png&ehk=BMfxA28lLCFDPxO%2bjh4DHDGgBnY3cx2rnT1txfk5Gao%3d&risl=&pid=ImgRaw&r=0"
                  width={140}
                />
                <div className="wind-rate text-white text-2xl">18 km/h</div>
                <div className="text-white text-2xl p-3">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
