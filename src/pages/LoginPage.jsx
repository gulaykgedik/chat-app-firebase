import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginPage = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res.user))
      .catch((err) => console.log("Giriş yaparken hata!", err));
  };

  return (
    <div className="wrapper">
      <div className="bg-white text-darkgray w-[60vw] max-md:w-[90vw] max-w-[600px] h-[450px] rounded-[10px] flex flex-col justify-center items-center gap-[50px]">
        <h1 className="text-4xl">Chat Odası</h1>
        <p className="text-gray-400">Devam Etmek İçin Giriş yapın</p>

        <button
          className="flex gap-7 items-center p-2 px-4 rounded-md border border-gray-300 shadow-lg bg-black text-white hover:bg-gray-800 transition cursor-pointer"
          onClick={handleLogin}
        >
          <img src="google.png" alt="google" className="w-[30px]" />
          <span>Google İle Giriş Yap</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
