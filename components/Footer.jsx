import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";

const Footer = ({ activeRoute = "home" }) => {
  const navigation = useNavigation();

  const loading = false;

  const isAuthenticated = true;

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigation.navigate("home");
        break;
      case 1:
        navigation.navigate("cart");
        break;
      case 2:
        if (isAuthenticated) {
          navigation.navigate("profile");
        } else navigation.navigate("login");
        break;
      default:
        navigation.navigate("home");
        break;
    }
  };

  const avatarOptions = {
    color: colors.color2,
    size: 50,
    style: { backgroundColor: colors.color1 },
  };

  return (
    loading === false && (
      <View
        style={{
          backgroundColor: colors.color1,
          borderTopRightRadius: 120,
          borderTopLeftRadius: 120,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(1)}
          >
            <Avatar.Icon
              {...avatarOptions}
              icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(2)}
          >
            <Avatar.Icon
              {...avatarOptions}
              icon={
                isAuthenticated === false
                  ? "login"
                  : activeRoute === "profile"
                  ? "account"
                  : "account-outline"
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: 80,
            backgroundColor: colors.color2,
            justifyContent: "center",
            alignItems: "center",
            top: -50,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigationHandler(0)}
            >
              <Avatar.Icon
                {...avatarOptions}
                icon={activeRoute === "home" ? "home" : "home-outline"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};

export default Footer;
