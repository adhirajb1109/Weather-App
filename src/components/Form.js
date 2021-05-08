import React from "react";

function Form() {
  function clear(event) {
    event.preventDefault();
    document.getElementById("city").value = "";
    document.getElementById("temp").innerHTML = "";
    document.getElementById("feels_like").innerHTML = "";
    document.getElementById("form").style.display = "block";
    document.getElementById("card").style.display = "none";
  }
  function submit(event) {
    event.preventDefault();
    document.getElementById("form").style.display = "none";
    let city = document.getElementById("city").value;
    if (city.substring === " ") {
      city = city.split(" ").join('+');
    }
    let base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=143454aa39bbe3442a890cdbf3f9db36`;
    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const rise = data.sys.sunrise;
        const set = data.sys.sunset;
        const weather_icon = data.weather[0].icon;
        const wind_speed = data.wind.speed;
        const {
          temp,
          feels_like,
          temp_min,
          temp_max,
          pressure,
          humidity,
        } = data.main;
        const place_p = data.name;
        const visibility_v = data.visibility;
        document.getElementById(
          "icon"
        ).src = `http://openweathermap.org/img/w/${weather_icon}.png`;
        document.getElementById("temp").innerHTML = place_p;
        document.getElementById("current_temp").innerHTML =
          "Current Temparature : " + temp + " C";
        document.getElementById("sunrise").innerHTML =
          "Sunrise : " +
          new Date(rise * 1000).toLocaleTimeString("en-GB") +
          " A.M";
        document.getElementById("sunset").innerHTML =
          "Sunset : " +
          new Date(set * 1000).toLocaleTimeString("en-GB") +
          " P.M";
        document.getElementById("feels_like").innerHTML =
          "Feels Like : " + feels_like + " C";
        document.getElementById("temp_min").innerHTML =
          "Minimum Temparature : " + temp_min + " C";
        document.getElementById("temp_max").innerHTML =
          "Maximum Temparature : " + temp_max + " C";
        document.getElementById("pressure").innerHTML =
          "Pressure : " + pressure + " hPa";
        document.getElementById("humidity").innerHTML =
          "Humidity : " + humidity + " %";
        document.getElementById("visibility").innerHTML =
          "Visibility : " + (visibility_v / 1000).toFixed(2) + " KM";
        document.getElementById("speed").innerHTML =
          "Wind Speed : " + wind_speed + " Kmph";
        document.getElementById("card").style.display = "block";
      });
    fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=8c64ab4f74214e499c47202da4546621&include=minutely`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const uv_index = data.data[0].uv;
        const aqi_air = data.data[0].aqi;
        const precipitation = data.data[0].precip;
        document.getElementById("uv_index").innerHTML = "UV Index : " + uv_index;
        document.getElementById("aqi").innerHTML = "AQI (Air Quality Index) : " + aqi_air;
        document.getElementById("precip").innerHTML = "Precipitation : " + precipitation + " MM";
      });
  }
  return (
    <div className="container">
      <br />
      <div id="form">
      <form>
        <div className="form-group">
          <label>Enter City Name :</label>
          <br />
          <br />
          <input
            type="text"
            className="form-control"
            id="city"
            aria-describedby="cityName"
            placeholder="Enter City Name :"
          />
        </div>
        <br />
        <button
          type="submit"
          onClick={submit}
          className="btn btn-primary"
          id="submit"
        >
          Submit
        </button>
        <br />
        <br />
        <button onClick={clear} className="btn btn-danger" id="Clear">
          Clear
        </button>
        </form>
        <br />
      <br />
      </div>
      <div className="card" style={{ width: "19rem" }} id="card">
        <div className="card-body">
          <h5 className="card-title" id="temp">
            { }
          </h5>
          <img src="" className="card-img-top" id="icon" alt="weather-icon" />
          <br />
          <p className="card-text" id="current_temp">
            { }
          </p>
          <p className="card-text" id="aqi">
            { }
          </p>
          <p className="card-text" id="sunrise">
            { }
          </p>
          <p className="card-text" id="sunset">
            { }
          </p>
          <p className="card-text" id="feels_like">
            { }
          </p>
          <p className="card-text" id="precip">
            { }
          </p>
          <p className="card-text" id="temp_min">
            { }
          </p>
          <p className="card-text" id="temp_max">
            { }
          </p>
          <p className="card-text" id="pressure">
            { }
          </p>
          <p className="card-text" id="humidity">
            { }
          </p>
          <p className="card-text" id="visibility">
            { }
          </p>
          <p className="card-text" id="speed">
            { }
          </p>
          <p className="card-text" id="uv_index">
            { }
          </p>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default Form;
