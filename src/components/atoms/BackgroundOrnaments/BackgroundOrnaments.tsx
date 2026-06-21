import Image from "next/image";

// 1. Simpan semua konfigurasi gambar di dalam Array ini
const ORNAMENTS_DATA = [
    { src: "/icons/kotak-bg-1.svg", size: 120, position: "top-10 left-25 rotate-70", delay: "0s" },
    { src: "/icons/css-bg.svg", size: 50, position: "top-90 left-25 rotate-20", delay: "1s" },
    { src: "/icons/html-bg.svg", size: 50, position: "top-20 left-90 -rotate-20", delay: "1.5s" },
    { src: "/icons/kotak-bg-1.svg", size: 150, position: "top-10 right-25 -rotate-12", delay: "1s" },
    { src: "/icons/js-bg.svg", size: 50, position: "top-20 right-90 -rotate-20", delay: "1.5s" },
    { src: "/icons/tailwind-bg.svg", size: 70, position: "top-70 right-25 -rotate-20", delay: "1.5s" },
    { src: "/icons/kotak-bg-1.svg", size: 120, position: "bottom-10 left-25 rotate-45", delay: "2s" },
    { src: "/icons/kotak-bg-1.svg", size: 100, position: "bottom-10 right-25 rotate-6", delay: "1.5s" },
    { src: "/icons/react-bg.svg", size: 70, position: "bottom-70 right-25 -rotate-20", delay: "1s" },
    { src: "/icons/python-bg.svg", size: 70, position: "bottom-20 right-80 -rotate-20", delay: "2s" },
    { src: "/icons/postgreSQL-bg.svg", size: 70, position: "bottom-15 right-150 rotate-20", delay: "1.5s" },
    { src: "/icons/postman-bg.svg", size: 70, position: "bottom-15 left-100", delay: "1.5s" },
];

export const BackgroundOrnaments = () => {
    return (
        <>
            {/* 2. Lakukan perulangan (map) untuk merender gambar secara otomatis */}
            {ORNAMENTS_DATA.map((item, index) => (
                <Image
                    key={index}
                    src={item.src}
                    alt={`bg-ornament-${index}`}
                    width={item.size}
                    height={item.size}
                    className={`absolute z-0 animate-float pointer-events-none ${item.position}`}
                    style={item.delay !== "0s" ? { animationDelay: item.delay } : undefined}
                />
            ))}
        </>
    );
};