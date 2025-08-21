
import React from "react";
import { 
  FiArrowLeft, 
  FiAward, 
  FiCheck, 
  FiFileText, 
  FiDownload, 
  FiInfo 
} from "react-icons/fi";
import Link from "next/link";

const LegalCertificate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-emerald-600 transition-colors mb-6"
          >
            <FiArrowLeft className="mr-2" /> Back to Media Kit
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Legal Certificate
          </h1>
          <p className="text-xl text-gray-600">
            Official business registration and certification documents
          </p>
        </div>

        {/* Certificate Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-96 bg-gradient-to-r from-emerald-500 to-green-500">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiAward className="text-6xl" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Official Business Certificate
                </h2>
                <p className="text-xl text-emerald-100">
                  Verified and Authenticated Documentation
                </p>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Certificate Details */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Certificate Details
                </h3>
                <div className="space-y-4">
                  {[
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
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                        <FiCheck className="text-emerald-600 text-sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Preview */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Certificate Preview
                </h3>
                <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <FiFileText className="text-4xl text-gray-400 mb-4 mx-auto" />
                    <p className="text-gray-600 mb-4">Official certificate document</p>
                    <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer flex items-center justify-center mx-auto">
                      <FiDownload className="mr-2" /> View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Authenticity Section */}
            <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <FiInfo className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Certificate Authenticity
                  </h4>
                  <p className="text-gray-700 mb-4">
                    This certificate serves as official proof of Rentelligence&apos;s
                    legal business status and regulatory compliance. It can be
                    used for verification purposes with partners, clients, and
                    regulatory bodies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Verified", "Authentic", "Official"].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalCertificate;
