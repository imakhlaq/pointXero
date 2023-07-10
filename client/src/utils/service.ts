import axios from "axios";
import config from "@/utils/config";

const getdata = axios.create({
  baseURL: config.baseUrl,
  method: "GET",
});

export default getdata;
