import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading"
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios"
import Weather from './weather';

const API_KEYS = "6b6158e751334a7fa4103b1ded72e8e7";

export default class extends React.Component {
  state = {
    isLoading : true,
  }
  getWeather= async(latitude,longitude) => {
    const {
      data:{
        main : {temp},
        weather
      }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEYS}&units=metric`)
    this.setState({isLoading:false, temp, condition:weather[0].main})
    console.log(weather)
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("can't find you")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

