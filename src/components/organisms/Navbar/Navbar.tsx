import Link from "next/link";
// import Typography from "../../atoms/Typhography";
import Button from "../../atoms/Button";
import Image from "next/image";

export const Navbar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "#about" },
        { name: "Projects", path: "#projects" },
    ];

    return (
        <nav className="fixed top-10 left-0 right-0 z-50 w-3/5 mx-auto gap-2 grid grid-cols-[1fr_auto]">
            <div className="container h-20 mx-auto flex items-center justify-between py-4 px-8 shadow-md shadow-[#f0f0f0]/20 bg-(--navbar)/70 backdrop-blur rounded-tl-full rounded-bl-full">
                {/* Bagian kiri: Logo */}
                <Link href="/">
                    <Image src="/icons/logo-er.svg" alt="logo" width={40} height={40} />
                </Link>

                {/* Bagian tengah: Navigation Links (Hide in mobile) */}
                <div className="font-krona hidden md:flex items-center gap-10 text-[10px] tracking-wider">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className="text-white hover:text-gray-300 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Bagian kanan: CTA Button */}
                <div className="font-krona hidden md:flex items-center gap-4">
                    <Link href="#contact">               
                        <Button variant="primary" size="md" className="text-xs">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Bagian Icon Social Media */}
            <div className="bg-(--navbar)/70 backdrop-blur hidden md:flex items-center justify-around gap-5 h-20 rounded-tr-full rounded-br-full py-4 px-8 shadow-md shadow-[#f0f0f0]/20">
                <Link href="https://github.com/erland-wt" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/github.svg" alt="Social Media" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/erland-widyatamaka/" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/linkedin.svg" alt="Social Media" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/erlaand/" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/instagram.svg" alt="Social Media" width={24} height={24} />
                </Link>
            </div>

        </nav>
    )
}