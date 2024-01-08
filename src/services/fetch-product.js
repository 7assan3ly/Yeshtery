const fetchProductData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/1');
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
