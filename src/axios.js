import axios from "axios";

let cookie = document.cookie;
if (cookie) {
  cookie = cookie.split("=")[1].split(";")[0];
} else {
  cookie = "";
}

const baseInstance = axios.create({
  baseURL: "https://django-recipe-icko.herokuapp.com/api/",
  // headers: { Authorization: `Token ${cookie}` },
});
const tokenInstance = axios.create({
  baseURL: "https://django-recipe-icko.herokuapp.com/api/",
  headers: { Authorization: `Token ${cookie}` },
});

export { baseInstance, tokenInstance };
