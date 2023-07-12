import { useEffect, useState } from "react";

const TypingText = () => {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const textToType = "$ Winai Wangthaklang";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setText(textToType.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > textToType.length) {
        clearInterval(typingInterval);
        setCursorVisible(false);
      }
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prevCursorVisible) => !prevCursorVisible);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="typing-text code">
      {text}
      {cursorVisible && <span className="cursor" />}
    </div>
  );
};

export default TypingText;
