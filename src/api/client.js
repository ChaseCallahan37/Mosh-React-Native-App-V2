import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://64.226.94.138:8080/api",
  timeout: 20000,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  request.headers["x-auth-token"] = authToken;
});

//Modifies the get method by storing it as temp
//and referencing it within the new get method.
//This allows us to extend functionality to add caching
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const msg = await cache.get(url);
  const response = await get(url, params, axiosConfig);

  //Cache the url and data and proceed with returning response
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  //If server is not reached, then search through cache
  //and return what was found. Otherwise, return response
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
