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
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import ChangePassword from "./screens/ChangePassword";
import Camera from "./screens/Camera";
import Orders from "./screens/Orders";
import AdminPanel from "./screens/Admin/AdminPanel";

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
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateprofile" component={UpdateProfile} />
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="camera" component={Camera} />
          <Stack.Screen name="orders" component={Orders} />

          {/* Password Reseting Route */}
          <Stack.Screen name="forgetpassword" component={ForgetPassword} />
          <Stack.Screen name="verify" component={Verify} />

          {/* Admin Route */}
          <Stack.Screen name="adminpanel" component={AdminPanel} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" topOffset={60} />
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
