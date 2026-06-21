import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export const Badge = ({ children, className = " "}: BadgeProps) => {
    return (
        <div className={`flex items-center bg-white text-[#363F5C] px-10 py-4 text-sm md:text-xl font-krona tracking-wider w-3/4 rounded-tl-full rounded-br-full shadow-lg ${className}`}>
            {children}
        </div>
    );
};