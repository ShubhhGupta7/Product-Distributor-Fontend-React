const BACKEND_URL = "localhost:8080";

export async function addToCart(cartMapping) {
  // Cart Mapping is a object containing id's of user and product.

  const response = await fetch(`${BACKEND_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartMapping),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add to Cart");
  }
  return null;
}

export async function viewCart(userId) {
  const response = await fetch(`${BACKEND_URL}/products/${userId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not Fetch Product");
  }
  return data;
}
