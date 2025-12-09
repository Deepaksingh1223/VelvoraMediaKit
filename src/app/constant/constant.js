import {
  RiAwardLine,
  RiSlideshow3Line,
  RiPlayCircleLine,
  RiVideoLine,
  RiGraduationCapLine,
  RiUserAddLine,
  RiLoginCircleLine,
  RiMoneyDollarCircleLine,
  RiServiceLine,
  RiFundsLine,
  RiBarChartLine,
  RiHdLine,
  RiDownloadCloudLine,
  RiUserStarLine,
  RiTeamLine
} from "react-icons/ri";
import { FaInstagram, FaFacebookF, FaXTwitter,FaYoutube } from "react-icons/fa6";
import { FaClosedCaptioning } from "react-icons/fa";

export const highlights = [
  { value: "500+", label: "AI Agents Deployed" },
  { value: "50+", label: "Global Partners" },
  { value: "99.9%", label: "Uptime Reliability" },
  { value: "24/7", label: "Support Available" },
];

export const resourcesData = [
  {
    title: "Legal Certificate",
    desc: "Official company certification and legal documentation proving our registered business status.",
    badge: "Verified & Authentic",
    img: "/legal-certificate.png",
    color: "from-emerald-500 to-green-500",
    icon: <RiAwardLine className="text-white text-xl" />,
    category: "Documents",
  },
  {
    title: "Company Presentations",
    desc: "Multilingual investor pitches and company presentations.",
    badge: "6 Languages Available",
    img: "/company-presentations.png",
    color: "from-purple-500 to-pink-500",
    icon: <RiSlideshow3Line className="text-white text-xl" />,
    category: "Documents",
  },
  {
    title: "Business Plan Videos",
    desc: "Comprehensive business plan explanation videos available globally.",
    badge: "15+ Hours Content",
    img: "/business-plan.png",
    color: "from-blue-500 to-indigo-500",
    icon: <RiPlayCircleLine className="text-white text-xl" />,
    category: "Videos",
  },
  {
    title: "Promotional Videos",
    desc: "Engaging promotional content showcasing AI solutions and stories.",
    badge: "50K+ Views",
    img: "/promotional-videos.png",
    color: "from-red-500 to-orange-500",
    icon: <RiVideoLine className="text-white text-xl" />,
    category: "Videos",
  },
  {
    title: "Process Training Videos",
    desc: "Step-by-step tutorials for CRM operations and workflows.",
    badge: "Interactive Learning",
    img: "/process-training-videos.png",
    color: "from-cyan-500 to-blue-500",
    icon: <RiGraduationCapLine className="text-white text-xl" />,
    category: "Videos",
  },
  {
    title: "Pace",
    desc: "Empowering innovation through AI-driven productivity solutions.",
    badge: "Pace Leadership Insights",
    img: "/pace.png",
    color: "from-indigo-500 to-purple-500",
    icon: <RiUserStarLine className="text-white text-xl" />,
    category: "Documents",
  },
];

export const links = [
  {
    name: "Instagram",
    desc: "Follow our journey",
    href: "https://www.instagram.com/rentelligence.ai/?",
    icon: <FaInstagram className="text-white text-2xl" />,
    gradient:
      "from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
    textColor: "text-pink-100",
  },
  {
    name: "Facebook",
    desc: "Like our page",
    href: "https://www.facebook.com/rentelligenceai",
    icon: <FaFacebookF className="text-white text-2xl" />,
    gradient: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    textColor: "text-blue-100",
  },
   {
  name: "YouTube",
  desc: "Subscribe to our channel",
  href: "https://www.youtube.com/@rentelligenceai",
  icon: <FaYoutube className="text-white text-2xl" />,
  gradient: "from-red-600 to-red-700 hover:from-red-700 hover:to-red-800",
  textColor: "text-red-100",
},
  {
    name: "X (Twitter)",
    desc: "Latest updates",
    href: "#",
    icon: <FaXTwitter className="text-white text-2xl" />,
    gradient: "from-gray-800 to-black hover:from-gray-900 hover:to-gray-800",
    textColor: "text-gray-300",
  },
];

