import axios from "axios";

export const userFunction = async () => {
  const { data } = await axios.get("https://randomuser.me/api/");
  return data.results[0];
};
