import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles,
  inputOptions,
} from "../styles/styles";

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = () => {
    alert("Yeah");
  };

  const loading = false;

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <Header back={true} />
        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Change Password</Text>
        </View>
        <View style={formStyles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Old Password"
            secureTextEntry={true}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <TextInput
            {...inputOptions}
            placeholder="New Password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <Button
            textColor={colors.color2}
            disabled={newPassword === "" || oldPassword === ""}
            style={formStyles.btn}
            onPress={submitHandler}
            loading={loading}
          >
            Change Password
          </Button>
        </View>
      </View>
    </>
  );
};

export default ChangePassword;
