import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Headline } from "react-native-paper";
import Header from "../components/Header";
import Loader from "../components/Loader";
import OrderItem from "../components/OrderItem";
import { defaultStyle, formHeading } from "../styles/styles";

const orders = [
  {
    _id: "dljfldsjfld",
    shippingInfo: {
      address: "73 easter",
      city: "Newyork",
      country: "India",
      pinCode: 202322,
    },
    createdAt: "12-2-2022T2343",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 20000,
  },
  {
    _id: "dljfldsjfeld2",
    shippingInfo: {
      address: "73 easter",
      city: "Newyork",
      country: "India",
      pinCode: 202322,
    },
    createdAt: "12-2-2022T2343",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 20000,
  },
  {
    _id: "dlj23fldsjfeld2",
    shippingInfo: {
      address: "73 easter",
      city: "Newyork",
      country: "India",
      pinCode: 202322,
    },
    createdAt: "12-2-2022T2343",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 20000,
  },
  {
    _id: "dljfldsj42feld2",
    shippingInfo: {
      address: "73 easter",
      city: "Newyork",
      country: "India",
      pinCode: 202322,
    },
    createdAt: "12-2-2022T2343",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 20000,
  },
];

const Orders = () => {
  const loading = false;

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address},
                    ${item.shippingInfo.city},
                    ${item.shippingInfo.state},
                    ${item.shippingInfo.country},
                    ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
