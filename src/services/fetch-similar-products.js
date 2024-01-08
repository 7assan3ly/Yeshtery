const fetchSimilarProducts = async () => {
  try {
    const response = await fetch("yeshtery/src/constants/similar-products.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};

export default fetchSimilarProducts;
