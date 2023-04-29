import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors, defaultStyle } from "../styles/styles";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItem = [
  {
    name: "Dog",
    image:
      "https://cdn.pixabay.com/photo/2022/12/02/05/13/dog-7630252_960_720.jpg",
    product: "adkjfld",
    stock: 3,
    price: 45999,
    quantity: 3,
  },
  {
    name: "Monkey",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/13/48/barbary-macaque-7797970_960_720.jpg",
    product: "dl;f;1",
    stock: 4,
    price: 35999,
    quantity: 2,
  },
  {
    name: "Cat",
    image:
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    product: "adkjfld1",
    stock: 4,
    price: 25999,
    quantity: 3,
  },
  {
    name: "Cat",
    image:
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    product: "adkjfld21",
    stock: 4,
    price: 25999,
    quantity: 3,
  },
  {
    name: "Cat",
    image:
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    product: "adkjfld231",
    stock: 4,
    price: 25999,
    quantity: 3,
  },
  {
    name: "Cat",
    image:
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    product: "adkjfl4d121",
    stock: 4,
    price: 25999,
    quantity: 3,
  },
  {
    name: "Cat",
    image:
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    product: "adkjfl4d221",
    stock: 4,
    price: 25999,
    quantity: 3,
  },
  {
    name: "Cat",
    image:
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    product: "adkjfl43d21",
    stock: 4,
    price: 25999,
    quantity: 3,
  },
  {
    name: "Cat",
    image:
      "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
    product: "adkjfl44d21",
    stock: 4,
    price: 25999,
    quantity: 3,
  },
];

const Cart = () => {
  const navigation = useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("Increment", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("decrement", id, qty);
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
          {cartItem.map((item, index) => (
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
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5Item</Text>
        <Text>5 Won</Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItem.length > 0 ? () => navigation.navigate("confirmorder") : null
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
