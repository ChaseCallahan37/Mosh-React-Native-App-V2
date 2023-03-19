import apiClient from "./client";

const endpoint = "/users";

const register = (credentials) => apiClient.post(endpoint, credentials);

export default {
  register,
};
