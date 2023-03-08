import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import iconImage from "../assets/sample1.jpg";
import { Button } from "react-native-paper";

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCartHandler,
  i,
  navigation,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate("productdetails", { id })}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 20,
          height: 400,
          backgroundColor: i / 2 === 0 ? colors.color1 : colors.color2,
        }}
      >
        <Image
          source={iconImage}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 105,
          }}
        />
        <Text
          numberOfLines={2}
          style={{
            color: i / 2 === 0 ? colors.color2 : colors.color3,
            fontSize: 25,
            fontWeight: "300",
          }}
        >
          {name}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            color: i / 2 === 0 ? colors.color2 : colors.color3,
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          {price}
        </Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: i / 2 === 0 ? colors.color2 : colors.color3,
              borderRadius: 0,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              width: "100%",
            }}
          >
            <Button
              onPress={() => addToCartHandler(id, stock)}
              textColor={i / 2 === 0 ? colors.color1 : colors.color2}
            >
              Add To Cart{" "}
            </Button>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
          width: "100%",
        }}
      ></View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
