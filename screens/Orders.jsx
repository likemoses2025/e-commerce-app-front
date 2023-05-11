import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Headline } from "react-native-paper";
import Header from "../components/Header";
import Loader from "../components/Loader";
import OrderItem from "../components/OrderItem";
import { defaultStyle, formHeading } from "../styles/styles";
import { useGetOrders } from "../utils/hooks";

const Orders = () => {
  const isFocused = useIsFocused();
  const { loading, orders } = useGetOrders(isFocused);

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
