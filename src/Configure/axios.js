import axios from "axios";
import { BASE_URL } from "./enviroment";

// This is object of axios for hitting the REST_API of server
export const apiCaller= axios({
  baseURL: BASE_URL
});
