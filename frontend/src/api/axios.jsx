import axios from "axios";

const apiClinet = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const fetchData = async (path) => {
  const response = await apiClinet.get(path);

  return response.data;
};
