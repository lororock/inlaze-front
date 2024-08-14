import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postResetPassword } from "../services/userAuth.js";
import Swal from "sweetalert2";

function ResetPassword() {
  const location = useLocation();
  const [confirmToken, setConfirmToken] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const navigate = useNavigate();
  const eyeIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.36999 2.16375C3.32608 2.11425 3.27279 2.07396 3.21319 2.04522C3.1536 2.01647 3.08889 1.99984 3.02282 1.99628C2.95675 1.99273 2.89063 2.00232 2.8283 2.02451C2.76597 2.0467 2.70865 2.08103 2.65969 2.12553C2.61072 2.17003 2.57108 2.22381 2.54305 2.28374C2.51502 2.34368 2.49916 2.40858 2.4964 2.47469C2.49364 2.5408 2.50402 2.60679 2.52696 2.66886C2.54989 2.73092 2.58491 2.78782 2.62999 2.83625L3.83249 4.15937C1.56249 5.5525 0.586244 7.7 0.543119 7.7975C0.51469 7.86144 0.5 7.93064 0.5 8.00062C0.5 8.0706 0.51469 8.1398 0.543119 8.20375C0.564994 8.25312 1.09437 9.42687 2.27124 10.6037C3.83937 12.1712 5.81999 13 7.99999 13C9.12038 13.0064 10.2294 12.7757 11.2544 12.3231L12.6294 13.8362C12.6733 13.8857 12.7266 13.926 12.7862 13.9548C12.8458 13.9835 12.9105 14.0002 12.9765 14.0037C13.0426 14.0073 13.1087 13.9977 13.1711 13.9755C13.2334 13.9533 13.2907 13.919 13.3397 13.8745C13.3886 13.83 13.4283 13.7762 13.4563 13.7162C13.4843 13.6563 13.5002 13.5914 13.503 13.5253C13.5057 13.4592 13.4953 13.3932 13.4724 13.3311C13.4495 13.2691 13.4145 13.2122 13.3694 13.1637L3.36999 2.16375ZM6.32812 6.90375L8.93249 9.76937C8.5403 9.9757 8.09069 10.0459 7.65426 9.96902C7.21783 9.89212 6.81931 9.67245 6.52126 9.3445C6.22321 9.01655 6.04252 8.5989 6.00756 8.15713C5.9726 7.71536 6.08536 7.27449 6.32812 6.90375ZM7.99999 12C6.07624 12 4.39562 11.3006 3.00437 9.92187C2.43332 9.35436 1.94763 8.70699 1.56249 8C1.85562 7.45062 2.79124 5.91312 4.52187 4.91375L5.64687 6.14812C5.21133 6.70594 4.98702 7.39977 5.01358 8.10698C5.04014 8.81419 5.31586 9.48924 5.79202 10.0128C6.26817 10.5364 6.91409 10.8748 7.61561 10.9682C8.31713 11.0615 9.02908 10.9039 9.62562 10.5231L10.5462 11.5356C9.73374 11.8473 8.87023 12.0048 7.99999 12ZM8.37499 6.03562C8.24471 6.01076 8.12963 5.93515 8.05509 5.82545C7.98054 5.71574 7.95263 5.58091 7.97749 5.45062C8.00236 5.32033 8.07796 5.20526 8.18767 5.13071C8.29738 5.05617 8.43221 5.02826 8.56249 5.05312C9.19975 5.17666 9.77999 5.5029 10.2167 5.98318C10.6534 6.46345 10.9231 7.07202 10.9856 7.71812C10.998 7.85015 10.9574 7.98167 10.8727 8.08376C10.7881 8.18585 10.6664 8.25014 10.5344 8.2625C10.5188 8.26341 10.5031 8.26341 10.4875 8.2625C10.3625 8.26303 10.2419 8.21675 10.1493 8.13276C10.0568 8.04878 9.99905 7.93318 9.98749 7.80875C9.94541 7.37899 9.76575 6.9743 9.47522 6.65484C9.1847 6.33537 8.79883 6.1182 8.37499 6.03562ZM15.455 8.20375C15.4287 8.2625 14.7956 9.66437 13.37 10.9412C13.3213 10.9863 13.2641 11.0211 13.2018 11.0438C13.1395 11.0665 13.0732 11.0766 13.007 11.0735C12.9407 11.0703 12.8758 11.0541 12.8159 11.0256C12.756 10.9971 12.7023 10.9569 12.6581 10.9075C12.6138 10.8581 12.5799 10.8004 12.5582 10.7377C12.5365 10.675 12.5274 10.6087 12.5316 10.5425C12.5358 10.4763 12.5531 10.4116 12.5826 10.3521C12.612 10.2927 12.653 10.2397 12.7031 10.1962C13.4025 9.56788 13.9901 8.82523 14.4406 8C14.0546 7.29236 13.5679 6.64455 12.9956 6.07687C11.6044 4.69937 9.92374 4 7.99999 4C7.59465 3.9995 7.18996 4.03232 6.78999 4.09812C6.72495 4.10962 6.65828 4.10812 6.59382 4.09371C6.52936 4.0793 6.46839 4.05226 6.41444 4.01415C6.3605 3.97604 6.31463 3.92762 6.2795 3.87169C6.24437 3.81575 6.22067 3.75341 6.20978 3.68826C6.19888 3.62312 6.20099 3.55646 6.216 3.49214C6.23101 3.42781 6.25862 3.3671 6.29723 3.31351C6.33583 3.25992 6.38468 3.2145 6.44094 3.17989C6.49719 3.14529 6.55975 3.12217 6.62499 3.11187C7.07947 3.03683 7.53936 2.99941 7.99999 3C10.18 3 12.1606 3.82875 13.7287 5.39687C14.9056 6.57375 15.435 7.74812 15.4569 7.7975C15.4853 7.86144 15.5 7.93064 15.5 8.00062C15.5 8.0706 15.4853 8.1398 15.4569 8.20375H15.455Z"
        fill="#6D6D6D"
      />
    </svg>
  );

  const fetchMovieData = async () => {
    try {
      const userData = { password, passwordConfirm };
      await postResetPassword(userData, confirmToken);
      Swal.fire({
        icon: "success",
        title: "password changed successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Password confirmation error",
        showConfirmButton: false,
        timer: 1500,
      });
      return error;
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
    <div className="flex items-center justify-center h-screen bg-gradient-to-t from-yellow-800  to-yellow-400">
      <form
        className="bg-black p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            className="w-64 sm:w-96 flex items-center mb-4 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="New Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {eyeIcon}
          </button>
        </div>
        <div className="relative w-full">
          <input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type={showPasswordConfirm ? "text" : "password"}
            className="w-64 sm:w-96 flex items-center mb-4 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="New Password Confirmation"
          />
          <button
            type="button"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {eyeIcon}
          </button>
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          send
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
