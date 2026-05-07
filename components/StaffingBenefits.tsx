import React from "react";

import {
  GlobeAltIcon,
  ShieldCheckIcon,
  ClockIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: GlobeAltIcon,
    label: "South Asian Talent Network",
    desc: "Access to a vast pool of skilled candidates from Bangladesh, India, Nepal, and other regions.",
  },
  {
    icon: ShieldCheckIcon,
    label: "Trade-Tested Professionals",
    desc: "All candidates undergo rigorous skill assessments, interviews, and medical screening before selection.",
  },
  {
    icon: ClockIcon,
    label: "Fast & Efficient Deployment",
    desc: "Streamlined processes ensure timely mobilization from origin countries to your project site.",
  },
  {
    icon: AcademicCapIcon,
    label: "Industry Expertise",
    desc: "Specialized recruitment for construction, hospitality, healthcare, manufacturing, and facility management sectors.",
  },
  {
    icon: DocumentCheckIcon,
    label: "Complete Documentation Support",
    desc: "End-to-end handling of attestation, visa processing, emigration clearance, and compliance requirements.",
  },
  {
    icon: UserGroupIcon,
    label: "Dedicated Account Management",
    desc: "A single point of contact to manage communication, interviews, and full recruitment coordination.",
  },
];

export default function StaffingBenefits() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-5/12" data-aos="fade-up">
            <h2
              className="text-4xl md:text-5xl text-brand-dark font-light mb-6"
              >
              Why Choose{" "}
              <span className="italic font-bold">AskTalentRecruitment</span>
            </h2>
            <h3 className="text-lg md:text-xl text-brand-dark font-semibold mb-6">
              Your Trusted Global Manpower Partner
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              AskTalentRecruitment connects leading employers across the Middle
              East, Europe, and Asia with skilled, hardworking professionals
              from South Asia.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
              We simplify international recruitment by managing every stage of
              the process — from sourcing and trade testing to documentation,
              visa processing, and deployment. Our goal is simple: build your
              workforce while you focus on growing your business.
            </p>
            <a
              href="#"
              className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors">
              GET IN TOUCH
            </a>
          </div>

          <div className="lg:w-7/12">
            <h4
              className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8"
              data-aos="fade-up">
              Key Strengths
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-sm p-6 flex flex-col items-center text-center hover:border-brand-dark hover:shadow-md transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}>
                  <item.icon className="w-10 h-10 text-brand-dark mb-4 stroke-1 group-hover:scale-110 transition-transform duration-300" />
                  <h5 className="text-brand-dark font-bold text-sm mb-2">
                    {item.label}
                  </h5>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
