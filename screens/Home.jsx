import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { defaultStyle, colors, homeHeading } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import iconimage from "../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "Noodle", _id: "1" },
  { category: "CupNoodle", _id: "2" },
  { category: "Snack", _id: "3" },
  { category: "Sauce", _id: "4" },
  { category: "Etc", _id: "5" },
];

const products = [
  {
    price: 23423,
    stock: 23,
    name: "woman",
    id: "dkjhf77",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2023/01/16/19/13/bird-7723137_960_720.jpg",
      },
    ],
  },
  {
    price: 13423,
    stock: 23,
    name: "woman2",
    id: "d1kjhf77",
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2023/03/09/14/40/berries-7840199_960_720.jpg",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id) => {
    console.log("Add to Cart", id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        {/* Heading Row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <Heading text1="Our" text2="Products" />

          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                style={{ backgroundColor: colors.color2, elevation: 12 }}
                icon={"magnify"}
                size={50}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((item, index) => {
            return (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item.id}
                key={item.id}
                i={index}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
