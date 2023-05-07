import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { getProductDetails } from "../redux/actions/productAction";
import { colors, defaultStyle } from "../styles/styles";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};

const ProductDetails = ({ route: { params } }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {
    product: { stock, name, price, description, images },
  } = useSelector((state) => state.product);

  const [quantity, setQuantity] = useState(1);
  const isCarousel = useRef(null);

  const incrementQty = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: params.id,
        name,
        price,
        image: images[0]?.url,
        stock,
        quantity,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, isFocused]);

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />

      {/* Carousel */}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
      <View
        style={{
          backgroundColor: colors.color2,
          flex: 1,
          padding: 35,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text style={{ fontSize: 35 }} numberOfLines={2}>
          {name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "900" }}>₹{price}</Text>
        <Text style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}>
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "100" }}>
            Quantity
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
          <Button icon={"cart"} style={styles.btn} textColor={colors.color2}>
            Add to Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={styles.container} key={index}>
    <Image source={{ uri: item.url }} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 70,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },

  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;
