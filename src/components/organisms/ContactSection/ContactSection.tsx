"use client";

import { useState, FormEvent } from "react";
import { Typography } from "@/components/atoms/Typography/Typography";
import Image from "next/image";

export const ContactSection = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        
        formData.append("access_key", "f3e93440-4d38-4ba5-9f59-240f911bdc66");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset(); 
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative bg-[#1e2436] w-full py-24 z-10 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image src="/icons/wave-bg.svg" alt="Wave Background" fill className="object-cover animate-float opacity-50" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* --- BAGIAN KIRI --- */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <Typography variant="h2" className="text-4xl md:text-[120px] font-notable text-white tracking-widest leading-tight">
                            GET IN <br className="hidden lg:block" /> TOUCH
                        </Typography>
                    </div>

                    {/* --- BAGIAN KANAN ---*/}
                    <div className="bg-[#1c334a]/50 border border-white/5 rounded-3xl p-8 shadow-xl backdrop-blur-sm relative overflow-hidden w-full max-w-md mx-auto lg:max-w-full">
                        
                        {/* Pesan Sukses Overlay */}
                        {status === "success" && (
                            <div className="absolute inset-0 z-20 bg-[#1c334a]/95 flex flex-col items-center justify-center text-center p-8 backdrop-blur-md">
                                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-notable text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-300 font-krona text-xs leading-relaxed mb-6">
                                    Thank you for reaching out. I will review your message and reply to your email shortly.
                                </p>
                                <button 
                                    onClick={() => setStatus("idle")}
                                    className="px-6 py-3 bg-[#2c334a] hover:bg-[#363F5C] text-white font-krona text-xs rounded-lg transition-colors border border-white/10"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="font-krona text-xs text-gray-300 ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        required
                                        placeholder="hello@example.com"
                                        className="w-full bg-[#2c334a] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-500"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="font-krona text-xs text-gray-300 ml-1">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        id="phone" 
                                        placeholder="+62 812 3456 7890"
                                        className="w-full bg-[#2c334a] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="font-krona text-xs text-gray-300 ml-1">Your Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    required
                                    rows={4}
                                    placeholder="Tell me about your project, ideas, or questions..."
                                    className="w-full bg-[#2c334a] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-500 resize-none"
                                ></textarea>
                            </div>

                            {status === "error" && (
                                <p className="text-red-400 font-krona text-xs text-center">
                                    Oops! Something went wrong. Please try again later.
                                </p>
                            )}

                            <button 
                                type="submit" 
                                disabled={status === "loading"}
                                className="w-full mt-2 bg-linear-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-akatab text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                            >
                                {status === "loading" ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};