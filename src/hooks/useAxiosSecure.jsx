import axios from "axios";
const axiosHook = axios.create({
  baseURL:'https://product-hub-server-ten.vercel.app',

})

const useAxiosSecure = () => {
  return axiosHook
};

export default useAxiosSecure;