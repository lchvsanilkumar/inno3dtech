"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
    words,
    duration = 1000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    // Define gradient styles for each word
    const gradientStyles = {
        "faster": {
            background: 'linear-gradient(56deg, #162CF1 0%, #A264F1 92%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
        },
        "better": {
            background: 'linear-gradient(56deg, #D5FC67 0%, #49990A 28%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
        },
        "easier": {
            background: 'linear-gradient(56deg, #990000 0%, #ECA35E 22%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
        },
    };

    const currentGradientStyle = gradientStyles[currentWord] || gradientStyles["better"];

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn(
                    "z-10 inline-block relative text-left px-2",
                    className
                )}
                key={currentWord}
            >
                {currentWord.split("").map((letter, index) => (
                    <motion.span
                        key={currentWord + index}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                        }}
                        className="inline-block"
                        style={currentGradientStyle}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
