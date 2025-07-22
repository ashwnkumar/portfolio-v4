import React, { useEffect, useState } from "react";
import { quotes as data, thinkingMessages } from "../../../data/quotes.json";

const getRandomMessage = () =>
  thinkingMessages[Math.floor(Math.random() * thinkingMessages.length)];

const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [thinkingMsg, setThinkingMsg] = useState("");

  const generateQuote = () => {
    const msg = getRandomMessage();
    setThinkingMsg(msg);
    setLoading(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const random = quotes[randomIndex];
      setOutput(random);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setQuotes(data);
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      generateQuote();
    }
  }, [quotes]);

  return (
    <div className="w-full flex h-full flex-col items-center justify-between text-primary">
      <div className="flex flex-col items-start justify-start gap-2 w-full min-h-[120px]">
        <h3 className="text-lg text-secondary">Byte Sized Wisdom:</h3>
        <p className="text-xl   font-secondary">
          {loading ? (
            <span className="animate-pulse text-muted">{thinkingMsg}</span>
          ) : (
            `// ${output}`
          )}
        </p>
      </div>

      <button
        type="button"
        onClick={generateQuote}
        disabled={loading}
        className={`border border-border rounded-lg w-full text-lg py-2 transition-all duration-300 ease-in-out cursor-pointer ${loading
          ? "opacity-60 cursor-not-allowed"
          : "hover:bg-hover active:translate-y-1"
          }`}
      >
        {loading ? (
          <span className="inline-flex items-center justify-center gap-1">
            <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.2s]" />
            <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.1s]" />
            <span className="w-2 h-2 bg-current rounded-full animate-bounce" />
          </span>
        ) : (
          "Another One"
        )}
      </button>
    </div>
  );
};

export default QuoteGenerator;
