"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../../atoms/Button";

const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
];

const SOCIAL_LINKS = [
    { name: "GitHub", icon: "/icons/github.svg", url: "https://github.com/erland-wt" },
    { name: "LinkedIn", icon: "/icons/linkedin.svg", url: "https://www.linkedin.com/in/erland-widyatamaka/" },
    { name: "Instagram", icon: "/icons/instagram.svg", url: "https://www.instagram.com/erlaand/" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-6 md:top-10 left-0 right-0 z-50 w-[90%] md:w-4/5 lg:w-3/5 mx-auto flex md:grid md:grid-cols-[1fr_auto] justify-between gap-2">
            
            {/* --- BAGIAN KIRI: Logo & Menu Desktop --- */}
            <div className="flex items-center justify-center md:justify-between h-14 w-14 md:h-20 md:w-auto md:px-8 shadow-md shadow-[#f0f0f0]/10 bg-[#2c334a]/80 backdrop-blur-md rounded-full md:rounded-none md:rounded-tl-full md:rounded-bl-full transition-all duration-300">
                
                <Link href="/" className="flex items-center justify-center">
                    <Image src="/icons/logo-er.svg" alt="logo" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10" style={{ width: 'auto', height: 'auto' }}/>
                </Link>

                <div className="font-krona hidden md:flex items-center gap-10 text-[10px] tracking-wider ml-10">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.name} href={link.path} className="text-white hover:text-blue-400 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="font-krona hidden md:flex items-center ml-10">
                    <Link href="#contact">               
                        <Button variant="primary" size="md" className="text-xs">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>

            {/* --- BAGIAN KANAN: Socials & Hamburger Menu --- */}
            <div className="relative flex items-center justify-center md:justify-around gap-5 h-14 w-14 md:h-20 md:w-auto md:px-8 shadow-md shadow-[#f0f0f0]/10 bg-[#2c334a]/80 backdrop-blur-md rounded-full md:rounded-none md:rounded-tr-full md:rounded-br-full transition-all duration-300">
                
                <div className="hidden md:flex items-center gap-5">
                    {SOCIAL_LINKS.map((social) => (
                        <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <Image src={social.icon} alt={social.name} width={24} height={24} />
                        </Link>
                    ))}
                </div>

                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="flex md:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
                    aria-label="Toggle Menu"
                >
                    <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ease-in-out origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ease-in-out origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* --- MOBILE DROPDOWN BUBBLE MENU --- */}
                <div 
                    className={`absolute top-[calc(100%+16px)] right-0 w-64 bg-[#1c334a]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center py-8 gap-6 md:hidden transition-all duration-300 origin-top-right ${isOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible pointer-events-none'}`}
                >
                    <div className="absolute -top-2 right-5 w-5 h-5 bg-[#1c334a]/95 border-t border-l border-white/10 rotate-45 rounded-tl-sm" />

                    <div className="flex flex-col items-center gap-6 font-krona text-xs tracking-widest w-full px-6">
                        {NAV_LINKS.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.path} 
                                onClick={closeMenu}
                                className="text-white hover:text-blue-400 transition-colors w-full text-center border-b border-white/5 pb-4 last:border-0 last:pb-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link href="#contact" onClick={closeMenu} className="w-4/5">               
                        <Button variant="primary" size="md" className="w-full text-[10px] font-krona py-3">
                            Contact Me
                        </Button>
                    </Link>

                    <div className="flex flex-col items-center gap-3 mt-2 pt-6 border-t border-white/5 w-4/5">
                        <span className="text-[9px] text-gray-400 font-krona tracking-widest uppercase mb-1">Connect</span>
                        <div className="flex flex-row justify-center gap-4 w-full">
                            {SOCIAL_LINKS.map((social) => (
                                <Link 
                                    key={social.name} 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center justify-center bg-[#2c334a] hover:bg-[#363F5C] border border-white/5 w-10 h-10 rounded-full transition-colors"
                                >
                                    <Image src={social.icon} alt={social.name} width={18} height={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    );
};