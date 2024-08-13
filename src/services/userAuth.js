import axios from "axios";

//movies

export const getMy = async () => {
  try {
    const token = localStorage.getItem("authToken");

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get("http://localhost:9000/movies/my", {
      headers,
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const putFavorite = async (id) => {
  try {
    const token = localStorage.getItem("authToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.put(
      `http://localhost:9000/movies/favorite/${id}`, 
      null, 
      { headers } 
    );

    console.log("Usuario registrado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al agregar el favorito:", error.response?.data || error.message);
    throw error;
  }
};

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

export const postReqResetPassword = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:9000/auth/request-reset-password",
      userData
    );
    console.log("Correo enviado para recuperacion:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al recuperar:", error.response.data);
    throw error;
  }
};

export const postResetPassword = async (userData, token) => {
  try {

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(
      "http://localhost:9000/auth/reset-password",
      userData,
      {headers}
    );
    console.log("Contrasena cambiada con exito:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al de contrasena:", error.response.data);
    throw error;
  }
};
