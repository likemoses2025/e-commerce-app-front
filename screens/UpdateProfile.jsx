import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles,
  inputOptions,
} from "../styles/styles";

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
    !name || !email || !address || !city || !country || !pinCode;

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Edit Profile</Text>
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
        <View style={{}}>
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
            Update
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
