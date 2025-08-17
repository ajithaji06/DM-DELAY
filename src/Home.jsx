import React, { useState } from "react";

const Home = () => {
  const [message, setmessage] = useState("");
  const [delay, setdelay] = useState(10);
  const [issent, setissent] = useState(false);
  const [timeoutid, settimeoutid] = useState(null);
  const [messagesent, setmessagesent] = useState("");

  const handlecancel = () => {
    if (timeoutid) clearTimeout(timeoutid);
    setissent(false);
    setmessage("");
  };

  const handlesend = () => {
    setissent(true);
    const id = setTimeout(() => {
      setmessagesent(message);
      setmessage("");
      setissent(false);
    }, delay * 500);
    settimeoutid(id);
  };

  return (
    <div className="w-[350px] min-h-[450px] bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col rounded-3xl shadow-sm p-6 gap-4 items-center">
      <h1 className="text-3xl font-extrabold text-slate-800 tracking-wide drop-shadow-sm">
        DM DELAY
      </h1>

      {/* Textarea */}
      <textarea
        onChange={(e) => setmessage(e.target.value)}
        className="bg-white w-full h-24 p-3 rounded-xl text-black resize-none border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
        value={message}
        placeholder="Enter your message..."
      />

      {/* Delay input */}
      <input
        className="bg-white w-full h-12 px-3 rounded-xl border border-slate-300 text-black focus:ring-2 focus:ring-blue-400 outline-none transition disabled:opacity-60"
        value={delay}
        disabled={issent}
        placeholder="Set the delay time"
        onChange={(e) => setdelay(e.target.value)}
        type="number"
        min="1"
      />

      {/* Buttons */}
      {!issent ? (
        <button
          onClick={handlesend}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full h-12 rounded-2xl font-semibold shadow-md transition-all duration-200"
        >
          Send Message
        </button>
      ) : (
        <button
          onClick={handlecancel}
          className="bg-red-500 hover:bg-red-600 text-white w-full h-12 rounded-2xl font-semibold shadow-md transition-all duration-200"
        >
          Cancel Message
        </button>
      )}

      {/* Message received box */}
      <div className="bg-white w-full min-h-[80px] p-3 rounded-xl shadow-inner border border-slate-300 text-black">
        <p className="font-medium text-slate-600">Message received:</p>
        <span className="block text-slate-800 font-semibold mt-1">
          {messagesent || "—"}
        </span>
      </div>
    </div>
  );
};

export default Home;
