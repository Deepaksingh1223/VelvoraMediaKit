import {
  RiAwardLine,
  RiSlideshow3Line,
  RiPlayCircleLine,
  RiVideoLine,
  RiGraduationCapLine,
  RiUserStarLine,
 
} from "react-icons/ri";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

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
    img: " /presentation.jpg",
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
      gradient: "from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
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