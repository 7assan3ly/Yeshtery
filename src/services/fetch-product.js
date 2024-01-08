const fetchProductData = async () => {
  try {
    const response = await fetch("/src/constants/product-data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};

export default fetchProductData;
