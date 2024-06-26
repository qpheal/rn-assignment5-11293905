// HomeScreen.js
import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import themeContext from "../theme/themeContext";

const MyCard = () => {
  const theme = useContext(themeContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Text style={{ fontSize: 20, color: theme.color }}>My Card Screen</Text>
    </View>
  );
};

export default MyCard;
