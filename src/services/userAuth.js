import axios from "axios";

export const postRegisterUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:9000/auth/register', userData);
      console.log('Usuario registrado:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al registrar el usuario:', error.response.data);
      throw error;
    }
  };
