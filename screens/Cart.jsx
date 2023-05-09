import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors, defaultStyle } from "../styles/styles";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

// export const cartItem = [
//   {
//     name: "Dog",
//     image:
//       "https://cdn.pixabay.com/photo/2022/12/02/05/13/dog-7630252_960_720.jpg",
//     product: "adkjfld",
//     stock: 3,
//     price: 45999,
//     quantity: 3,
//   },
//   {
//     name: "Monkey",
//     image:
//       "https://cdn.pixabay.com/photo/2023/02/18/13/48/barbary-macaque-7797970_960_720.jpg",
//     product: "dl;f;1",
//     stock: 4,
//     price: 35999,
//     quantity: 2,
//   },
//   {
//     name: "Cat",
//     image:
//       "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
//     product: "adkjfld1",
//     stock: 4,
//     price: 25999,
//     quantity: 3,
//   },
//   {
//     name: "Cat",
//     image:
//       "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
//     product: "adkjfld21",
//     stock: 4,
//     price: 25999,
//     quantity: 3,
//   },
//   {
//     name: "Cat",
//     image:
//       "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
//     product: "adkjfld231",
//     stock: 4,
//     price: 25999,
//     quantity: 3,
//   },
//   {
//     name: "Cat",
//     image:
//       "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
//     product: "adkjfl4d121",
//     stock: 4,
//     price: 25999,
//     quantity: 3,
//   },
//   {
//     name: "Cat",
//     image:
//       "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
//     product: "adkjfl4d221",
//     stock: 4,
//     price: 25999,
//     quantity: 3,
//   },
//   {
//     name: "Cat",
//     image:
//       "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
//     product: "adkjfl43d21",
//     stock: 4,
//     price: 25999,
//     quantity: 3,
//   },
//   {
//     name: "Cat",
//     image:
//       "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
//     product: "adkjfl44d21",
//     stock: 4,
//     price: 25999,
//     quantity: 3,
//   },
// ];

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const incrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity + 1;

    if (stock <= quantity)
      return Toast.show({ type: "error", text1: "Maximum value added" });

    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQty,
      },
    });
  };
  const decrementHandler = (id, name, price, image, stock, quantity) => {
    const newQty = quantity - 1;

    if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });

    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: newQty,
      },
    });
  };

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emptyCart={true} />
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />
      <View style={{ flex: 1, paddingVertical: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <CartItem
                key={item.product}
                id={item.product}
                name={item.name}
                stock={item.stock}
                amount={item.price}
                imgSrc={item.image}
                index={index}
                qty={item.quantity}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
                navigation={navigation}
              />
            ))
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginTop: 100,
                fontWeight: "500",
              }}
            >
              No Items Yet!!
            </Text>
          )}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>{cartItems.length} Item</Text>
        <Text>
          {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )}
          Won
        </Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItems.length > 0
            ? () => navigation.navigate("confirmorder")
            : null
        }
      >
        <Button
          icon="cart"
          style={{
            backgroundColor: colors.color3,
            margin: 30,
            borderRadius: 100,
            padding: 5,
          }}
          textColor={colors.color2}
        >
          Check Out
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
