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
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
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
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    name: "Facebook",
    desc: "Like our page",
    href: "https://www.facebook.com/rentelligenceai",
    icon: <FaFacebookF className="text-white text-2xl" />,
    gradient: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    textColor: "text-blue-100",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    name: "YouTube",
    desc: "Subscribe to our channel",
    href: "https://www.youtube.com/@rentelligenceai",
    icon: <FaYoutube className="text-white text-2xl" />,
    gradient: "from-red-600 to-red-700 hover:from-red-700 hover:to-red-800",
    textColor: "text-red-100",
    target: "_blank",
    rel: "noopener noreferrer"
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
  { flag: "🇫🇷", label: "French" },
  { flag: "🇻🇳", label: "Vietnamese" },
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
    {
      title: "PACE लेवल 1 चंडीगढ़ के अंदर 🚀 | Rentelligence द्वारा संचालित AI शिक्षा कार्यक्रम",
      desc: "भारत के चंडीगढ़ में आयोजित पहले PACE लेवल 1 कार्यक्रम की विशेष झलकियाँ देखें, यह एक मील का पत्थर साबित होने वाला आयोजन था जो कृत्रिम बुद्धिमत्ता की शिक्षा और भविष्य के लिए तैयार कौशल पर केंद्रित था।",
      duration: "1:32",
      img: "/pace-hindi2.jpg",
      videoUrl: "https://youtu.be/Ajtj0NJKNrY?si=h_u6KhANbKIHGkM4"
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
  ],
  FR: [
    {
      title: "Compréhension conceptuelle de Rentelligence et PACE | Explication complète en Français",
      desc: "Dans cette vidéo, nous expliquons en détail la compréhension conceptuelle de Rentelligence et du modèle PACE.",
      duration: "06:31",
      img: "/TfD4cEUTKlg-HD.jpg",
      videoUrl: "https://www.youtube.com/watch?v=TfD4cEUTKlg"
    }
  ],
   VN: [
    {
      title: "Hiểu Biết Khái Niệm Về Rentelligence và PACE | Giải Thích Chi Tiết, Dễ Hiểu Cho Người Mới",
      desc: "Trong video này, chúng ta sẽ tìm hiểu khái niệm Rentelligence và mô hình PACE một cách đơn giản, trực quan và dễ hiểu nhất.",
      duration: "06:36",
      img: "/XI33vKFwiQk-HD.jpg",
      videoUrl: "https://www.youtube.com/watch?v=XI33vKFwiQk"
    }
  ]
};


 export const businessLanguages = [
   { code: "en", flag: "🇺🇸", name: "English" },
  { code: "hi", flag: "🇮🇳", name: "Hindi" },
  { code: "mr", flag: "🇮🇳", name: "Marathi" },
  { code: "bn", flag: "🇮🇳", name: "Bengali" },
  { code: "ta", flag: "🇮🇳", name: "Tamil" },
  { code: "th", flag: "🇹🇭", name: "Thai" },
{ code: "ru", flag: "🇷🇺", name: "Russian" },
{ code: "zh", flag: "🇨🇳", name: "Chinese" }
];

