import BackgroundOrnaments from "@/components/atoms/BackgroundOrnaments";
import { Typography } from "@/components/atoms/Typography/Typography";
import { TechMarquee } from "@/components/molecules/TechMarquee/TechMarquee";
import { ProfileCard } from "@/components/molecules/ProfileCard/ProfileCard";

const TECH_STACK_TOP = [
    { name: "HTML", src: "/icons/html-color.svg" },
    { name: "CSS", src: "/icons/css-color.svg" },
    { name: "JavaScript", src: "/icons/JavaScript-color.svg" },
    { name: "Tailwind CSS", src: "/icons/TailwindCSS-color.svg" },
    { name: "React", src: "/icons/React-color.svg" },
    { name: "Python", src: "/icons/Python-color.svg" },
    { name: "Figma", src: "/icons/Figma-color.svg" },
    { name: "Git", src: "/icons/GIT-color.svg" },
    { name: "PostgreSQL", src: "/icons/PostgreSQL-color.svg" },
    { name: "Postman", src: "/icons/Postman-color.svg" },
    { name: "Next.js", src: "/icons/Nextjs-color.svg" },
];

const TECH_STACK_BOTTOM = [
    { name: "HTML", src: "/icons/html-color.svg" },
    { name: "CSS", src: "/icons/css-color.svg" },
    { name: "JavaScript", src: "/icons/JavaScript-color.svg" },
    { name: "Tailwind CSS", src: "/icons/TailwindCSS-color.svg" },
    { name: "React", src: "/icons/React-color.svg" },
    { name: "Python", src: "/icons/Python-color.svg" },
    { name: "Figma", src: "/icons/Figma-color.svg" },
    { name: "Git", src: "/icons/GIT-color.svg" },
    { name: "PostgreSQL", src: "/icons/PostgreSQL-color.svg" },
    { name: "Postman", src: "/icons/Postman-color.svg" },
    { name: "Next.js", src: "/icons/Nextjs-color.svg" },
];

export const AboutSection = () => {
    return (
        <section id="about" className="relative bg-[#2c334a] w-full py-24 overflow-hidden">
            <BackgroundOrnaments />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12 gap-4">
                    <Typography variant="h2" className="text-3xl md:text-4xl font-notable text-white mt-4 tracking-widest">
                        About Me
                    </Typography>
                </div>

                {/* Konten Utama */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Kolom Kiri: Teks Cerita */}
                    <div className="flex flex-col gap-6">
                        <Typography variant="h3" className="text-2xl font-krona text-white">
                            Simplifying Complexity Through Design & Intelligence
                        </Typography>
                        
                        <Typography variant="pAkatab" className="text-[#f0f0f0]/80 leading-relaxed text-sm md:text-base">
                            I am a software developer with a deep passion for transforming messy, outdated interfaces into clean, modern, and highly interactive digital experiences. I believe that a great product should always leave the user with a lasting impression of simplicity and clarity.
                        </Typography>
                        
                        <Typography variant="pAkatab" className="text-[#f0f0f0]/80 leading-relaxed text-sm md:text-base">
                            Beyond the surface, my curiosity drives me to tackle intricate problems behind the scenes. I find immense satisfaction in translating complex data into easily understandable visualizations and building Machine Learning models that offer practical solutions to simplify everyday human tasks. 
                        </Typography>

                        <Typography variant="pAkatab" className="text-[#f0f0f0]/80 leading-relaxed text-sm md:text-base">
                            Ultimately, my goal is to build seamless digital solutions where aesthetic meets logic. Whether I am refining a user interface or engineering a smart algorithm, my focus remains the same: creating products that are not only beautiful to look at but also powerful and effortless to use.
                        </Typography>
                    </div>

                    {/* Kolom Kanan: Bento Box (Bisa dipecah jadi Molecule nanti) */}
                    <div className="flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden">
                        <Typography variant="pAkatab" className="text-2xl font-krona text-white text-center">
                            Tech Stack
                        </Typography>
                        {/* 1. Baris Atas: Tech Stack (Gulir Kanan) */}
                        <TechMarquee items={TECH_STACK_TOP} direction="right" />
                        {/* 2. Baris Tengah: Profile Card dengan efek 3D Tilt */}
                        <div className="w-full">
                            <ProfileCard imageSrc="/images/erland-merah.webp" altText="Erland Profile" hasShadow={false} className="mx-auto w-fit" />
                        </div>
                        {/* 3. Baris Bawah: Tech Stack (Gulir Kiri) */}
                        <TechMarquee items={TECH_STACK_BOTTOM} direction="left" />
                    </div>

                </div>
            </div>
        </section>
    );
};