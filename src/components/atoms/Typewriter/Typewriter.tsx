"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayDuration?: number;
}

export const Typewriter = ({ words, typingSpeed = 150, deletingSpeed = 100, delayDuration = 2000 }: TypewriterProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(word.substring(0, currentText.length + 1));

                if (currentText.length === word.length) {
                    setTimeout(() => setIsDeleting(true), delayDuration);
                }
            } else {
                setCurrentText(word.substring(0, currentText.length - 1));

                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayDuration]);

    return (
        <span className="inline-flex items-center min-w-50 md:min-w[250px]">
            {currentText}
            <span className="animate-pulse border-r-4 border-[#363F5C] ml-1 h-[2em]"></span>
        </span>
    );
};