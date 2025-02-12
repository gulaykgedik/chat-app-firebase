import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import Message from "./Message";
import Arrow from "./Arrow";

const Main = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const lastMsgRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const collectionRef = collection(db, "messages");

    const q = query(
      collectionRef,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (data) => {
      const temp = [];

      data.docs.forEach((doc) => {
        temp.push(doc.data());
      });

      setMessages(temp);
    });

    return () => unsub();
  }, [room]);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];

      if (lastMsg.autor.id === auth.currentUser.uid) {
        scrollToBottom();
      } else if (isAtBottom) {
        scrollToBottom();
      }
    }
  }, [messages]);

  const scrollToBottom = () => {
    lastMsgRef.current.scrollIntoView();
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 200);
  };

  return (
    <main
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 p-3 flex flex-col gap-3 w-full overflow-y-auto"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin...</p>
        </div>
      ) : (
        messages.map((i, key) => <Message key={key} data={i} />)
      )}

      <div ref={lastMsgRef} />

      <Arrow isAtBottom={isAtBottom} handleScroll={scrollToBottom} />
    </main>
  );
};

export default Main;