export const businessVideos = [
  {

    desc: "Comprehensive overview of Rentelligence business model and revenue streams.",
    // lang: ["es", "hi", "zh", "ar", "th", "en"],
   lang: [ "hi","en", "mr", "bn", "ta"],

    languages: {
      en: {
        title: "Rentelligence Business Model Explained: Earning Through AI Technology",
        youtubeId: "yOtw9rlp2_o",
        img: "/bussinessmodal.jpg", 
        duration: "4:30",
        desc: "Comprehensive overview of Rentelligence business model and revenue streams." // Optional: alag description
      },
      hi: {
        title: "रेंटेलिजेंस व्यापार मॉडल: आय सृजन के स्रोत, कमाई के चैनल एवं विकास रणनीति",
        youtubeId: "D5fbn5nfJ5E",
        img: "/bussinessmodalhindi.jpg",
        duration: "12:39",
        desc: "रेंटेलिजेंस बिजनेस मॉडल और राजस्व धाराओं का व्यापक अवलोकन।रेंटेलिजेंस के विकेंद्रीकृत AI मार्केटप्लेस बिजनेस मॉडल, बहु-स्तरीय राजस्व धाराओं, साझेदार लाभांश संरचना और दीर्घकालिक आय सृजन रणनीतियों का व्यापक परिचय।"
      },
      mr: {
        title: "नवशिक्यांसाठी प्रशिक्षण कार्यक्रम (बीटीपी) - तृप्तीकडून",
        youtubeId: "g9dx8G6YVwQ",
        img: "/bussinessmodal1.jpg",
        duration: "12:06",
        desc: "या व्हिडिओत आम्ही रेंटेलिजन्स बघणार आहोत — जगातील पहिले विकेंद्रित AI/ML मार्केटप्लेस,जिथे तुम्ही AI एजंट भाड्याने, लीजवर किंवा खरेदी करून वास्तविक उत्पन्न मिळवू शकता."
      },
      bn: {
        title: "শুরুর দিকের প্রশিক্ষণ কর্মসূচি (বিটিপি) - তৃপ্তির তত্ত্বাবধানে", 
        youtubeId: "ObY2hPqFtPg",
        img: "/bussinessmodal1.jpg",
        duration: "11:03",
        desc: "এই ভিডিওতে, আমরা রেন্টেলিজেন্স অন্বেষণ করব — বিশ্বের প্রথম বিকেন্দ্রীকৃত AI/ML মার্কেটপ্লেস,যেখানে আপনি বাস্তব আয় তৈরি করতে AI এজেন্ট ভাড়া, লিজ বা ক্রয় করতে পারেন।"
      },
      ta: {
        title: "புதியவர்கள் பயிற்சி திட்டம் (BTP) - திருப்ப்தி மூலம்", 
        youtubeId: "10IkY68a3l8",
        img: "/bussinessmodal1.jpg",
        duration: "12:15",
        desc: "இந்த வீடியோவில், நாம் ரென்டெல்லிஜென்ஸை ஆராய்வோம் — உலகின் முதல் பரவலாக்கப்பட்ட AI/ML சந்தை,இங்கு நீங்கள் உண்மையான வருமானம் ஈட்ட AI முகவர்களை வாடகைக்கு எடுக்கலாம், குத்தகைக்கு எடுக்கலாம் அல்லது வாங்கலாம்."
      },
    },
  },
  {
    desc: "How to get started with Rentelligence platform as a business partner.",
    lang: ["en"],
    languages: {
      en: {
        title: "Getting Started Guide of Beginners Training Program ( BTP ) by Tripti",
        youtubeId: "j-PFlWWFUEY",
        img: "/bussinessmodal1.jpg",
        duration: "10:35",
        desc: " we’ll explore Rentelligence — the world’s first decentralized AI/ML marketplace,where you can rent, lease, or own AI Agents."
      }
    }
  },
   {
    desc: "How to get started with Rentelligence platform as a business partner.",
    lang: ["hi"],
    languages: {
      hi: {
        title: "रेंटेलिजेंस बेसिक प्रशिक्षण कार्यक्रम | एआई, वेब3 और बुद्धिमान एजेंटों के भविष्य में महारत हासिल करें",
        youtubeId: "3bAdQzhHKrk",
        img: "/bussinessmodal1.jpg",
        duration: "10:54",
        desc: "रेंटेलिजेंस BTP विकेंद्रीकृत AI/Web3 मार्केटप्लेस की मूलभूत समझ प्रदान करता है, जिससे प्रतिभागी विभिन्न क्षेत्रों में इंटेलिजेंट एजेंट्स का प्रभावी उपयोग कर सकें।"
      }
    }
  },
    {
    desc: "Kĥn phb khwām k̄hêācı næw khwām khid k̄hxng Rentelligence læa PACE - s̄ảrwc khwām h̄māy khwām s̄ảkhạỵ læa wiṭhī thī̀ cheụ̄̀xm yong kạb thī̀ xyū̀ xāṣ̄ạy s̄mạy h̄ım̀ læa khwām yạ̀ngyụ̄n",
    lang: ["th"],
    languages: {
      th: {
        title: "Khwām k̄hêācı cheing næwkhid keī̀yw kạb khwām c̄hlād h̄lạk h̄ælm læa PACE | thịy",
        youtubeId: "y-OH9M5Cb9A",
        img: "/y-OH9M5Cb9A-HD.jpg",
        duration: "06:27",
        desc: "Kĥn phb khwām k̄hêācı næw khwām khid k̄hxng Rentelligence læa PACE - s̄ảrwc khwām h̄māy khwām s̄ảkhạỵ læa wiṭhī thī̀ cheụ̄̀xm yong kạb thī̀ xyū̀ xāṣ̄ạy s̄mạy h̄ım̀ læa khwām yạ̀ngyụ̄n"
      }
    }
  },
    {
    desc: "В этом видео мы простым и понятным языком объясняем концептуальное понимание Rentelligence и модели PACE.Если вы хотите разобраться, как работает экосистема Rentelligence, какую роль играют AI-агенты и как модель PACE усиливает всю систему — это видео для вас!",
    lang: ["ru"],
    languages: {
      ru: {
        title: "Концептуальное понимание Rentelligence и PACE | Полный разбор системы и возможностей",
        youtubeId: "ZpozDmGgjHg",
        img: "/ZpozDmGgjHg-HD.jpg",
        duration: "07:13",
        desc: "В этом видео мы простым и понятным языком объясняем концептуальное понимание Rentelligence и модели PACE."
      }
    }
  },
    {
    desc: "利用人工智慧代理賦能未來—租賃、租用、擁有和發展 Lìyòng réngōng zhìhuì dàilǐ fù néng wèilái—zūlìn, zūyòng, yǒngyǒu hé fāzhǎn",
    lang: ["zh"],
    languages: {
      zh: {
        title: "對Rentelligence和PACE完整框架的概念理解（中文版）Duì Rentelligence hé PACE wánzhěng kuàngjià de gàiniàn lǐjiě (zhōngwén bǎn)",
        youtubeId: "Nv08tPiQxZA",
        img: "/Nv08tPiQxZA-HD.jpg",
        duration: "06:34",
        desc: "利用人工智慧代理賦能未來—租賃、租用、擁有和發展 Lìyòng réngōng zhìhuì dàilǐ fù néng wèilái—zūlìn, zūyòng, yǒngyǒu hé fāzhǎn"
      }
    }
  },

];

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
        videoUrl: "https://youtu.be/a9xZjQj-R6Y?si=LM6Wac6HwQ8bAPcd"
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
        videoUrl: "https://youtu.be/a9xZjQj-R6Y?si=LM6Wac6HwQ8bAPcd"
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
        videoUrl: "https://www.youtube.com/watch?v=ZSG25_L0-Y0"
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
        videoUrl: "https://youtu.be/knh6zaDc1bM?si=G8BhEHm4oYrI9NBJ"
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
        videoUrl: "https://youtu.be/giwtPWN4Tk0?si=Z9OeIomtlrHo7bdL"
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
        videoUrl: "https://www.youtube.com/watch?v=KwMrOmceO_s"
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
        videoUrl: "https://www.youtube.com/watch?v=oR0t15Sc_Pw"
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
