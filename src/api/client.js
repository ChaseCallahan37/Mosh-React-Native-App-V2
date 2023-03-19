import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://64.226.94.138:8080/api",
  timeout: 20000,
});

export default apiClient;
