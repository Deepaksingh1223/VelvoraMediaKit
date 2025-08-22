"use client";
import { RiArrowRightLine, RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResourceCard = ({ resource }) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (resource.title === "Legal Certificate") {
      router.push("/pages/legal-certificate");
    }

    if (resource.title === "Promotional Videos") {
      router.push("/pages/promotional-videos");
    }

    if (resource.title === "Company Presentations") {
      router.push("/pages/company-presentations");
    }

    if (resource.title === "Business Plan Videos") {
      router.push("/pages/business-plan-videos");
    }

    if (resource.title === "CEO Message") {
      router.push("/pages/ceo-messages");
    }
    if (resource.title === "Process Training Videos") {
      router.push("/pages/crm-training-videos");
    }
  };

  return (
    <div
      className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer hover:scale-[1.02] relative"
      onClick={handleCardClick}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={resource?.img}
          alt={resource?.title}
          width={50}
          height={50}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-r ${resource?.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {resource?.icon}
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
            {resource?.badge}
          </span>
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {resource?.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {resource?.desc}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 text-sm font-semibold">
              Explore Resource
            </span>
            <RiArrowRightLine className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
            <RiExternalLinkLine className="text-gray-400 group-hover:text-blue-600 text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
