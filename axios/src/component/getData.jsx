import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export const getData = () => {
  return api.get("");
};

export const deletePost = (id) => {
  return api.delete(`/${id}`);
};

export const postData = (post) => {
  return api.post("", post);
};
