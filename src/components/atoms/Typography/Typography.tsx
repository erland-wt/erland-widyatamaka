import { ReactNode } from 'react';

interface TypographyProps {
    children: ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'pKrona' | 'pAkatab';
    className?: string;
}

export const Typography = ({ children, variant = 'pAkatab', className = " " }: TypographyProps) => {
    const styles = {
        h1: "font-notable text-4xl md:text-7xl mb-2 font-bold text-white tracking-wider",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-medium",
        pKrona: "font-krona text-lg font-bold tracking-wider",
        pAkatab: "font-akatab text-lg font-medium tracking-wider",
    }

    const Tag = variant === "h1" ? "h1" : variant === "h2" ? "h2" : variant === "h3" ? "h3" : "p";

    return (
        <Tag className={`${styles[variant]} ${className}`}>
            {children}
        </Tag>
    )
}