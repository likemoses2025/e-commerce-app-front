import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { sample1 } from "../assets/sample1.jpg";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);
  const isCarousel = useRef(null);

  const images = [
    {
      id: "fldsjflk",
      url: sample1,
    },
    {
      id: "fldsjflkde",
      url: "https://www.shutterstock.com/image-photo/beautiful-healthy-woman-taking-beauty-care-2213431249",
    },
  ];

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
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
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
