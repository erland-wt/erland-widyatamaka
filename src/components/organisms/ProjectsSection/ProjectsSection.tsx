"use client";

import { useState } from "react";
import { Typography } from "@/components/atoms/Typography/Typography";
import { ProjectCard } from "@/components/molecules/ProjectCard/ProjectCard";
import BackgroundOrnaments from "@/components/atoms/BackgroundOrnaments";
import { ProjectModal, ProjectDetails } from "@/components/molecules/ProjectModal/ProjectModal";
import { PROJECTS_DATA } from "@/constants/projects";

export const ProjectsSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(PROJECTS_DATA.length / itemsPerPage);

    const currentProjects = PROJECTS_DATA.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <section id="projects" className="relative bg-[#1e2436] w-full py-24 overflow-hidden">
            <BackgroundOrnaments />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <Typography variant="h2" className="text-3xl md:text-4xl font-notable text-white mt-4 tracking-widest">
                        Featured Projects
                    </Typography>
                    <Typography variant="pAkatab" className="text-[#f0f0f0]/70 max-w-2xl mt-2 text-sm md:text-base">
                        A collection of digital solutions I have engineered, ranging from scalable web platforms and agency profiles to intelligent data-driven applications.
                    </Typography>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProjects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            techStack={project.techStack}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                            isLatest={project.isLatest}
                            gallery={project.gallery}
                            features={project.features}
                            challenges={project.challenges}
                            learning={project.learning}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-6 mt-16">
                        
                        {/* Tombol Panah Kiri */}
                        <button 
                            onClick={handlePrev} 
                            disabled={currentPage === 1}
                            className={`p-3 rounded-full border transition-all ${
                                currentPage === 1 
                                ? "border-white/10 text-white/20 cursor-not-allowed" 
                                : "border-white/30 text-white hover:bg-white/10 hover:border-white"
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Indikator Angka Paging */}
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, idx) => {
                                const pageNumber = idx + 1;
                                return (
                                    <button 
                                        key={idx} 
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`w-10 h-10 rounded-lg font-krona text-xs transition-colors ${
                                            currentPage === pageNumber 
                                            ? "bg-blue-500 text-white" 
                                            : "bg-[#2c334a] text-gray-400 hover:bg-[#363F5C] hover:text-white"
                                        }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Tombol Panah Kanan */}
                        <button 
                            onClick={handleNext} 
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-full border transition-all ${
                                currentPage === totalPages 
                                ? "border-white/10 text-white/20 cursor-not-allowed" 
                                : "border-white/30 text-white hover:bg-white/10 hover:border-white"
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                    </div>
                )}
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
};