export const certificateDetails = [
  {
    title: "Company Registration",
    desc: "Official business registration certificate",
  },
  {
    title: "Legal Compliance",
    desc: "Fully compliant with regulatory requirements",
  },
  {
    title: "Verification Status",
    desc: "Verified and authenticated by authorities",
  },
];
export const videos = [
  {
    title: "Top 10 AI Tools",
    desc: "Discover the top 10 AI tools that are transforming business operations and driving innovation across industries.A practical guide to the best AI tools for marketing, analytics, customer service, and content creation - complete with real-world use cases and implementation tips.",
    img: "/100AI.jpg",
    youtubeId: "XDLThBvNw3U",
    duration: "0:33",
    category: "demos"
  },
  {
    title: "Earn Up To 220% with AI Agents! ",
    desc: "Discover how AI Agents can help you achieve up to 220% ROI by automating business processes and increasing operational efficiency. See real case studies showing 3x faster customer response times and 50% reduction in operational errors and AI Demand day by day increase.",
    img: "/Earnupto.jpg",
    youtubeId: "cCYrtBtKJOI",
    duration: "0:17",
    category: "testimonials",
  },
  {
    title: "In 20 Years, Robots Will Outnumber Humans? The Shocking Future of Humanoid AI Revealed by Elon Musk",
    desc: "Elon Musk reveals his startling prediction about humanoid robots surpassing human population in two decades. Explore the implications for society.",
    img: "/20year.jpg",
    youtubeId: "ZQK24kYKYfY",
    duration: "0:32",
    category: "stories",
  },
  {
    title: "🔥Amazon Replaces 5 Lakh Employees with AI! The Future of Work is Here 🤖",
    desc: "Amazon's massive AI overhaul replaces 500,000 jobs with artificial intelligence. Discover which roles are disappearing first, what this means for global employment, and how workers can prepare for the AI-dominated workplace of tomorrow.",
    img: "/amazonreplace.jpg",
    youtubeId: "JLfapai9Jfk",
    duration: "0:19",
    category: "demos",
  },
  {
    title: "Rentelligence: World’s 1st Decentralized AI/ML Marketplace | Buy, Lease & Rent AI Agents",
    desc: "Introducing Rentelligence - the world's first decentralized marketplace for AI and machine learning solutions. Discover how businesses can buy, lease, or rent pre-trained AI agents for any industry need without massive upfront investment.",
    img: "/worlds.jpg",
    youtubeId: "BtzB1v7rD80",
    duration: "0:26",
    category: "culture",
  },
  {
    title: "AI Replaces Jobs, Rentelligence Creates Opportunities | Future of Work 2027",
    desc: "While AI eliminates traditional jobs, Rentelligence is creating new opportunities through our AI agent marketplace. Discover how we're building a future where humans collaborate with AI to create higher-value work and universal earning potential.",
    img: "/replacejob.jpg",
    youtubeId: "Coo3gRemvOA",
    duration: "2:45",
    category: "stories",
  },
  {
    title: "AI Isn’t Just Data — It’s Imagination | Discover Rentelligence.ai",
    desc: "Move beyond algorithms and datasets. Discover how Rentelligence is redefining AI as a canvas for human creativity and imagination. Where data meets dreams, and artificial intelligence becomes artistic inspiration.",
    img: "/justreplace.jpg",
    youtubeId: "CDYEEYy_MzA",
    duration: "0:17",
    category: "culture",
  },
  {
    title: "Gibberlink Mode Explained: Game-Changing Feature or Just Hype",
    desc: "What is Gibberlink Mode and why is everyone talking about it?In this video, we break down Gibberlink Mode Explained — its purpose, features, real-world use cases, and whether it's worth enabling.If you're curious about performance enhancements, hidden features.",
    img: "/gibber.jpg",
    youtubeId: "Ri4DFDtqbBY",
    duration: "0:58",
    category: "testimonials",
  },
  {
    title: "75,000 Robots Working at Amazon! Will They Replace Humans? Robots to Run Their Warehouses!",
    desc: "Amazon has officially deployed over 75,000 robots across its warehouses — and this technology is transforming the future of eCommerce, logistics.",
    img: "/amazon.jpg",
    youtubeId: "JGyLoqJhGmE",
    duration: "0:22",
    category: "testimonials",
  },
];

export const categories = [
  { name: "All Videos", key: "all" },
  { name: "Product Demos", key: "demos" },
  { name: "Testimonials", key: "testimonials" },
  { name: "Company Culture", key: "culture" },
  { name: "Brand Stories", key: "stories" },
];

