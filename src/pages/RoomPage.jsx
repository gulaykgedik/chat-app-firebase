import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const RoomPage = ({ setRoom }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const room = e.target[0].value.toLowerCase();

    setRoom(room);
  };

  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div className="wrapper">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-[50px_60px] rounded-[10px] flex flex-col gap-10 text-center w-[80vw] max-w-[400px]"
      >
        <h1 className="text-4xl font-semibold">Chat Odası</h1>
        <p className="text-gray-400">Hangi Odaya Gireceksiniz?</p>
        <input
          type="text"
          placeholder="ör: haftasonu"
          required
          className="border border-gray-300 rounded-md shadow-lg p-2 px-4"
        />
        <button
          className="bg-black border border-gray-300 rounded-md p-2 text-white hover:bg-gray-800 cursor-pointer "
          type="submit"
        >
          Odaya Gir
        </button>
        <button
          className="bg-red-800 border border-gray-300 rounded-md p-2 text-white hover:bg-red-700 cursor-pointer "
          type="button"
          onClick={handleLogout}
        >
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default RoomPage;
