import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { defaultStyle, colors, homeHeading } from "../styles/styles";
import Header from "../components/Header";
import { Avatar } from "react-native-paper";

const Home = () => {
  return (
    <View style={defaultStyle}>
      <Header />

      <View style={homeHeading}>
        {/* Heading */}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: 900 }}>Products</Text>
        </View>

        {/* Search Bar */}
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              style={{ backgroundColor: colors.color2, elevation: 12 }}
              icon={"magnify"}
              size={50}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
