import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { sample1 } from "../assets/sample1.jpg";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};

const ProductDetails = ({ route: { params } }) => {
  const [quantity, setQuantity] = useState(1);
  const stock = 5;
  const name = "Love";
  const price = 35252;
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typ";
  const isCarousel = useRef(null);

  const images = [
    {
      id: "fldsjflk",
      url: "https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741019_960_720.jpg",
    },
    {
      id: "fldsjflkde",
      url: "https://cdn.pixabay.com/photo/2023/03/14/23/54/darling-7853377_960_720.jpg",
    },
    {
      id: "fldsjflkde2",
      url: "https://cdn.pixabay.com/photo/2022/09/29/10/46/grass-7487114_960_720.jpg",
    },
  ];

  const incrementQty = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (quantity < 0) return;
    setQuantity((prev) => prev - 1);
  };

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out of Stock",
        text2: "i am Text2",
      });
    Toast.show({ type: "success", text1: "Added to Cart" });
  };

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
