import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

const ProductDetail = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ProductDetail</Text>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetail;
