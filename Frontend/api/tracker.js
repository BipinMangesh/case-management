import axios from "axios";
//import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
  //baseURL: "http://b983d225872d.ngrok.io",
  baseURL: 'http://192.168.0.103:3000/'
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
