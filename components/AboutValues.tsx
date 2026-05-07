import React from "react";
import {
  HeartIcon,
  LightBulbIcon,
  HandRaisedIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    icon: HeartIcon,
    title: "People First",
    description:
      "We place human dignity at the center of every decision, ensuring respect and fairness for both employers and candidates.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and accountability in every stage of the recruitment process.",
  },
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description:
      "We embrace technology-driven recruitment solutions, including digital onboarding and smart talent matching systems.",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Mindset",
    description:
      "With operations in 30+ countries, we understand cultural diversity and the dynamics of international workforce deployment.",
  },
  {
    icon: SparklesIcon,
    title: "Excellence",
    description:
      "We maintain the highest standards in candidate quality, compliance, and client satisfaction.",
  },
  {
    icon: HandRaisedIcon,
    title: "Social Responsibility",
    description:
      "We are committed to ethical recruitment practices, fair labor standards, and sustainable community impact.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-14" data-aos="fade-up">
          <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">
            OUR VALUES
          </p>
          <h2
            className="text-4xl md:text-5xl text-brand-dark font-light mb-6"
            >
            What Drives{" "}
            <span className="italic font-bold">AskTalentRecruitment</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Our values define how we operate, how we serve, and how we grow with
            our global partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-sm p-8 flex flex-col items-start hover:border-brand-dark hover:shadow-md transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 80}>
              <value.icon className="w-10 h-10 text-brand-dark mb-5 stroke-1 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-brand-dark font-bold text-lg mb-3">
                {value.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
