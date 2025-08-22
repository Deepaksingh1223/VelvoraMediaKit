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
} from "react-icons/ri";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
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
    img: "/certificate.jpg",
    color: "from-emerald-500 to-green-500",
    icon: <RiAwardLine className="text-white text-xl" />,
    category: "Documents",
  },
  {
    title: "Company Presentations",
    desc: "Multilingual investor pitches and company presentations.",
    badge: "6 Languages Available",
    img: "/presentation.jpg",
    color: "from-purple-500 to-pink-500",
    icon: <RiSlideshow3Line className="text-white text-xl" />,
    category: "Documents",
  },
  {
    title: "Business Plan Videos",
    desc: "Comprehensive business plan explanation videos available globally.",
    badge: "15+ Hours Content",
    img: "/business-plan.jpg",
    color: "from-blue-500 to-indigo-500",
    icon: <RiPlayCircleLine className="text-white text-xl" />,
    category: "Videos",
  },
  {
    title: "Promotional Videos",
    desc: "Engaging promotional content showcasing AI solutions and stories.",
    badge: "50K+ Views",
    img: "/promotional-video.jpg",
    color: "from-red-500 to-orange-500",
    icon: <RiVideoLine className="text-white text-xl" />,
    category: "Videos",
  },
  {
    title: "Process Training Videos",
    desc: "Step-by-step tutorials for CRM operations and workflows.",
    badge: "Interactive Learning",
    img: "/training-videos.jpg",
    color: "from-cyan-500 to-blue-500",
    icon: <RiGraduationCapLine className="text-white text-xl" />,
    category: "Videos",
  },
  {
    title: "CEO Message",
    desc: "Personal message from our CEO about vision & leadership.",
    badge: "Leadership Insights",
    img: "/ceo-message.jpg",
    color: "from-indigo-500 to-purple-500",
    icon: <RiUserStarLine className="text-white text-xl" />,
    category: "Documents",
  },
];

export const links = [
  {
    name: "Instagram",
    desc: "Follow our journey",
    href: "#",
    icon: <FaInstagram className="text-white text-2xl" />,
    gradient:
      "from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
    textColor: "text-pink-100",
  },
  {
    name: "Facebook",
    desc: "Like our page",
    href: "#",
    icon: <FaFacebookF className="text-white text-2xl" />,
    gradient: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    textColor: "text-blue-100",
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
    title: "AI Revolution with Rentelligence",
    desc: "Discover how Rentelligence is revolutionizing industries with cutting-edge AI technology.",
    img: "https://img.youtube.com/vi/abc123def45/maxresdefault.jpg",
    youtubeId: "abc123def45",
    duration: "2:30",
    views: "15.2K",
    category: "demos",
  },
  {
    title: "Client Success Story - TechCorp",
    desc: "See how TechCorp transformed their operations with Rentelligence AI solutions.",
    img: "https://img.youtube.com/vi/xyz789uvw01/maxresdefault.jpg",
    youtubeId: "xyz789uvw01",
    duration: "3:15",
    views: "8.7K",
    category: "testimonials",
  },
  {
    title: "Our Innovation Journey",
    desc: "From startup to industry leader - the Rentelligence innovation story.",
    img: "https://img.youtube.com/vi/def456ghi78/maxresdefault.jpg",
    youtubeId: "def456ghi78",
    duration: "4:45",
    views: "22.1K",
    category: "stories",
  },
  {
    title: "Product Showcase 2024",
    desc: "Complete overview of our latest AI products and features for 2024.",
    img: "https://img.youtube.com/vi/jkl012mno34/maxresdefault.jpg",
    youtubeId: "jkl012mno34",
    duration: "5:20",
    views: "31.5K",
    category: "demos",
  },
  {
    title: "Life at Rentelligence",
    desc: "Get an inside look at our company culture and what makes our team special.",
    img: "https://img.youtube.com/vi/pqr345stu67/maxresdefault.jpg",
    youtubeId: "pqr345stu67",
    duration: "3:30",
    views: "12.8K",
    category: "culture",
  },
  {
    title: "Vision for the Future",
    desc: "Our bold vision for the future of AI and how we plan to get there.",
    img: "https://img.youtube.com/vi/vwx678yza89/maxresdefault.jpg",
    youtubeId: "vwx678yza89",
    duration: "2:45",
    views: "18.9K",
    category: "stories",
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
];


export const businessVideos = [
  {
    title: "Business Model Explanation",
    desc: "Comprehensive overview of Rentelligence business model and revenue streams.",
    duration: "12:45",
    lang: "es",
    img: "/BusinessImages/BusinessModel.jpg",
  },
  {
    title: "Market Analysis & Opportunity",
    desc: "Deep dive into market size, competitive landscape, and growth opportunities.",
    duration: "15:30",
    lang: "es",
    img: "/BusinessImages/MarketAnalytics.jpg",
  },
  {
    title: "Financial Projections",
    desc: "Detailed financial forecasts, projections, and investment requirements.",
    duration: "10:20",
    lang: "es",
    img: "/BusinessImages/financial Project.jpg",
  },
  {
    title: "Team & Leadership",
    desc: "Introduction to key team members, advisors, and leadership expertise.",
    duration: "8:15",
    lang: "es",
    img: "/BusinessImages/Team.jpg",
  },
  {
    title: "Technology & Innovation",
    desc: "Overview of AI technology stack, innovation approach, and technical advantages.",
    duration: "14:10",
    lang: "es",
    img: "/BusinessImages/Technonlogy.jpg",
  },
  {
    title: "Success Stories & Case Studies",
    desc: "Real client success stories and case studies demonstrating our impact.",
    duration: "11:45",
    lang: "es",
    img: "/BusinessImages/SuccessStory.jpg",
  },
];


export const businessLanguages = [
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "hi", flag: "🇮🇳", name: "Hindi" },
  { code: "zh", flag: "🇨🇳", name: "Chinese" },
  { code: "th", flag: "🇹🇭", name: "Thai" },
  { code: "ar", flag: "🇸🇦", name: "Arabic" },
  { code: "es", flag: "🇪🇸", name: "Spanish" },
];