export const languages = [
  { flag: "🇺🇸", label: "English", active: true },
  { flag: "🇮🇳", label: "Hindi" },
  { flag: "🇨🇳", label: "Chinese" },
  { flag: "🇹🇭", label: "Thai" },
  { flag: "🇸🇦", label: "Arabic" },
  { flag: "🇪🇸", label: "Spanish" },
]

export const Languages = [
  { flag: "🇺🇸", label: "English", active: true },
  { flag: "🇮🇳", label: "Hindi" },
  { flag: "🇩🇪", label: "German" },
  { flag: "🇷🇺", label: "Russian" },
  { flag: "🇸🇦", label: "Arabic" },
  { flag: "🇪🇸", label: "Spanish" },
]

export const ceoVideos = {
  en: [
    {
      title: "Conceptual Understanding of Rentelligence and PACE | Complete Framework Explained in English",
      desc: "Learn about the complete framework and conceptual understanding of Rentelligence and PACE",
      duration: "06:35",
      img: "/pace-english.jpg",
      videoUrl: "https://www.youtube.com/watch?v=qz-SmV0VzLA"
    },

    {
      title: "Glimpses and Reviews from the first PACE Level 1 program in Lucknow India 🇮🇳",
      desc: "Watch highlights and participant reviews from the inaugural PACE Level 1 training program held in Lucknow, India. See firsthand experiences and feedback from attendees.",
      duration: "02:22",
      img: "/lkopace.jpg",
      videoUrl: "https://youtu.be/_XwnbglDJFI?si=4uMNMsFV3Bq1IfX6"
    },
  ],
  hi: [
    {
      title: "Rentelligence और PACE की संकल्पनात्मक समझ | Complete Concept Explained in Hindi",
      desc: "Rentelligence और PACE की पूरी अवधारणा और ढांचे को समझें",
      duration: "07:39",
      img: "/pace-hindi.jpg",
      videoUrl: "https://www.youtube.com/watch?v=sW5eNoTO5D0&list=PL-xvOSUdBpduSuBaBEGx2zSAWh0OI6ptm&index=6"
    },
  ],
  ar: [
    {
      title: "الفهم المفاهيمي لـ Rentelligence و PACE | شرح شامل بطريقة مبسّطة",
      desc: "تعرف على الإطار الكامل والفهم المفاهيمي لـ Rentelligence و PACE",
      duration: "07:32",
      img: "/pace-arabic.jpg",
      videoUrl: "https://www.youtube.com/watch?v=4FUyDTriCXQ&list=PL-xvOSUdBpduSuBaBEGx2zSAWh0OI6ptm&index=5"
    },
  ],
  de: [
    {
      title: "Konzeptuelles Verständnis von Rentelligence und PACE | Klare Erklärung für Anfänger",
      desc: "Ein vollständiges Verständnis des Rentelligence- und PACE-Rahmens und der zugrunde liegenden Konzepte",
      duration: "06:49",
      img: "/pace-german.jpg",
      videoUrl: "https://www.youtube.com/watch?v=qG2ufD1--0I&list=PL-xvOSUdBpduSuBaBEGx2zSAWh0OI6ptm"
    }
  ],
  ru: [
    {
      title: "Концептуальное понимание Rentelligence и PACE | Полный разбор системы и возможностей",
      desc: "Изучение структуры и концептуального понимания Rentelligence и PACE",
      duration: "07:24",
      img: "/pace-russian.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ZpozDmGgjHg&list=PL-xvOSUdBpduSuBaBEGx2zSAWh0OI6ptm&index=3"
    }
  ],
  es: [
    {
      title: "Comprensión Conceptual de Rentelligence y PACE | Marco Completo Explicado",
      desc: "Aprende sobre el marco completo y la comprensión conceptual de Rentelligence y PACE",
      duration: "07:24",
      img: "/pace-spanish.jpg",
      videoUrl: "https://www.youtube.com/watch?v=l7-bE4pBOZE&list=PL-xvOSUdBpduSuBaBEGx2zSAWh0OI6ptm&index=4"
    }
  ]
};

export const businessLanguages = [
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "hi", flag: "🇮🇳", name: "Hindi" },
  { code: "zh", flag: "🇨🇳", name: "Chinese" },
  { code: "th", flag: "🇹🇭", name: "Thai" },
  { code: "ar", flag: "🇸🇦", name: "Arabic" },
  { code: "es", flag: "🇪🇸", name: "Spanish" },
];

