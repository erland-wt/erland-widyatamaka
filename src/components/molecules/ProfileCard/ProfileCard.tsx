"use client";

import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";

interface ProfileCardProps {
    imageSrc: string;
    altText: string;
    className?: string;
    hasShadow?: boolean;
}

export const ProfileCard = ({ imageSrc, altText, className, hasShadow = true }: ProfileCardProps) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [shadow, setShadow] = useState({ x: 0, y: 20 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotateY = ((mouseX - width / 2) / (width / 2)) * 15;
        const rotateX = ((height / 2 - mouseY) / (height / 2)) * 15;

        setRotation({ x: rotateX, y: rotateY });
        
        if (hasShadow) {
            const shadowX = ((mouseX - width / 2) / (width / 2)) * -25;
            const shadowY = ((mouseY - height / 2) / (height / 2)) * -25 + 15;
            setShadow({ x: shadowX, y: shadowY });
        }
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setShadow({ x: 0, y: 20 });
    };

    return (
        <div 
            className={`flex justify-center bg-[#363F5C]/70 backdrop-blur-md rounded-xl max-w-md p-8 md:p-10 mx-auto relative overflow-hidden transition-transform duration-200 ease-out ${className || ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: "preserve-3d",
                boxShadow: hasShadow ? `${shadow.x}px ${shadow.y}px 30px rgba(255, 255, 255, 0.3)` : "none",
            }}
        >
            <div className="relative w-60 h-80 overflow-hidden rounded-lg">
                <Image 
                    src={imageSrc} 
                    alt={altText} 
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 ease-in-out" 
                />
            </div>
        </div>
    );
};