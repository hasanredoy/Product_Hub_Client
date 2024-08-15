import axios from "axios";
const axiosHookCommon = axios.create({
  baseURL:'http://localhost:5000'
})

const useAxios = () => {
  return axiosHookCommon
};

export default useAxios;