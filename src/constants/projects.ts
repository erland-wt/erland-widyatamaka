import { ProjectDetails } from "@/components/molecules/ProjectModal/ProjectModal";

export const PROJECTS_DATA: ProjectDetails[] = [
    {
        title: "Full-Stack Personal Finance Management Platform",
        description: "A full-stack personal finance management application developed to provide a precise, secure, and accessible cash flow monitoring solution from anywhere. This project demonstrates the integration of a modern frontend with a robust backend architecture and cloud-based data storage.",
        imageSrc: "/images/fintracker/fintracker-mockup.webp",
        techStack: ["Next.js", "Tailwind CSS", "Express.js", "TypeScript", "PostgreSQL"],
        liveUrl: "https://fintracker-v1.vercel.app",
        githubUrl: "https://github.com/erland-wt/finance-tracker-frontend",
        isLatest: true,
        gallery: [
            "/images/fintracker/fintracker-mockup.webp",
            "/images/fintracker/fintracker-dashboard-1.webp",
            "/images/fintracker/fintracker-dashboard-2.webp",
            "/images/fintracker/fintracker-dashboard-3.webp",
            "/images/fintracker/fintracker-transaksi.webp",
            "/images/fintracker/fintracker-kategori.webp",
            "/images/fintracker/fintracker-prediksi.webp",
            "/images/fintracker/fintracker-profile-1.webp",
            "/images/fintracker/fintracker-profile-2.webp",
        ],
        features: ["Full-Stack Authentication", "AI-Powered Receipt Scanner (OCR)", "Dynamic Dashboard", "Excel Export", "Real-time analysis", "FastAPI integration", "Clean intuitive UI"],
        challenges: "The biggest challenge in developing this application was ensuring data scalability after transitioning from local storage to cloud infrastructure. I had to address data volatility in a serverless environment by integrating external asset storage systems and performing precise database migrations. Through this project, I mastered a complex full-stack workflow, from database modeling to securing API endpoints, significantly enhancing my ability to build secure and efficient systems.",
        developmentPlan: ["Integrating a simple Machine Learning model to predict users' monthly spending trends based on historical data, so the app can provide smarter budget recommendations.", "Improve account security by implementing third-party authentication (Google/GitHub Login) and Two-Factor Authentication (2FA) for tighter financial data protection.", "Develop shared-workspace functionality that allows users to collaborate in managing family or small team financial budgets with secure access control."],
        learning: "This project provided a deep understanding of production-ready full-stack architecture. I learned how to manage reliable data persistence using Prisma ORM and PostgreSQL, as well as the importance of third-party cloud service integration for efficient asset management. Furthermore, I gained real-world experience addressing cloud infrastructure challenges, such as ephemeral filesystem issues, and how to secure applications end-to-end through Environment Variables management and token-based authentication (JWT)."
    },
    {
        title: "Sentiment Analysis Platform",
        description: "An AI-based web application that can analyze sentiment from user input, ranging from a simple sentence to several long paragraphs. Built with a Python FastAPI backend and a React frontend, this platform provides real-time sentiment analysis results with an intuitive user interface.",
        imageSrc: "/images/sentiment-analyzer/sentiment-analysis-mockup.webp",
        techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "Scikit-learn"],
        liveUrl: "https://sentiment-analysis-platform.vercel.app/",
        githubUrl: "https://github.com/erland-wt/sentiment-analysis-platform",
        isLatest: true,
        gallery: [
            "/images/sentiment-analyzer/sentiment-analysis-mockup.webp",
            "/images/sentiment-analyzer/sentiment-analyzer-1.webp",
            "/images/sentiment-analyzer/sentiment-analyzer-2.webp",
        ],
        features: ["Real-time analysis", "FastAPI integration", "Clean intuitive UI"],
        challenges: "Ensuring low latency between the Python backend and React frontend during heavy model inference.",
        developmentPlan: ["Adding neutral and negative datasets to improve the quality of neutral sentence prediction", "UI improvements to make it neater and more user-friendly", "Implementing a feedback system to allow users to report incorrect sentiment predictions"],
        learning: "Learned how to effectively bridge Python-based Machine Learning models with a modern Next.js frontend."
    },
    {
        title: "Pola Resik Optima Company Profile",
        description: "A modern, highly responsive company profile website built for a security technology provider, showcasing their products and corporate identity.",
        imageSrc: "/images/pola-resik-optima/pola-resik-optima-mockup.webp",
        techStack: ["Next.js", "Tailwind CSS"],
        liveUrl: "https://polaresikoptima.com/",
        isLatest: true,
        gallery: [
            "/images/pola-resik-optima/pola-resik-optima-mockup.webp", 
            "/images/pola-resik-optima/pola-resik-optima-1.webp", 
            "/images/pola-resik-optima/pola-resik-optima-2.webp", 
        ],
        features: ["Modern design", "Responsive layout", "Fast loading times"],
        challenges: "Balancing visual appeal with performance across different devices.",
        developmentPlan: ["Implementing a CMS for easier content management", "Adding multilingual support for wider audience reach"],
        learning: "Gained experience in creating responsive web designs that work seamlessly on all screen sizes. Make the website more faster and more efficient by optimizing images and implementing lazy loading techniques."
    },
    {
        title: "Nusantara Xray Company Profile",
        description: "A modern, highly responsive company profile website built for a security technology provider, showcasing their products and corporate identity.",
        imageSrc: "/images/nusantara-xray-mockup.webp",
        techStack: ["React", "Tailwind CSS"],
        liveUrl: "https://nusantaraxray.com/",
        gallery: [
            "/images/nusantara-xray-mockup.webp",
        ],
        features: ["Modern design", "Responsive layout", "Fast loading times"],
        challenges: "Balancing visual appeal with performance across different devices.",
        learning: "Gained experience in creating responsive web designs that work seamlessly on all screen sizes."
    },
    {
        title: "Canvas and Code",
        description: "A modern, highly responsive company profile website built for a security technology provider, showcasing their products and corporate identity.",
        imageSrc: "/images/canvas-code-mockup.webp",
        techStack: ["Next.js", "Tailwind CSS"],
        liveUrl: "https://canvas-code-beta.vercel.app/",
        gallery: [
            "/images/canvas-code-mockup.webp",
        ],
        features: ["Modern design", "Responsive layout", "Fast loading times"],
        challenges: "Balancing visual appeal with performance across different devices.",
        learning: "Gained experience in creating responsive web designs that work seamlessly on all screen sizes."
    },
];