export const ceoVideos = [
  {
    title: "Welcome Message",
    desc: "Personal welcome from our CEO introducing Rentelligence vision and mission.",
    img: "https://readdy.ai/api/search-image?query=Professional%20CEO%20welcome%20video%20thumbnail%20with%20confident%20business%20leader%20in%20modern%20executive%20office%2C%20corporate%20welcome%20message%20presentation%2C%20CEO%20speaking%20directly%20to%20camera%20in%20premium%20business%20setting&width=400&height=225&seq=ceo-welcome&orientation=landscape",
    duration: "4:30",
  },
  {
    title: "Our Vision for AI Future",
    desc: "Deep dive into our vision for artificial intelligence and the future of technology.",
    img: "https://readdy.ai/api/search-image?query=CEO%20vision%20presentation%20video%20with%20futuristic%20AI%20technology%20backdrop%2C%20executive%20discussing%20artificial%20intelligence%20future%2C%20professional%20leadership%20video%20with%20innovative%20tech%20visuals%20and%20holographic%20elements&width=400&height=225&seq=ceo-vision&orientation=landscape",
    duration: "6:15",
  },
  {
    title: "Leadership Philosophy",
    desc: "Our CEO shares leadership principles and management philosophy that drives our success.",
    img: "https://readdy.ai/api/search-image?query=Professional%20CEO%20leadership%20video%20with%20team%20collaboration%20background%2C%20executive%20discussing%20leadership%20philosophy%2C%20corporate%20management%20presentation%20with%20inspiring%20business%20environment&width=400&height=225&seq=ceo-leadership&orientation=landscape",
    duration: "5:45",
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
        duration: "5:30",
        img: "https://readdy.ai/api/search-image?query=User%20registration%20tutorial%20video%20thumbnail%20with%20signup%20form%20interface%2C%20CRM%20registration%20process%20demonstration%2C%20professional%20training%20video%20about%20user%20onboarding%20with%20modern%20UI%20elements&width=400&height=225&seq=reg-basic&orientation=landscape",
      },
      {
        title: "Account Verification Process",
        desc: "How to verify user accounts and documents",
        duration: "3:45",
        img: "https://readdy.ai/api/search-image?query=Account%20verification%20tutorial%20video%20with%20document%20validation%20interface%2C%20professional%20training%20content%20about%20identity%20verification%2C%20CRM%20verification%20process%20demonstration%20with%20security%20elements&width=400&height=225&seq=reg-verify&orientation=landscape",
      },
    ],
  },
  {
    id: "login",
    title: "Login Process",
    icon: <RiLoginCircleLine className="text-xl" />,
    videos: [
      { title: "Login Steps", desc: "Learn secure login", duration: "4:10", img: "https://via.placeholder.com/400x225" },
      { title: "Two-Factor Setup", desc: "Enable 2FA for security", duration: "6:05", img: "https://via.placeholder.com/400x225" },
    ],
  },
  {
    id: "deposit",
    title: "Deposit Funds",
    icon: <RiMoneyDollarCircleLine className="text-xl" />,
    videos: [
      { title: "Deposit via Bank", desc: "Using bank transfer", duration: "5:00", img: "https://via.placeholder.com/400x225" },
      { title: "Deposit via UPI", desc: "Quick UPI payments", duration: "4:20", img: "https://via.placeholder.com/400x225" },
    ],
  },
  {
    id: "lease",
    title: "Lease Agent",
    icon: <RiServiceLine className="text-xl" />,
    videos: [
      { title: "Assign Lease Agent", desc: "Step-by-step leasing", duration: "7:15", img: "https://via.placeholder.com/400x225" },
      { title: "Agent Management", desc: "Handle multiple agents", duration: "6:00", img: "https://via.placeholder.com/400x225" },
    ],
  },
  {
    id: "funds",
    title: "Fund Management",
    icon: <RiFundsLine className="text-xl" />,
    videos: [
      { title: "Fund Allocation", desc: "Allocate funds properly", duration: "8:10", img: "https://via.placeholder.com/400x225" },
      { title: "Fund Tracking", desc: "Track all transactions", duration: "5:50", img: "https://via.placeholder.com/400x225" },
    ],
  },
  {
    id: "reports",
    title: "Reports & Analytics",
    icon: <RiBarChartLine className="text-xl" />,
    videos: [
      { title: "Report Dashboard", desc: "Analyze key reports", duration: "9:20", img: "https://via.placeholder.com/400x225" },
      { title: "Export Data", desc: "Download detailed analytics", duration: "6:30", img: "https://via.placeholder.com/400x225" },
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
    icon: <FaClosedCaptioning  className="text-blue-600 text-xl" />,
    title: "Subtitles",
    desc: "Closed captions available in all supported languages",
  },
  {
    icon: <RiDownloadCloudLine className="text-blue-600 text-xl" />,
    title: "Download",
    desc: "Download videos for offline viewing and presentations",
  },
];