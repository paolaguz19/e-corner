import axios from "axios";

export const logoutUser = async () => {
  try {
    const response = await axios.post("http://localhost:8000/api/logout/", null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error al cerrar sesión." };
  }
};
