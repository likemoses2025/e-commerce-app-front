import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const submitHandler = () => {
    alert("Yeah");
    // Will remove this in future
    navigation.navigate("verify");
  };

  const loading = false;

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Forget Password</Text>
        </View>
        <View style={formStyles.container}>
          <TextInput
            keyboardType="email-address"
            {...inputOptions}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <Button
            textColor={colors.color2}
            disabled={email === ""}
            style={formStyles.btn}
            onPress={submitHandler}
            loading={loading}
          >
            Send OTP
          </Button>
          <Text style={formStyles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={formStyles.link}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgetPassword;
