import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles,
  inputOptions,
  inputStyling,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    alert("Yeah");
  };

  const loading = false;

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Login</Text>
        </View>
        <View style={formStyles.container}>
          <TextInput
            keyboardType="email-address"
            {...inputOptions}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            {...inputOptions}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={formStyles.forget}>Forget Password?</Text>
          </TouchableOpacity>

          <Button
            textColor={colors.color2}
            disabled={email === "" || password === ""}
            style={formStyles.btn}
            onPress={submitHandler}
            loading={loading}
          >
            Log In
          </Button>
          <Text style={formStyles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={formStyles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default Login;
