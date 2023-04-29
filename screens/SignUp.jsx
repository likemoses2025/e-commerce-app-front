import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles,
  defaultImg,
} from "../styles/styles";
import { Avatar, Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const SignUp = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const submitHandler = () => {
    alert("Yeah");
    // Will remove this in future
    navigation.navigate("verify");
  };

  const loading = false;

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode;

  useEffect(() => {
    if (route.params?.image) return setAvatar(route.params.image);
  }, [route.params]);

  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Sign Up</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={{ minHeight: 900 }}>
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.color1 }}
              size={80}
              source={{ uri: avatar ? avatar : defaultImg }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              keyboardType="email-address"
              {...inputOptions}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              {...inputOptions}
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />

            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />

            <TextInput
              {...inputOptions}
              placeholder="PinCode"
              value={pinCode}
              onChangeText={setPinCode}
            />

            <Button
              textColor={colors.color2}
              disabled={disableBtn}
              style={formStyles.btn}
              onPress={submitHandler}
              loading={loading}
            >
              Sign Up
            </Button>
            <Text style={formStyles.or}>OR</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={formStyles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
