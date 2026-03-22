"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export const TypingText = ({
  text,
  speed = 20,
  onComplete
}: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="whitespace-pre-line"
    >
      {displayed}
    </motion.p>
  );
};