export const businessVideos = [
  {
  
  desc: "Comprehensive overview of Rentelligence business model and revenue streams.",
  lang: ["es", "hi", "zh", "ar", "th", "en"],
  
  // Har language ka alag data
  languages: {
    en: {
      title: "Business Model Explanation",
      youtubeId: "yOtw9rlp2_o",
      img: "/bussinessmodal.jpg", // English image
      duration: "4:30",
      desc: "Comprehensive overview of Rentelligence business model and revenue streams." // Optional: alag description
    },
    hi: {
      title: "व्यापार मॉडल स्पष्टीकरण",
      youtubeId: "D5fbn5nfJ5E",
      img: "/bussinessmodalhindi.jpg", 
      duration: "12:39", 
      desc: "रेंटेलिजेंस बिजनेस मॉडल और राजस्व धाराओं का व्यापक अवलोकन।"
    },
   es: {
      title: "Explicación del Modelo de Negocio", // Spanish title
      youtubeId: "yOtw9rlp2_o",
      img: "/bussinessmodal.jpg",
      duration: "4:30",
      desc: "Descripción general del modelo de negocio y flujos de ingresos de Rentelligence."
    },
    zh: {
      title: "商业模式说明", // Chinese title
      youtubeId: "yOtw9rlp2_o",
      img: "/bussinessmodal.jpg",
      duration: "4:30",
      desc: "Rentelligence商业模式和收入流的全面概述。"
    },
    ar: {
      title: "شرح نموذج العمل", // Arabic title
      youtubeId: "yOtw9rlp2_o",
      img: "/bussinessmodal.jpg",
      duration: "4:30",
      desc: "نظرة شاملة لنموذج عمل Rentelligence ومسارات الإيرادات."
    },
    th: {
      title: "คำอธิบายโมเดลธุรกิจ", // Thai title
      youtubeId: "yOtw9rlp2_o",
      img: "/bussinessmodal.jpg",
      duration: "4:30",
      desc: "ภาพรว"
  }
},
  }
];
  // {
  //   title: "Market Analysis & Opportunity",
  //   desc: "Deep dive into market size, competitive landscape, and growth opportunities.",
  //   duration: "15:30",
  //   lang: ["es", "hi", "zh", "ar", "th", "en"],
  //   img: "/BusinessImages/MarketAnalytics.jpg",
  //   youtubeId: "kXYiU_JCYtU",
  // },
  // {
  //   title: "Financial Projections",
  //   desc: "Detailed financial forecasts, projections, and investment requirements.",
  //   duration: "10:20",
  //   lang: ["es", "hi", "zh", "ar", "th", "en"],
  //   img: "/BusinessImages/financial Project.jpg",
  //   youtubeId: "JGwWNGJdvx8",
  // },
  // {
  //   title: "Team & Leadership",
  //   desc: "Introduction to key team members, advisors, and leadership expertise.",
  //   duration: "8:15",
  //   lang: ["es", "hi", "zh", "ar", "th", "en"],
  //   img: "/BusinessImages/Team.jpg",
  //   youtubeId: "3JZ_D3ELwOQ",
  // },
  // {
  //   title: "Technology & Innovation",
  //   desc: "Overview of AI technology stack, innovation approach, and technical advantages.",
  //   duration: "14:10",
  //   lang: ["es", "hi", "zh", "ar", "th", "en"],
  //   img: "/BusinessImages/Technonlogy.jpg",
  //   youtubeId: "9bZkp7q19f0",
  // },
  // {
  //   title: "Success Stories & Case Studies",
  //   desc: "Real client success stories and case studies demonstrating our impact.",
  //   duration: "11:45",
  //   lang: ["es", "hi", "zh", "ar", "th", "en"],
  //   img: "/BusinessImages/SuccessStory.jpg",
  //   youtubeId: "tVj0ZTS4WF4",
  // },


