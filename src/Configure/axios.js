import axios from "axios";
import { BASE_URL } from "./enviroment";

// This Code will be used for sending API Calls to backend
// This is object of axios for hitting the REST_API of server
export const apiCaller = axios({
  baseURL: BASE_URL,
});
