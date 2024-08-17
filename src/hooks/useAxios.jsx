import axios from "axios";
const axiosHookCommon = axios.create({
  baseURL:'https://product-hub-server-ten.vercel.app'
})

const useAxios = () => {
  return axiosHookCommon
};

export default useAxios;