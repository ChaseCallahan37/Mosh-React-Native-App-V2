import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error storing token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting auth token", error);
  }
};

const getUser = async () => {
  try {
    const token = await getToken();
    if (!token) {
      return console.log("No token could be found");
    }
    return jwtDecode(token);
  } catch (error) {
    console.log("There was an error with the token", error);
  }
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing auth token", error);
  }
};

export default {
  getUser,
  getToken,
  storeToken,
  removeToken,
};
