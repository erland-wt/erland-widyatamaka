"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography/Typography";

// Kita mendefinisikan interface datanya di sini agar rapi
export interface ProjectDetails {
    title: string;
    description: string;
    imageSrc: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    isLatest?: boolean;
    gallery: string[];
    features: string[];
    challenges: string;
    developmentPlan?: string[];
    learning: string;
}

interface ProjectModalProps {
    project: ProjectDetails;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Mencegah background website ikut ter-scroll saat modal terbuka
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div 
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div 
                className="bg-[#1e2436] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl relative flex flex-col scrollbar-thin scrollbar-thumb-[#2c334a]"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Tombol Close */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors border border-white/10"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* BAGIAN ATAS: Galeri ala Steam */}
                <div className="w-full flex flex-col bg-[#161b29] p-4 md:p-6 gap-4">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5">
                        <Image 
                            src={project.gallery[activeImageIndex] || project.imageSrc} 
                            alt={`${project.title} Preview`} 
                            fill 
                            className="object-cover object-center transition-opacity duration-300"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                    </div>
                    
                    {project.gallery.length > 1 && (
                        <div className="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-thin scrollbar-thumb-[#2c334a]">
                            {project.gallery.map((img, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setActiveImageIndex(idx)}
                                    className={`relative w-24 md:w-32 aspect-video shrink-0 rounded-lg overflow-hidden snap-start transition-all ${activeImageIndex === idx ? 'border-2 border-blue-400 opacity-100' : 'border border-transparent opacity-50 hover:opacity-100'}`}
                                >
                                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" sizes="128px" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* BAGIAN BAWAH: Konten Teks (Solid Background) */}
                <div className="p-6 md:p-10 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <Typography variant="h2" className="text-3xl font-notable text-white tracking-wide">{project.title}</Typography>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, idx) => (
                                <span key={idx} className="bg-[#2c334a] px-3 py-1 rounded-full text-xs font-krona text-gray-300 border border-white/10">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Typography variant="h3" className="text-lg font-krona text-white">About Project</Typography>
                        <Typography variant="pAkatab" className="text-[#f0f0f0]/80 text-sm leading-relaxed">
                            {project.description}
                        </Typography>
                    </div>

                    {project.features && project.features.length > 0 && (
                        <div className="flex flex-col gap-3">
                            <Typography variant="h3" className="text-lg font-krona text-blue-400">Key Features</Typography>
                            <ul className="list-disc list-inside text-[#f0f0f0]/80 text-sm leading-relaxed font-akatab flex flex-col gap-2">
                                {project.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.challenges && (
                        <div className="flex flex-col gap-3">
                            <Typography variant="h3" className="text-lg font-krona text-emerald-400">Challenges</Typography>
                            <Typography variant="pAkatab" className="text-[#f0f0f0]/80 text-sm leading-relaxed">
                                {project.challenges}
                            </Typography>
                        </div>
                    )}

                    {project.learning && (
                        <div className="flex flex-col gap-3">
                            <Typography variant="h3" className="text-lg font-krona text-purple-400">What I Learned</Typography>
                            <Typography variant="pAkatab" className="text-[#f0f0f0]/80 text-sm leading-relaxed">
                                {project.learning}
                            </Typography>
                        </div>
                    )}

                    {project.developmentPlan && (
                        <div className="flex flex-col gap-3">
                            <Typography variant="h3" className="text-lg font-krona text-yellow-400">Development Plan</Typography>
                            <ul className="list-disc list-inside text-[#f0f0f0]/80 text-sm leading-relaxed font-akatab flex flex-col gap-2">
                                {project.developmentPlan.map((plan, idx) => (
                                    <li key={idx}>{plan}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};