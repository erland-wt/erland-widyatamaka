import Image from "next/image";

interface TechItems {
    name: string;
    src: string;
}

interface TechMarqueeProps {
    items: TechItems[];
    direction?: "left" | "right";
}

export const TechMarquee = ({ items, direction = "left" }: TechMarqueeProps) => {
    const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

    return (
        <div className="flex overflow-hidden relative w-full bg-[#1c334a]/50 border border-white/5 rounded-2xl py-4">
            <div className={`flex w-max min-w-full shrink-0 gap-6 px-6 items-center ${animationClass}`}>
                {[...items, ...items].map((item, index) => (
                    <div 
                        key={index} 
                        className="flex items-center justify-center bg-[#2c334a] w-14 h-14 rounded-xl border border-white/10 shadow-sm shrink-0 hover:border-blue-400/50 transition-colors"
                        title={item.name}
                    >
                        <Image 
                            src={item.src} 
                            alt={item.name} 
                            width={32} 
                            height={32} 
                            className="object-contain"
                        />
                    </div>
                ))}

            </div>
        </div>
    );
};