// components/Footer.js
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";

const Footer = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: "absolute",   
        paddingVertical: '2%',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('HomeScreen')}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('MyCard')}>
        <Ionicons name="card-outline" size={24} color="black" />
        <Text>My Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="stats-chart-outline" size={24} color="black" />
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
