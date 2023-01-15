const BACKEND_URL = "localhost:8080";

export async function login(loginCredentials) {
  const response = await fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    body: JSON.stringify(loginCredentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Invalid Username / Password");
  }

  // This will have userID and JWT Token with it.
  return data;
}

export async function signup(signupCredentials) {
  const response = await fetch(`${BACKEND_URL}/singup`, {
    method: "POST",
    body: JSON.stringify(signupCredentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return null;
}
