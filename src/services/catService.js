import axios from "axios";

const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

export async function fetchRandomCatImage() {
  try {
    const response = await axios.get(CAT_API_URL);
    return response.data[0]?.url || null;
  } catch (error) {
    console.error("Error fetching cat image:", error);
    return null;
  }
}
