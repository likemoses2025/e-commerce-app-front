import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

user = {
  name: "JangBuHo",
  email: "sample@example.com",
};

const loading = false;

const Profile = ({ navigation }) => {
  const [avatar, setAvatar] = useState(
    "https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_960_720.jpg"
  );

  const logoutHandler = () => {
    console.log("Signing Out");
  };

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Sign Out":
        logoutHandler();
        break;

      default:
      case "Orders":
        navigation.navigate("orders");
        break;
    }
  };

  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Profile</Text>
        </View>

        {/* Loading */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{ uri: avatar }}
                size={100}
                style={{ backgroundColor: colors.color1 }}
              />
              <TouchableOpacity
                onPress={navigation.navigate("camera", { updateProfile: true })}
              >
                <Button textColor={colors.color1}>Change Photo</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text style={{ fontWeight: "300", color: colors.color2 }}>
                {user?.email}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                handler={navigateHandler}
                text={"Orders"}
                icon={"format-list-bulleted-square"}
              />
              <ButtonBox
                handler={navigateHandler}
                icon={"view-dashboard"}
                reverse={true}
                text={"Admin"}
              />
              <ButtonBox
                handler={navigateHandler}
                icon={"pencil"}
                text={"Profile"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-evenly",
              }}
            >
              <ButtonBox
                handler={navigateHandler}
                icon={"pencil"}
                text={"Password"}
              />
              <ButtonBox
                handler={navigateHandler}
                icon={"exit-to-app"}
                text={"Sign Out"}
              />
            </View>
          </>
        )}
      </View>
      <Footer />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
