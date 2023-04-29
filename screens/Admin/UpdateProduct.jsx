import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;
  const images = [
    {
      url: "https://www.istockphoto.com/resources/images/PhotoFTLP/1040315976.jpg",
      _id: "ldjfldj2fldd1",
    },
    {
      url: "https://cdn.pixabay.com/photo/2023/02/18/13/48/barbary-macaque-7797970_960_720.jpg",
      _id: "ldjfld34jfldd2",
    },
  ];

  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("LapTop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "dlf1jlsd", category: "LapTop" },
    { _id: "dlfd2jlsd", category: "Footwear" },
    { _id: "dlfjfs3lsd", category: "Cloths" },
  ]);
  const [visiable, setVisiable] = useState(false);

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true} />
        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Update Product</Text>
        </View>
        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View style={{ justifyContent: "center", height: 650 }}>
              <Button
                textColor={colors.color1}
                onPress={() =>
                  navigation.navigate("productimages", {
                    id: id,
                    images: images,
                  })
                }
              >
                Manage Images
              </Button>
              <TextInput
                {...inputOptions}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                {...inputOptions}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />
              <TextInput
                {...inputOptions}
                placeholder="Price"
                keyboardType="number-pad"
                value={price}
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOptions}
                keyboardType="number-pad"
                placeholder="Stock"
                value={stock}
                onChangeText={setStock}
              />
              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  borderRadius: 3,
                  textAlignVertical: "center",
                }}
                onPress={() => setVisiable(true)}
              >
                {category}
              </Text>
              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                onPress={submitHandler}
                loading={loadingOther}
                disabled={loadingOther}
              >
                Update
              </Button>
            </View>
          </ScrollView>
        )}
      </View>
      <SelectComponent
        visiable={visiable}
        categories={categories}
        setVisible={setVisiable}
        setCategory={setCategory}
        setCategoryID={setCategoryID}
      />
    </>
  );
};

export default UpdateProduct;
