import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import themeContext from "../theme/themeContext";
import { AntDesign } from "@expo/vector-icons";

const transactions = [
  {
    id: "1",
    company: "Apple Store",
    industry: "Entertainment",
    amount: "- $5,99",
    logo: require("../assets/apple.png"),
  },
  {
    id: "2",
    company: "Spotify",
    industry: "Music",
    amount: "- $12,99",
    logo: require("../assets/spotify.png"),
  },
  {
    id: "3",
    company: "Money Transfer",
    industry: "Transaction",
    amount: "$300",
    logo: require("../assets/apple.png"),
    amountColor: "#00f",
  },
  {
    id: "4",
    company: "Grocery",
    industry: "Sales",
    amount: "- $88",
    logo: require("../assets/grocery.png"),
  },
  {
    id: "5",
    company: "Money Transfer",
    industry: "Transaction",
    amount: "$300",
    logo: require("../assets/apple.png"),
    amountColor: "#00f",
  },
  {
    id: "6",
    company: "Grocery",
    industry: "Sales",
    amount: "- $88",
    logo: require("../assets/grocery.png"),
  },
];

const HomeScreen = () => {
  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <ScrollView>
        <View style={{ marginHorizontal: "5%", marginVertical: 30, gap: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image
                source={require("../assets/profile.png")}
                style={{ width: 60, height: 60 }}
              />
              <View>
                <Text
                  style={{
                    color: theme.subColor,
                    fontSize: 18,
                    marginBottom: 5,
                  }}
                >
                  Welcome back,
                </Text>
                <Text
                  style={{ color: theme.color, fontSize: 24, fontWeight: 700 }}
                >
                  Eric Atsu
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <AntDesign
                name="search1"
                size={24}
                color="black"
                style={{
                  backgroundColor: "#e8e3d5",
                  borderRadius: 50,
                  padding: 10,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginTop: 0 }}>
            <Image source={require("../assets/Card.png")} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: -5,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#f3f3f3",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/send.png")}
                    style={{ color: "white" }}
                  />
                </View>
                <Text style={{ color: theme.color }}>Send</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              {" "}
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#f3f3f3",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../assets/recieve.png")} />
                </View>
                <Text style={{ color: theme.color }}>Recieve</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#f3f3f3",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../assets/loan.png")} style={{}} />
                </View>
                <Text style={{ color: theme.color }}>Loan</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#f3f3f3",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../assets/topUp.png")} style={{}} />
                </View>
                <Text style={{ color: theme.color }}>TopUp</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Text
              style={{ color: theme.color, fontWeight: "600", fontSize: 22 }}
            >
              Transaction
            </Text>
            <TouchableOpacity>
              {" "}
              <Text style={{ color: "#037bfc" }}>See All</Text>
            </TouchableOpacity>
          </View>

          {transactions.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => handlePress(item)}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      backgroundColor: "#f3f3f3",
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 15,
                    }}
                  >
                    <Image source={item.logo} />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: theme.color,
                      }}
                    >
                      {item.company}
                    </Text>
                    <Text style={{ fontSize: 14, color: theme.subColor }}>
                      {item.industry}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: theme.color,
                    }}
                  >
                    {item.amount}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