// export const ceoVideos = [
//   {
//     title: "Welcome Message",
//     desc: "Personal welcome from our CEO introducing Rentelligence vision and mission.",
//     img: "https://readdy.ai/api/search-image?query=Professional%20CEO%20welcome%20video%20thumbnail%20with%20confident%20business%20leader%20in%20modern%20executive%20office%2C%20corporate%20welcome%20message%20presentation%2C%20CEO%20speaking%20directly%20to%20camera%20in%20premium%20business%20setting&width=400&height=225&seq=ceo-welcome&orientation=landscape",
//     duration: "4:30",
//   },
//   {
//     title: "Our Vision for AI Future",
//     desc: "Deep dive into our vision for artificial intelligence and the future of technology.",
//     img: "https://readdy.ai/api/search-image?query=CEO%20vision%20presentation%20video%20with%20futuristic%20AI%20technology%20backdrop%2C%20executive%20discussing%20artificial%20intelligence%20future%2C%20professional%20leadership%20video%20with%20innovative%20tech%20visuals%20and%20holographic%20elements&width=400&height=225&seq=ceo-vision&orientation=landscape",
//     duration: "6:15",
//   },
//   {
//     title: "Leadership Philosophy",
//     desc: "Our CEO shares leadership principles and management philosophy that drives our success.",
//     img: "https://readdy.ai/api/search-image?query=Professional%20CEO%20leadership%20video%20with%20team%20collaboration%20background%2C%20executive%20discussing%20leadership%20philosophy%2C%20corporate%20management%20presentation%20with%20inspiring%20business%20environment&width=400&height=225&seq=ceo-leadership&orientation=landscape",
//     duration: "5:45",
//   },
// ];

export const modules = [
  {
    id: "registration",
    title: "New Registration",
    icon: <RiUserAddLine className="text-xl" />,
    videos: [
      {
        title: "Basic User Registration",
        desc: "Step-by-step guide to registering new users",
        duration: "1:06",
        img: "/userregistration.jpg",
        videoUrl:"https://youtu.be/a9xZjQj-R6Y?si=LM6Wac6HwQ8bAPcd"
      },
    ],
  },
  {
    id: "login",
    title: "Login Process",
    icon: <RiLoginCircleLine className="text-xl" />,
    videos: [
      {
        title: "Login Steps",
        desc: "Learn secure login",
        duration: "1:06",
        img: "/userregistration.jpg",
        videoUrl:"https://youtu.be/a9xZjQj-R6Y?si=LM6Wac6HwQ8bAPcd"
      },
    ],
  },
  {
    id: "deposit",
    title: "Self Deposit Funds",
    icon: <RiMoneyDollarCircleLine className="text-xl" />,
    videos: [
      {
        title: "Self Deposit",
        desc: "Using Self Deposit",
        duration: "0:58",
        img: "/deposit.jpg",
        videoUrl:"https://www.youtube.com/watch?v=ZSG25_L0-Y0"
      },
    ],
  },
  {
    id: "lease",
    title: "Lease Agent",
    icon: <RiServiceLine className="text-xl" />,
    videos: [
      {
        title: "Assign Lease Agent",
        desc: "Step-by-step leasing",
        duration: "1:54",
        img: "/leaseagent.jpg",
        videoUrl:"https://youtu.be/knh6zaDc1bM?si=G8BhEHm4oYrI9NBJ"
      },
    ],
  },
  {
    id: "funds",
    title: "Fund Management",
    icon: <RiFundsLine className="text-xl" />,
    videos: [
      {
        title: "Fund Allocation",
        desc: "Allocate funds properly",
        duration: "1:10",
        img: "/funddeposit.jpg",
        videoUrl:"https://youtu.be/giwtPWN4Tk0?si=Z9OeIomtlrHo7bdL"
      },
    ],
  },
  {
    id: "reports",
    title: "Reports & Analytics",
    icon: <RiBarChartLine className="text-xl" />,
    videos: [
      {
        title: "Analytic",
        desc: "Understanding reports and analytics for agents in CRM",
        duration: "2:24",
        img: "/analytic.jpg",
        videoUrl:"https://www.youtube.com/watch?v=KwMrOmceO_s"
      },
    ],
  },
  {
    id: "affilate",
    title: "Affilate & Bussiness Team",
    icon: <RiTeamLine className="text-xl" />,
    videos: [
      {
        title: "Business Dashboard & Team Structure Explained",
        desc: "Analyze team",
        duration: "1:30",
        img: "/affilate.jpg",
        videoUrl:"https://www.youtube.com/watch?v=oR0t15Sc_Pw"
      },
      
    ],
  },
];

export const features = [
  {
    icon: <RiHdLine className="text-blue-600 text-xl" />,
    title: "HD Quality",
    desc: "All videos available in high definition for crystal clear viewing",
  },
  {
    icon: <FaClosedCaptioning className="text-blue-600 text-xl" />,
    title: "Subtitles",
    desc: "Closed captions available in all supported languages",
  },
  {
    icon: <RiDownloadCloudLine className="text-blue-600 text-xl" />,
    title: "Download",
    desc: "Download videos for offline viewing and presentations",
  },
];
