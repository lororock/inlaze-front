import axios from "axios";

//users
export const postRegisterUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:9000/auth/register",
      userData
    );
    console.log("Usuario registrado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al registrar el usuario:", error.response.data);
    throw error;
  }
};

export const postConfirmToken = async (token) => {
  try {
    const response = await axios.post(
      `http://localhost:9000/auth/confirm/${token}`
    );
    console.log("Usuario registrado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al autenticar usuario:", error.response.data);
    throw error;
  }
};

export const postLoginUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:9000/auth/login",
      userData
    );
    console.log("Usuario registrado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al inciciar el usuario:", error.response.data);
    throw error;
  }
};
