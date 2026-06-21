import Image from "next/image";
import { Typography } from "@/components/atoms/Typography/Typography";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    isLatest?: boolean; 
}

export const ProjectCard = ({ title, description, imageSrc, techStack, liveUrl, githubUrl, isLatest }: ProjectCardProps) => {
    return (
        <div className="group flex flex-col bg-[#1c334a]/50 border border-white/5 rounded-2xl overflow-hidden hover:bg-[#2c334a] transition-all duration-300 shadow-lg hover:shadow-blue-900/20 relative">
            
            {isLatest && (
                <div className="absolute top-0 right-6 z-20 bg-emerald-500 text-white text-[10px] font-akatab tracking-wider pt-4 pb-8 px-3 shadow-lg drop-shadow-md [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]">
                    LATEST
                </div>
            )}

            <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image 
                    src={imageSrc} 
                    alt={`Thumbnail of ${title}`} 
                    fill 
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
            </div>

            <div className="flex flex-col p-6 gap-4 grow">
                <div className="flex flex-col gap-2">
                    <Typography variant="h3" className="text-lg font-notable text-white tracking-wide">
                        {title}
                    </Typography>
                    <Typography variant="pAkatab" className="text-[#f0f0f0]/70 text-sm leading-relaxed line-clamp-3">
                        {description}
                    </Typography>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {techStack.map((tech, index) => (
                        <span key={index} className="bg-[#1e2436] px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-krona text-blue-400 hover:text-blue-300 transition-colors">
                            Live Demo ↗
                        </a>
                    )}
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-krona text-gray-400 hover:text-white transition-colors">
                            Source Code ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};