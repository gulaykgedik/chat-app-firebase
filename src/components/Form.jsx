import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

const Form = ({ room }) => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || text.trim() === "") return;

    const collectionRef = collection(db, "messages");

    await addDoc(collectionRef, {
      text,
      room,
      autor: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    setText("");
    setIsOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 border border-gray-300 shadow-lg flex justify-center gap-3 bg-stone-300"
    >
      <input
        type="text"
        placeholder="Mesajınızı yazınız..."
        className="border border-gray-400 shadow-sm p-2 px-4 rounded-md w-1/2 bg-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="relative">
        <div className="absolute top-[-470px] right-[-150px]">
          <EmojiPicker
            open={isOpen}
            onEmojiClick={(e) => setText(text + e.emoji)}
            theme="dark"
          />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="btn text-xl"
        >
          😊
        </button>
      </div>
      <button type="submit" className="btn">
        Gönder
      </button>
    </form>
  );
};

export default Form;
