import Axios from "axios";
const instance = new Axios.create({
  baseURL: "http://localhost:3000/api/",
});
export default instance;
