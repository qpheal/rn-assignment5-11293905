// HomeScreen.js
import React, { useContext, useState } from "react";
import { View, Text, Switch } from "react-native";
import { EventRegister } from 'react-native-event-listeners'
import themeContext from "../theme/themeContext";

const MyCard = () => {
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme.backgroundColor }}>
      <Text style={{ fontSize: 20, color: theme.color }}>My yygyugCardssss</Text>
      <Switch value={darkMode} onValueChange={(value) => {setDarkMode(value)
      EventRegister.emit('ChangeTheme', value)}} />
    </View>
  );
};

export default MyCard;
