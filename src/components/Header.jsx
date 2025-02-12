import { auth } from "../firebase";

const Header = ({ room, setRoom }) => {
  return (
    <header className="flex justify-between p-5 border border-gray-300 shadow-lg bg-stone-300">
      <p className="font-semibold"> {auth.currentUser.displayName}</p>

      <p className="font-bold text-xl">{room} </p>

      <button onClick={() => setRoom(null)} className="btn">
        Farklı Oda
      </button>
    </header>
  );
};

export default Header;
