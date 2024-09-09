import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

import {
  AxiosError,
  ICredentials,
  IGamePackageIDs,
  IGameTitle,
  IOrder,
  IRegisterData,
  IResetPasswordData,
  IUser,
  IVerifyEmailParams,
} from "@/types";
import {
  innitializePaymentFixedFailed,
  innitializePaymentFixedStart,
  innitializePaymentFixedSuccess,
} from "../slice/checkoutSlice";

// const API_URL = "http://localhost:8080";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function innitializePayments(checkoutOrderData: IOrder, token: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(innitializePaymentFixedStart(null));
      // Make an HTTP GET request to the API
      const response = await axios.post(
        `${API_URL}/payment/initialize/fixed`,
        checkoutOrderData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data: any = response.data;
      toast("🦄 Payment Initialized");
      dispatch(innitializePaymentFixedSuccess(null));
      return data;
    } catch (error: any) {
      dispatch(innitializePaymentFixedFailed(error));
      // const axiosError = error as AxiosError;
      if (error.response) {
        toast(error.response.data.message, {
          type: "error",
        });
      }
      toast(error.message, {
        type: "error",
      });
      return error.message;
    }
  };
}

export const verifyPayments = async (referenceId: string, orderID) => {
  try {
    const response = await axios.get(
      `${API_URL}/payment/verify/${referenceId}?orderRef=${orderID}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
