import axios from "axios";
const axiosHook = axios.create({
  baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
  return axiosHook
};

export default useAxiosSecure;