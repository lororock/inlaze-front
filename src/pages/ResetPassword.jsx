import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { postResetPassword } from "../services/userAuth.js";

function ResetPassword() {
  const location = useLocation();
  const [confirmToken, setConfirmToken] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const fetchMovieData = async () => {
    try {
      const userData = { password, passwordConfirm };
      await postResetPassword(userData, confirmToken);
      console.log("Token confirmado:");
    } catch (error) {
      console.error("Error al confirmar el token:", error);
    }
  };

  useEffect(() => {
    const path = location.pathname;
    const token = path.substring("/reset-password/".length);
    setConfirmToken(token); // Asigna el token al estado
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    fetchMovieData(); // Llama a la función para confirmar el token
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-black p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          type="text"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="First Input"
        />
        <input
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type="text"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Second Input"
        />
        <button
          type="submit"
          className="w-full p-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Click
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
