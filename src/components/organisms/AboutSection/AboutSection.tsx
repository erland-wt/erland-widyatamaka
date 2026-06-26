import BackgroundOrnaments from "@/components/atoms/BackgroundOrnaments";
import { Typography } from "@/components/atoms/Typography/Typography";
import { TechMarquee } from "@/components/molecules/TechMarquee/TechMarquee";
import { ProfileCard } from "@/components/molecules/ProfileCard/ProfileCard";
import { TECH_STACK_TOP, TECH_STACK_BOTTOM, ABOUT_PARAGRAPHS } from "@/constants/about";

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
                        
                        {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                            <Typography key={index} variant="pAkatab" className="text-[#f0f0f0]/80 leading-relaxed text-sm md:text-base">
                                {paragraph}
                            </Typography>
                        ))}
                    </div>

                    {/* Kolom Kanan: Bento Box (Bisa dipecah jadi Molecule nanti) */}
                    <div className="flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden">
                        <Typography variant="pAkatab" className="text-2xl font-krona text-white text-center">
                            Tech Stack
                        </Typography>

                        <TechMarquee items={TECH_STACK_TOP} direction="right" />

                        <div className="w-full">
                            <ProfileCard imageSrc="/images/erland-merah.webp" altText="Erland Profile" hasShadow={false} className="mx-auto w-fit" />
                        </div>

                        <TechMarquee items={TECH_STACK_BOTTOM} direction="left" />
                    </div>

                </div>
            </div>
        </section>
    );
};