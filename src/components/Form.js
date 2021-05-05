import React from "react";

function Form() {
  function clear(event) {
    event.preventDefault();
    document.getElementById("city").value = "";
    document.getElementById("temp").innerHTML = "";
    document.getElementById("feels_like").innerHTML = "";
    document.getElementById("form").style.display = "none";
  }
  function submit(event) {
    event.preventDefault();
    let city = document.getElementById("city").value;
    document.getElementById("form").style.display = "block";
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=143454aa39bbe3442a890cdbf3f9db36`;
    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const { temp, feels_like, temp_min, temp_max } = data.main;
        const place = data.name;
        document.getElementById("temp").innerHTML = place;
        document.getElementById("current_temp").innerHTML =
          "Current Temparature : " + temp + " C";
        document.getElementById("feels_like").innerHTML =
          "Feels Like : " + feels_like + " C";
        document.getElementById("temp_min").innerHTML =
          "Minimum Temparature : " + temp_min + " C";
        document.getElementById("temp_max").innerHTML =
          "Maximum Temparature : " + temp_max + " C";
      });
  }
  return (
    <div className="container">
      <br />
      <form>
        <div class="form-group">
          <label>Enter City Name :</label>
          <br />
          <br />
          <input
            type="text"
            class="form-control"
            id="city"
            aria-describedby="cityName"
            placeholder="Enter City Name :"
          />
        </div>
        <br />
        <button
          type="submit"
          onClick={submit}
          class="btn btn-primary"
          id="submit"
        >
          Submit
        </button>
        <br />
        <br />
        <button onClick={clear} class="btn btn-danger" id="Clear">
          Clear
        </button>
      </form>
      <br />
      <br />
      <div class="card" style={{ width: "19rem" }} id="form">
        <div class="card-body">
          <h5 class="card-title" id="temp">
            {}
          
          <p class="card-text" id="current_temp">
            {}
          </p>
          <p class="card-text" id="feels_like">
            {}
          </p>
          <p class="card-text" id="temp_min">
            {}
          </p>
          <p class="card-text" id="temp_max">
            {}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
