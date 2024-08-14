import { useState } from "react";
import {
  postRegisterUser,
  postLoginUser,
  postReqResetPassword,
} from "../services/userAuth";
import Swal from "sweetalert2";

import PropTypes from "prop-types";
import imgLogIn from "../assets/LogIn.png";
import imgSingUp from "../assets/SignUp.png";

function Modal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loadPassword, setLoadPassword] = useState(false);

  const logIn = (e) => setIsLogIn(e);
  const signUp = () => setIsSignUp(true);

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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (isLogIn) {
        loginSubmit();
      } else if (!isLogIn) {
        registerSubmit();
      }
    }
  };

  const registerSubmit = async () => {
    try {
      const userData = { email, password };
      await postRegisterUser(userData);
      Swal.fire("Success", "User registered successfully", "success");
    } catch (e) {
      Swal.fire(
        "Error",
        "Failed to register user Check your email address or password",
        "error",
        e
      );
    }
  };

  const loginSubmit = async () => {
    try {
      const userData = { email, password };
      const data = await postLoginUser(userData);
      localStorage.setItem("authToken", data.token);
      Swal.fire({
        icon: "success",
        title: "User login successfully",
        showConfirmButton: false,
        timer: 1500});
      onClose();
    } catch (e) {
      Swal.fire(
        "Error",
        "Failed to login user Check your email address or password",
        "error",
        e
      );
    }
  };

  const reqResetSubmit = async () => {
    setLoadPassword(true);
    try {
      const userData = { email };
      await postReqResetPassword(userData);
      Swal.fire(
        "Success",
        "Check your email to reset your password",
        "success"
      );
    } catch (e) {
      Swal.fire("Error", "Check your email address or password", "error", e);
    }
    setLoadPassword(false);
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-30 ">
      <div className="w-[90%] bg-opacity-50 backdrop-blur-sm p-2 rounded-lg border border-white shadow-lg flex flex-col sm:p-8 md:flex-row">
        <div className="flex flex-col mt-10 gap-2 items-center justify-around h-96 ms:mt-0 sm:gap-4 md:h-auto md:w-2/3 p-4 text-white lg:gap-8">
          <div className="bg-gray-800 rounded-md">
            <button
              onClick={() => logIn(false)}
              className={`${
                isLogIn ? "bg-gray-800" : "bg-yellow-500"
              } py-2 px-6 rounded-md`}
            >
              Sign up
            </button>
            <button
              onClick={() => logIn(true)}
              className={`${
                isLogIn ? "bg-yellow-500" : "bg-gray-800"
              } py-2 px-6 rounded-md`}
            >
              Log In
            </button>
          </div>
          <div className={`${isSignUp || isLogIn ? "" : "hidden"} w-[60%]`}>
            <p className="text-center mb-6">{`${
              isLogIn
                ? "We love having you back"
                : "Welcome aboard! We're excited to have you with us."
            }`}</p>
            <form>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="text"
                className="bg-white w-full text-black py-2 my-2 px-6 rounded-md flex items-center"
              />

              <div className="relative w-full">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="bg-white w-full text-black py-2 my-2 px-6 rounded-md flex items-center"
                  onKeyDown={handleKeyDown}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  {eyeIcon}
                </button>
              </div>
              <div className="flex flex-col-reverse justify-between items-center sm:flex-row md:justify-center">
                <p
                  onClick={loadPassword ? null : reqResetSubmit}
                  className={`${
                    isLogIn ? "" : "hidden"
                  } text-center cursor-pointer`}
                >
                  I dont remember my password
                </p>
                <button
                  type="reset"
                  onClick={isLogIn ? loginSubmit : registerSubmit}
                  className="block bg-yellow-500 text-center py-2 px-6 rounded-md md:hidden"
                >
                  {isLogIn ? "login" : "register"}
                </button>
              </div>
            </form>
          </div>
          <button
            onClick={signUp}
            className={`${
              isSignUp || isLogIn ? "hidden" : ""
            } bg-yellow-500 text-black py-2 px-6 rounded-md flex items-center`}
          >
            Register with your Email <span className="ml-2">📧</span>
          </button>

          <p className="text-center">
            For any questions, reach out to support@Quikbetdmovies.com
          </p>
        </div>

        <div className="hidden bg-gray-800 rounded-r-xl text-white md:flex flex-col items-center justify-center w-full md:w-1/3 p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Welcome to Quikbet Movies!
          </h2>
          <p className="text-center">
            {`${
              isLogIn
                ? "🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!"
                : "🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!"
            }`}
          </p>
          <img
            src={imgSingUp}
            alt="Character"
            className={`${
              isLogIn ? "hidden" : ""
            } w-80 h-80 md:w-96 md:h-96 mb-4`}
          />
          <img
            src={imgLogIn}
            alt="Character"
            className={`${
              isLogIn ? "" : "hidden"
            } w-80 h-80 md:w-96 md:h-96 mb-4`}
          />
        </div>
        {/* Botón de Cerrar */}
        <button className="absolute top-5 lef-1 text-black" onClick={onClose}>
          <svg
            width="66"
            height="24"
            viewBox="0 0 66 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM14.0306 8.78063L10.8103 12L14.0306 15.2194C14.1003 15.2891 14.1556 15.3718 14.1933 15.4628C14.231 15.5539 14.2504 15.6515 14.2504 15.75C14.2504 15.8485 14.231 15.9461 14.1933 16.0372C14.1556 16.1282 14.1003 16.2109 14.0306 16.2806C13.9609 16.3503 13.8782 16.4056 13.7872 16.4433C13.6961 16.481 13.5986 16.5004 13.5 16.5004C13.4015 16.5004 13.3039 16.481 13.2128 16.4433C13.1218 16.4056 13.0391 16.3503 12.9694 16.2806L9.21938 12.5306C9.14965 12.461 9.09433 12.3783 9.05658 12.2872C9.01884 12.1962 8.99941 12.0986 8.99941 12C8.99941 11.9014 9.01884 11.8038 9.05658 11.7128C9.09433 11.6217 9.14965 11.539 9.21938 11.4694L12.9694 7.71937C13.0391 7.64969 13.1218 7.59442 13.2128 7.5567C13.3039 7.51899 13.4015 7.49958 13.5 7.49958C13.5986 7.49958 13.6961 7.51899 13.7872 7.5567C13.8782 7.59442 13.9609 7.64969 14.0306 7.71937C14.1003 7.78906 14.1556 7.87178 14.1933 7.96283C14.231 8.05387 14.2504 8.15145 14.2504 8.25C14.2504 8.34855 14.231 8.44613 14.1933 8.53717C14.1556 8.62822 14.1003 8.71094 14.0306 8.78063Z"
              fill="#F6F6F6"
            />
            <path
              d="M32.8849 17.5V7.31818H36.9616C37.7107 7.31818 38.3355 7.42921 38.8359 7.65128C39.3364 7.87334 39.7126 8.18158 39.9645 8.57599C40.2164 8.96709 40.3423 9.41785 40.3423 9.92827C40.3423 10.326 40.2628 10.6757 40.1037 10.9773C39.9446 11.2756 39.7259 11.5208 39.4474 11.7131C39.1723 11.902 38.8575 12.0362 38.5028 12.1158V12.2152C38.8906 12.2318 39.2536 12.3411 39.5916 12.5433C39.933 12.7455 40.2098 13.0289 40.4219 13.3935C40.634 13.7547 40.7401 14.1856 40.7401 14.6861C40.7401 15.2263 40.6058 15.7086 40.3374 16.1328C40.0722 16.5537 39.6795 16.8868 39.1591 17.1321C38.6387 17.3774 37.9974 17.5 37.2351 17.5H32.8849ZM35.0376 15.7401H36.7926C37.3925 15.7401 37.83 15.6257 38.1051 15.397C38.3802 15.165 38.5178 14.8568 38.5178 14.4723C38.5178 14.1906 38.4498 13.942 38.3139 13.7266C38.178 13.5111 37.9841 13.3421 37.7322 13.2195C37.4837 13.0968 37.187 13.0355 36.8423 13.0355H35.0376V15.7401ZM35.0376 11.5788H36.6335C36.9285 11.5788 37.1903 11.5275 37.419 11.4247C37.651 11.3187 37.8333 11.1695 37.9659 10.9773C38.1018 10.785 38.1697 10.5547 38.1697 10.2862C38.1697 9.91832 38.0388 9.62169 37.777 9.39631C37.5185 9.17093 37.1506 9.05824 36.6733 9.05824H35.0376V11.5788ZM44.2786 17.6442C43.7914 17.6442 43.3572 17.5597 42.976 17.3906C42.5949 17.2183 42.2933 16.9647 42.0712 16.63C41.8525 16.2919 41.7431 15.871 41.7431 15.3672C41.7431 14.9429 41.821 14.5866 41.9767 14.2983C42.1325 14.0099 42.3446 13.7779 42.6131 13.6023C42.8816 13.4266 43.1865 13.294 43.5279 13.2045C43.8726 13.1151 44.2338 13.0521 44.6117 13.0156C45.0558 12.9692 45.4138 12.9261 45.6855 12.8864C45.9573 12.8433 46.1545 12.7803 46.2772 12.6974C46.3998 12.6146 46.4611 12.492 46.4611 12.3295V12.2997C46.4611 11.9848 46.3617 11.7412 46.1628 11.5689C45.9673 11.3965 45.6889 11.3104 45.3276 11.3104C44.9464 11.3104 44.6432 11.3949 44.4178 11.5639C44.1924 11.7296 44.0433 11.9384 43.9703 12.1903L42.0115 12.0312C42.111 11.5672 42.3065 11.1662 42.5982 10.8281C42.8899 10.4867 43.266 10.2249 43.7267 10.0426C44.1908 9.85701 44.7277 9.7642 45.3375 9.7642C45.7618 9.7642 46.1678 9.81392 46.5556 9.91335C46.9467 10.0128 47.293 10.1669 47.5946 10.3757C47.8996 10.5845 48.1399 10.853 48.3155 11.1811C48.4912 11.5059 48.579 11.8954 48.579 12.3494V17.5H46.5705V16.4411H46.5108C46.3882 16.6797 46.2241 16.8902 46.0186 17.0724C45.8132 17.2514 45.5662 17.3923 45.2779 17.495C44.9895 17.5945 44.6564 17.6442 44.2786 17.6442ZM44.8851 16.1825C45.1967 16.1825 45.4718 16.1212 45.7104 15.9986C45.949 15.8726 46.1363 15.7036 46.2722 15.4915C46.4081 15.2794 46.476 15.0391 46.476 14.7706V13.9602C46.4097 14.0033 46.3186 14.0431 46.2026 14.0795C46.0899 14.1127 45.9623 14.1442 45.8198 14.174C45.6773 14.2005 45.5347 14.2254 45.3922 14.2486C45.2497 14.2685 45.1204 14.2867 45.0044 14.3033C44.7559 14.3397 44.5388 14.3977 44.3532 14.4773C44.1676 14.5568 44.0234 14.6645 43.9206 14.8004C43.8179 14.933 43.7665 15.0987 43.7665 15.2976C43.7665 15.5859 43.8709 15.8063 44.0797 15.9588C44.2918 16.108 44.5603 16.1825 44.8851 16.1825ZM53.6724 17.6491C52.8902 17.6491 52.2174 17.4834 51.6539 17.152C51.0938 16.8172 50.6629 16.3532 50.3613 15.7599C50.063 15.1667 49.9139 14.4839 49.9139 13.7116C49.9139 12.9295 50.0647 12.2434 50.3663 11.6534C50.6712 11.0601 51.1038 10.5978 51.6639 10.2663C52.224 9.93158 52.8902 9.7642 53.6625 9.7642C54.3287 9.7642 54.912 9.88518 55.4125 10.1271C55.9129 10.3691 56.309 10.7088 56.6007 11.1463C56.8923 11.5838 57.0531 12.0975 57.0829 12.6875H55.0843C55.028 12.3063 54.8788 11.9998 54.6369 11.7678C54.3983 11.5324 54.085 11.4148 53.6973 11.4148C53.3691 11.4148 53.0824 11.5043 52.8372 11.6832C52.5952 11.8589 52.4063 12.1158 52.2704 12.4538C52.1345 12.7919 52.0666 13.2012 52.0666 13.6818C52.0666 14.169 52.1329 14.5833 52.2654 14.9247C52.4013 15.2661 52.5919 15.5263 52.8372 15.7053C53.0824 15.8842 53.3691 15.9737 53.6973 15.9737C53.9392 15.9737 54.1563 15.924 54.3485 15.8246C54.5441 15.7251 54.7048 15.581 54.8308 15.392C54.96 15.1998 55.0446 14.9695 55.0843 14.701H57.0829C57.0498 15.2843 56.8907 15.7981 56.6056 16.2422C56.3239 16.683 55.9345 17.0277 55.4373 17.2763C54.9402 17.5249 54.3519 17.6491 53.6724 17.6491ZM60.358 15.3026L60.3629 12.7621H60.6712L63.1172 9.86364H65.5483L62.2621 13.7017H61.7599L60.358 15.3026ZM58.4389 17.5V7.31818H60.5568V17.5H58.4389ZM63.2116 17.5L60.9645 14.174L62.3764 12.6776L65.6925 17.5H63.2116Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
