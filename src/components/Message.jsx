import { auth } from "../firebase";
import getUserColor from "../utils/getUserColor";

const Message = ({ data }) => {
  if (data.autor.id === auth.currentUser.uid) {
    return (
      <p className="bg-black text-white rounded-[7px_7px_0_7px] self-end message">
        {data.text}
      </p>
    );
  }

  return (
    <div className="flex items-start gap-1">
      <img src={data.autor.photo} className="size-[40px] rounded-full" />

      <div className="flex flex-col gap-1 w-full">
        <span
          className="font-bold whitespace-nowrap text-zinc-700"
          style={{
            color: getUserColor(data.autor),
          }}
        >
          {data.autor.name}
        </span>
        <p className="message text-zinc-800 bg-zinc-200 rounded-[0_7px_7px_7px]">
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
