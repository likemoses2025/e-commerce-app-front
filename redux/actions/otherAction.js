import axios from "axios";
import { server } from "../store";

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "updatePasswordRequest" });

      const { data } = await axios.put(
        `${server}/user/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
          //   WithCredentials:true 를 통해서 쿠키를 백엔드로 보낼 수 있다.
          //   없다면 로그인을 안한것으로 백엔드에서 판단한다.
          withCredentials: true,
        }
      );

      dispatch({ type: "updatePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };

export const updateProfile =
  (name, email, address, city, country, pinCode) => async (dispatch) => {
    try {
      dispatch({
        type: "updateProfileRequest",
      });

      const { data } = await axios.put(
        `${server}/user/updateprofile`,
        {
          name,
          email,
          address,
          city,
          country,
          pinCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateProfileSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProfileFailure",
        payload: error.response.data.message,
      });
    }
  };

export const updatePic = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updatePicRequest" });

    const { data } = await axios.put(`${server}/user/updatepic`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    dispatch({
      type: "updatePicSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updatePicFailure",
      payload: error.response.data.message,
    });
  }
};

export const placeOrder =
  (
    shippingInfo,
    orderItems,
    paymentMethod,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "placeOrderRequest",
      });

      const { data } = await axios.post(
        `${server}/order/new`,
        {
          shippingInfo,
          orderItems,
          paymentMethod,
          paymentInfo,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "placeOrderSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "placeOrderFailure",
        payload: error.response.data.message,
      });
    }
  };

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "processOrderRequest",
    });

    const { data } = await axios.put(
      `${server}/order/single/${id}`,
      {},
      { withCredentials: true }
    );

    dispatch({
      type: "processOrderSuccess",
      payload: data.message,
    });
  } catch (error) {
    console.log("Error", error);
    dispatch({
      type: "processOrderFailure",
      payload: error.response.data.message,
    });
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: "addCategoryRequest",
    });

    const { data } = await axios.post(
      `${server}/product/category`,
      {
        category,
      },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );

    dispatch({
      type: "addCategorySuccess",
      payload: data.message,
    });
  } catch (error) {
    console.log("Error", error);
    dispatch({
      type: "addCategoryFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteCategoryRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/category/${id}`,

      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "deleteCategorySuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteCategoryFailure",
      payload: error.response.data.message,
    });
  }
};

export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "addProductRequest" });

    const { data } = await axios.post(`${server}/product/new`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    dispatch({
      type: "addProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addProductFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateProductAction =
  (id, name, description, category, price, stock) => async (dispatch) => {
    console.log("UpdateProductAction ID : " + id);
    try {
      dispatch({
        type: "updateProductRequest",
      });

      const { data } = await axios.put(
        `${server}/product/single/${id}`,
        {
          name,
          description,
          category,
          price,
          stock,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateProductSuccess",
        payload: data.message,
      });
    } catch (error) {
      console.log("Error : " + error);
      dispatch({
        type: "updateProductFailure",
        payload: error?.response.data.message,
      });
    }
  };
