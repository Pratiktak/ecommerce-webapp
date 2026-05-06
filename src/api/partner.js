import BASE_URL from "./index";

export const applyAsPartner = (data) =>
  fetch(`${BASE_URL}/api/partner/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());