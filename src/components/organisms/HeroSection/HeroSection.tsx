import Image from "next/image";
import Button from "../../atoms/Button";
import { Badge } from "@/components/atoms/Badge/Badge";
import { Typography } from "@/components/atoms/Typography/Typography";
import { ProfileCard } from "@/components/molecules/ProfileCard/ProfileCard";
import { Typewriter } from "@/components/atoms/Typewriter/Typewriter";

export const HeroSection = () => {
    return (
        <section className="relative bg-[#2c334a] px-6 md:px-20 pt-20 min-h-screen flex items-center overflow-hidden">
            <Image src="/icons/wave-bg.svg" alt="Hero Image" fill className="z-0 object-cover animate-float" />
            <div className="relative max-w-7xl pl-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                {/* Bagian kiri: Perkenalan */}
                <div className="flex flex-col gap-6 order-2 md:order-1">
                    <Typography variant="pKrona">Hello, I am</Typography>
                    <Typography variant="h1">Erland Widyatamaka</Typography>

                    <Typography variant="pKrona" className="text-[#f0f0f0] text-lg uppercase tracking-widest">
                        Passionate about:
                    </Typography>
                    <Badge>
                        <Typewriter 
                            words={[
                                "Web Development",
                                "Machine Learning",
                                "Data Analytics"
                            ]}
                        />
                    </Badge>

                    <Typography variant="pAkatab" className="text-[#f0f0f0]/80 text-sm">
                        Engineering data-informed digital experiences through clean architecture, elegant interfaces, and smart solutions.
                    </Typography>

                    <div className="flex w-4/5 gap-2 items-center">
                        <Button variant="primary" size="lg" className="font-krona text-xs w-full rounded-r-none">
                            Get In Touch
                        </Button>
                        <Button variant="green" size="lg" className="font-krona text-xs w-full rounded-l-none">
                            View Projects
                        </Button>
                    </div>
                </div>

                {/* Bagian kanan: card */}
                <div className="order-1 md:order-2 max-w-md mx-auto rounded-xl">
                    <ProfileCard imageSrc="/images/erland-1.webp" altText="Hero Image" />
                </div>

            </div>
        </section>
    )
}