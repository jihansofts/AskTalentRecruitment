import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HireTalentSubNav from "@/components/HireTalentSubNav";
import StaffingCTA from "@/components/StaffingCTA";
import MobileAppSection from "@/components/MobileAppSection";
import LPattern from "@/components/LPattern";
import {
  BoltIcon,
  ArrowPathIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: BoltIcon,
    title: "Rapid Workforce Scaling",
    desc: "Deploy hundreds of skilled and semi-skilled workers within weeks to meet urgent project timelines.",
  },
  {
    icon: ArrowPathIcon,
    title: "End-to-End Logistics Management",
    desc: "Complete handling of medicals, visa stamping, emigration clearance, and coordinated flight arrangements.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Cost-Efficient Hiring Solutions",
    desc: "Economies of scale in bulk recruitment reduce overall hiring costs while maintaining quality standards.",
  },
  {
    icon: ScaleIcon,
    title: "Risk-Controlled Hiring Process",
    desc: "Strict trade testing, verification, and screening processes minimize recruitment failures and absenteeism risks.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Project-Ready Workforce",
    desc: "All candidates arrive fully briefed, compliant, and prepared to begin work immediately.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Dedicated Recruitment Coordination",
    desc: "Experienced account managers oversee every stage of your large-volume recruitment requirements",
  },
];

const industries = [
  {
    title: "Construction & Infrastructure",
    desc: "Masons, steel fixers, carpenters, scaffolders, electricians, and heavy equipment operators.",
    image:
      "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    positions: "1,200+",
  },
  {
    title: "Oil & Gas Sector",
    desc: "Certified 6G welders, pipe fabricators, riggers, and mechanical fitters for complex industrial projects.",
    image: "https://images.pexels.com/photos/5961982/pexels-photo-5961982.jpeg",
    positions: "500+",
  },
  {
    title: "Facility Management",
    desc: "Kitchen staff, housekeeping teams, waiters, bellboys, and service professionals for hotels and resorts.",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
    positions: "800+",
  },
  {
    title: "Hospitality & Catering",
    desc: "Kitchen stewards, waitstaff, bellboys, and housekeeping teams for newly launched luxury hotels.",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    positions: "650+",
  },
  {
    title: "Manufacturing & Logistics",
    desc: "Assembly line workers, forklift operators, warehouse staff, packers, and logistics personnel for supply chain operations.",
    image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
    positions: "350+",
  },
];

export default function BulkDeployments() {
  return (
    <>
      <Head>
        <title>Bulk Deployments - AskTalentRecruitment</title>
        <meta
          name="description"
          content="Scale your workforce efficiently with our bulk deployment solutions from South Asia. Fully compliant, mass-recruited professionals."
        />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="Bulk Deployments"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <LPattern />
          <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
            <h1
              className="text-4xl md:text-6xl font-light mb-3 drop-shadow-lg"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}>
              Bulk <span className="font-bold italic">Deployments</span>
            </h1>
            <p className="text-sm md:text-lg drop-shadow-md text-gray-200">
              Executing large-scale recruitment campaigns with precision, speed,
              and full compliance.
            </p>
          </div>
        </div>

        <HireTalentSubNav />

        {/* Overview Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-5/12" data-aos="fade-up">
                <h2
                  className="text-4xl md:text-5xl text-brand-dark font-light mb-6"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}>
                  Scale On <span className="italic font-bold">Demand</span>
                </h2>
                <h3 className="text-lg text-brand-dark font-semibold mb-6">
                  Mass Mobilization Without Complexity
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  Whether you are launching a major infrastructure project or
                  expanding operations across multiple sites, recruiting a large
                  workforce at once requires structured planning and expert
                  execution. AskTalentRecruitment specializes in high-volume
                  international recruitment by running dedicated mass hiring
                  campaigns directly at the source countries.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                  We manage the entire employment lifecycle — from large-scale
                  interview drives and trade testing events to bulk medical
                  processing, visa coordination, and organized deployment. You
                  define the workforce requirement; we deliver the manpower.
                </p>
                <a
                  href="#"
                  className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors">
                  START A CAMPAIGN
                </a>
              </div>

              {/* Benefits Grid */}
              <div className="lg:w-7/12">
                <h4
                  className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8"
                  data-aos="fade-up">
                  Key Advantages
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
                        {item.title}
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

        {/* Industries Served */}
        <section className="py-20 md:py-28 bg-[#f7f5f2]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-12" data-aos="fade-up">
              <h2
                className="text-4xl md:text-5xl text-brand-dark font-light mb-4"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}>
                Trades
                <span className="italic font-bold"> We Supply</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
                We source from extensive talent networks across South Asia to
                fulfill large-scale workforce demands across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="bg-white group cursor-pointer border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}>
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 bg-brand-dark text-white text-xs font-bold px-3 py-1.5 tracking-wider">
                      {item.positions} Placed Annually
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl text-brand-dark font-bold mb-2"
                      style={{
                        fontFamily: "var(--font-playfair-display), serif",
                      }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Numbered Steps */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-12" data-aos="fade-up">
              <h2
                className="text-4xl md:text-5xl text-brand-dark font-light mb-4"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}>
                Campaign{" "}
                <span className="italic font-bold">Execution Roadmap</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Workforce Requirement Planning",
                  desc: "Clients define workforce categories, headcount, salary structures, and employment terms. We prepare and process official demand documentation.",
                },
                {
                  step: "02",
                  title: "Large-Scale Trade Testing Events",
                  desc: "We organize high-capacity testing facilities where candidates are evaluated simultaneously under employer supervision.",
                },
                {
                  step: "03",
                  title: "Bulk Documentation Processing",
                  desc: "Our operations team manages passports, medical clearances, visa applications, and emigration approvals in parallel workflows.",
                },
                {
                  step: "04",
                  title: "Mass Deployment & Mobilization",
                  desc: "Structured pre-departure briefings followed by coordinated group travel, including chartered flight arrangements where required.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-[#f7f5f2] p-8 border border-gray-200 hover:border-brand-dark hover:shadow-lg transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}>
                  <div
                    className="text-5xl font-bold text-gray-200 group-hover:text-brand-dark/20 transition-colors mb-4"
                    style={{
                      fontFamily: "var(--font-playfair-display), serif",
                    }}>
                    {item.step}
                  </div>
                  <h4 className="text-brand-dark font-bold text-base mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div data-aos="fade-up">
          <StaffingCTA />
        </div>
        <div data-aos="fade-up">
          <MobileAppSection />
        </div>
        <div data-aos="fade-up"></div>
      </main>
    </>
  );
}
