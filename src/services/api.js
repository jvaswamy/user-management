const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch all users
export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }
  const data = await response.json();
  return data;
};

export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to add user.");
  }
  return await response.json();
};

// Edit an existing user
export const editUser = async (user) => {
  const response = await fetch(`${API_URL}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to edit user.");
  }
  return await response.json();
};

// Delete a user
export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete user.");
  }
};
