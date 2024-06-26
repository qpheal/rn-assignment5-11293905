import { Text, View, FlatList, TouchableOpacity, Switch} from "react-native";
import React, { useContext, useState } from "react";
import themeContext from "../theme/themeContext";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventRegister } from "react-native-event-listeners";
import Footer from "../components/footer";

const settingsData = [
  { id: "1", title: "Language" },
  { id: "2", title: "My Profile" },
  { id: "3", title: "Contact Us" },
  { id: "4", title: "Change Password" },
  { id: "5", title: "Privacy" },
];

const Settings = () => {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 25,
          gap: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: theme.color,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Settings
        </Text>

        <FlatList
          data={settingsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 18,
                  borderBottomWidth: 1,
                  alignItems: "center",
                  borderColor: theme.subColor,
                }}
              >
                <Text style={{ color: theme.color }}>{item.title}</Text>
                <AntDesign name="right" size={24}  style={{color: theme.color}}/>
              </View>
            </TouchableOpacity>
          )}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color:theme.color}}>Theme</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit("ChangeTheme", value);
            }}
          />
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default Settings;
