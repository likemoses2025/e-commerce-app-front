import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Toast from "react-native-toast-message";
import Cart from "./screens/Cart";
import ConfirmOrder from "./screens/ConfirmOrder";
import Payment from "./screens/Payment";
import Login from "./screens/Login";
import ForgetPassword from "./screens/ForgetPassword";
import SignUp from "./screens/SignUp";
import Verify from "./screens/Verify";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productdetails" component={ProductDetails} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="verify" component={Verify} />
          <Stack.Screen name="signup" component={SignUp} />

          {/* Password Reseting Route */}
          <Stack.Screen name="forgetpassword" component={ForgetPassword} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" topOffset={60} />
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
