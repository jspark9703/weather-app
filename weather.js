import React from "react";
import { StyleSheet, View, Text, StatusBar} from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "무서워용"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "이슬비가 내려요"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "비 내리는 소리 좋아요"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "snow",
    subtitle: "Do you want to build a snowman? "
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny",
    subtitle: "신나게 밖에서 놀아요"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "흐려요"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "앞이 안보이니 조심하세요"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Thanks a lot China"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
}
export default function Weather ({temp, condition}){
  return (
    <LinearGradient colors={weatherOption[condition].gradient} style={styles.container}>
      <StatusBar backgroundColor={weatherOption[condition].gradient[0]} barStyle="light-content"/>
      <View style={{...styles.halfContainer,...styles.tempContainer}}>
        <MaterialCommunityIcons 
        name={weatherOption[condition].iconName}
        size={96} 
        color="white" /> 
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>
          {weatherOption[condition].title}
        </Text>
        <Text style={styles.subTtile}>
          {weatherOption[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
      
  )
  
};

Weather.propTypes = {
  temp:propTypes.number.isRequired,
  condition:propTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  tempContainer:{
    paddingTop:55
  },
  temp:{
    marginTop:10,
    fontSize:32,
    color:"white"
  },
  halfContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    color:"white",
    fontSize:44,
    fontWeight:"300",
    marginBottom:10
  },
  subTtile:{
    fontWeight:"600",
    color:"white",
    fontSize:33
  },
  textContainer:{
    paddingHorizontal:20,
    alignItems:"flex-start"
  }
})