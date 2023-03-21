import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button, RadioButton } from "react-native-paper";

const Payment = ({ route, navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const isAuthenticated = false;

  const redirectToLogin = () => {
    navigation.navigate("login");
  };
  const codHandler = () => {};
  const onlineHandler = () => {};

  console.log(paymentMethod);

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="Payment"
        text2="Method"
      />
      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={(newValue) => setPaymentMethod(newValue)}
          value={paymentMethod}
        >
          <View style={styles.radioStyle}>
            <Text style={styles.radioTextStyle}>CASH ON DELIVERY</Text>
            <RadioButton color={colors.color1} value={"COD"} />
          </View>
          <View style={styles.radioStyle}>
            <Text style={styles.radioTextStyle}>ONLINE</Text>
            <RadioButton color={colors.color1} value={"ONLINE"} />
          </View>
        </RadioButton.Group>
      </View>
      <TouchableOpacity
        onPress={
          !isAuthenticated
            ? redirectToLogin
            : paymentMethod === "COD"
            ? codHandler
            : onlineHandler
        }
      >
        <Button
          style={styles.btn}
          textColor={colors.color2}
          icon={
            paymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"
          }
        >
          {paymentMethod === "COD" ? "Place Order" : "Pay"}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.color3,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    alignItems: "center",
  },
  radioTextStyle: { fontWeight: "600", color: colors.color2, fontSize: 18 },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    margin: 10,
  },
});

export default Payment;
