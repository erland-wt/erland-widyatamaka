import { AboutSection } from "@/components/organisms/AboutSection/AboutSection";
import { ContactSection } from "@/components/organisms/ContactSection/ContactSection";
import HeroSection from "@/components/organisms/HeroSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
