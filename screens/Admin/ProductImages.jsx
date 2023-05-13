import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import ImageCard from "../../components/ImageCard";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import { useMessageAndErrorUser } from "../../utils/hooks";
import mime from "mime";
import {
  addProductImage,
  deleteProductImage,
} from "../../redux/actions/otherAction";

const ProductImages = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [images] = useState(route.params.images);
  const [productId] = useState(route.params.id);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const loading = useMessageAndErrorUser(dispatch, navigation, "adminpanel");

  const deleteHandler = (id) => {
    dispatch(deleteProductImage(productId, id));
  };

  const submitHandler = () => {
    const myForm = new FormData();
    myForm.append("file", {
      uri: image,
      type: mime.getType(image),
      name: image.split("/").pop(),
    });
    console.log(" :" + myForm);
    dispatch(addProductImage(productId, myForm));
  };

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image);
      setImageChanged(true);
    }
  }, [route.params]);

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Images</Text>
      </View>
      <ScrollView style={{ marginBottom: 20 }}>
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 40,
            minHeight: 400,
          }}
        >
          {images.map((i) => (
            <ImageCard
              key={i._id}
              src={i.url}
              id={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <Image
          style={{
            backgroundColor: colors.color2,
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("camera", { updateProduct: true })
            }
          >
            <Avatar.Icon
              icon={"camera"}
              size={30}
              style={{ margin: 10, backgroundColor: colors.color2 }}
              color={colors.color3}
            />
          </TouchableOpacity>
        </View>
        <Button
          style={{ backgroundColor: colors.color1, padding: 6 }}
          textColor={colors.color2}
          loading={loading}
          disabled={!imageChanged}
          onPress={submitHandler}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default ProductImages;
