import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";
import SearchModal from "../components/SearchModal";
import { getAllProducts } from "../redux/actions/productAction";
import { colors, defaultStyle } from "../styles/styles";
import { useSetCategories } from "../utils/hooks";

// const categories = [
//   { category: "Noodle", _id: "1" },
//   { category: "CupNoodle", _id: "2" },
//   { category: "Snack", _id: "3" },
//   { category: "Sauce", _id: "4" },
//   { category: "Etc", _id: "5" },
// ];

const Home = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  // Store 의 product 에서 state.products를 가져오는 것
  const { products } = useSelector((state) => state.product);

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id) => {
    console.log("Add to Cart", id);
  };

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    // 사용자 입력완료 0.5초후 서버요청을 보냄으로 서버요청 최적화
    const timeOutId = setTimeout(() => {
      dispatch(getAllProducts(searchQuery, category));
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, searchQuery, category, isFocused]);

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
                id={item._id}
                key={item._id}
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
