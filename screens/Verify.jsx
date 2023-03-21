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

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    alert("Yeah");
    // Will remove this in future
    navigation.navigate("login");
  };

  const loading = false;

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Reset Password</Text>
        </View>
        <View style={formStyles.container}>
          <TextInput
            keyboardType="number-pad"
            {...inputOptions}
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <TextInput
            {...inputOptions}
            secureTextEntry={true}
            placeholder="New Pawword"
            value={password}
            onChangeText={setPassword}
          />

          <Button
            textColor={colors.color2}
            disabled={otp === "" || password === ""}
            style={formStyles.btn}
            onPress={submitHandler}
            loading={loading}
          >
            Reset Password
          </Button>
          <Text style={formStyles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={formStyles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default Verify;
