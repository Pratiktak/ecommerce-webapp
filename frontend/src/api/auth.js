import BASE_URL from "./index";

export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/api/auth/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Registration failed");
  }

  return result;
};

export const loginUser = (data) =>
  fetch(`${BASE_URL}/api/auth/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const logoutUser = () =>
  fetch(`${BASE_URL}/api/auth/user/logout`).then(res => res.json());