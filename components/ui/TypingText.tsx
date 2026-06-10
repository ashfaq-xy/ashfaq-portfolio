"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  className?: string;
}

export default function TypingText({ texts, className = "" }: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentChar < currentText.length) {
            setCurrentChar((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (currentChar > 0) {
            setCurrentChar((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {texts[currentTextIndex].substring(0, currentChar)}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
