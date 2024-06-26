import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/Home";
import Profile from "./screens/Profile";
import Statistics from "./screens/Statistics";
import MyCard from "./screens/MyCard";
import { EventRegister } from "react-native-event-listeners";
import React, { useState, useEffect } from "react";
import theme from "./theme/theme";
import themeContext from "./theme/themeContext";
import Transaction from "./components/Transaction";
import { DefaultTheme, Title } from "react-native-paper";
import Settings from "./screens/Settings";
import { Image } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              let iconName;
              switch (route.name) {
                case "HomeScreen":
                  iconName = require("./assets/home.png");
                  break;
                case "MyCard":
                  iconName = require("./assets/myCards.png");
                  break;
                case "Statistics":
                  iconName = require("./assets/statictics.png");
                  break;
                case "Settings":
                  iconName = require("./assets/settings.png");
                  break;
                
                 
                default:
                  break;
              }
              return (
                <Image source={iconName} style={{ width: 24, height: 24 }} />
              );
            }, 
          })}
        >
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="MyCard" component={MyCard} />

          <Tab.Screen name="Statistics" component={Statistics} />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
