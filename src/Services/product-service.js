const BACKEND_URL = "localhost:8080";

export async function addProduct(productInfo) {
  const response = await fetch(`${BACKEND_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productInfo),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add Product");
  }
  return null;
}

export async function getAllProducts() {
  const response = await fetch(`${BACKEND_URL}/products`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not Fetch Products");
  }
  return data;
}

export async function updateProduct(updatedProductInfo) {
  const response = await fetch(`${BACKEND_URL}/products/${updatedProductInfo.productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProductInfo),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not Update Product");
  }
  return null;
}

export async function deleteProduct(productId) {
  const response = await fetch(`${BACKEND_URL}/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not Delete Product");
  }
  return null;
}
