import React, { useState } from "react";
import {
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  CheckBadgeIcon,
  DocumentTextIcon,
  BuildingOffice2Icon,
  ArrowPathIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const tabs = [
  {
    id: "permanent",
    label: "OVERSEAS RECRUITMENT",
    steps: [
      {
        icon: ClipboardDocumentListIcon,
        title: "01. Requirement Analysis",
        description:
          "We gather detailed job specifications, manpower needs, and salary structures. Demand letters and embassy requirements are managed professionally.",
      },
      {
        icon: MagnifyingGlassIcon,
        title: "02. Sourcing & Screening",
        description:
          "Our local teams identify suitable candidates and conduct pre-screening, skill verification, and trade testing.",
      },
      {
        icon: UsersIcon,
        title: "03. Interview & Selection",
        description:
          "We organize structured interview sessions — virtual or in-person — giving employers full control over final hiring decisions.",
      },
      {
        icon: CheckBadgeIcon,
        title: "04. Documentation & Deployment",
        description:
          "We manage all formalities including medical tests, background checks, visa stamping, and emigration clearance, ensuring candidates are deployment-ready.",
      },
    ],
  },
  {
    id: "contract",
    label: "BULK MANPOWER DEPLOYMENT",
    steps: [
      {
        icon: DocumentTextIcon,
        title: "01. Workforce Planning",
        description:
          "We design large-scale recruitment strategies based on your project timelines and workforce requirements.",
      },
      {
        icon: BuildingOffice2Icon,
        title: "02. Trade Testing Events",
        description:
          "Multi-day skill assessments and practical evaluations conducted under employer supervision for transparent selection.",
      },
      {
        icon: ArrowPathIcon,
        title: "03. Visa & Compliance Processing",
        description:
          "Batch processing of visas, medicals, and emigration documentation to ensure smooth bulk deployment.",
      },
      {
        icon: CogIcon,
        title: "04. Group Deployment & Onboarding",
        description:
          "Coordinated travel arrangements, including group or chartered flights, along with pre-departure orientation sessions.",
      },
    ],
  },
];

export default function HiringProcess() {
  const [activeTab, setActiveTab] = useState("permanent");
  const activeData = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-12" data-aos="fade-up">
          <h2
            className="text-4xl md:text-5xl text-brand-dark font-light mb-4"
            >
            Our Recruitment
            <span className="italic font-bold">Process</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
            A transparent and structured approach from requirement to deployment
            — designed for efficiency and reliability.
          </p>
        </div>

        <div className="flex border-b border-gray-300 mb-12" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold tracking-wider transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "text-brand-dark border-brand-dark"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeData.steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-8 border border-gray-200 hover:border-brand-dark hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div
                className="absolute top-6 right-6 text-5xl font-bold text-gray-100 group-hover:text-brand-dark/10 transition-colors"
                >
                {String(index + 1).padStart(2, "0")}
              </div>
              <step.icon className="w-10 h-10 text-brand-dark mb-6 stroke-1" />
              <h4 className="text-brand-dark font-bold text-base mb-3">
                {step.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
