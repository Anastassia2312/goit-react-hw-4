import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const fetchImages = async (searchQuery, page) => {
  const response = await axios.get("/photos", {
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: "Client-ID NmPj7W4tfuHcl3mc-abFvD3rqhwZ3Mn6vHYr4WuS3T8",
    },
  });
  return response.data.results;
};
export default fetchImages;
