import React from 'react';
import Titles from './components/title';
import Forms from './components/form';
import Weather from './components/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css';
const API_KEY="8d9edd583d5aa038a8972c7b91770fa0";

class App extends React.Component{
  state={
    temperature:undefined,
    humidity:undefined,
    city:undefined,

    country:undefined,
    description:undefined,
    error:undefined
  }
  getweather=async(e)=>{
    e.preventDefault()
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
    const data=await api_call.json();
    if (city && country)
    {
    
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""

    })}
    else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please fill the correct value"
    })
    }
  }
  render()
  {

    return (

      <div>

        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles/> 

        </div>
        <div className="col-xs-7 form-container">
        <Forms getweather={this.getweather}/>
<Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country}
 humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
</div></div></div>
        </div></div></div>

    );
  }
}  
export default App;
