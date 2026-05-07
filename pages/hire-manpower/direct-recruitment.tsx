import Head from "next/head";
import Image from "next/image";
import HireTalentSubNav from "@/components/HireTalentSubNav";
import StaffingCTA from "@/components/StaffingCTA";
import MobileAppSection from "@/components/MobileAppSection";
import LPattern from "@/components/LPattern";
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: CheckBadgeIcon,
    title: "Rigorous Trade Testing",
    desc: "Comprehensive technical and practical assessments conducted before final shortlisting.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Medical & Background Verification",
    desc: "Approved medical examinations (GAMCA/Wafid) along with police clearance and background checks.",
  },
  {
    icon: AcademicCapIcon,
    title: "Specialist Talent Sourcing",
    desc: "Dedicated recruitment teams focused on both skilled white-collar professionals and experienced blue-collar trades.",
  },
  {
    icon: GlobeAltIcon,
    title: "South Asian Talent Access",
    desc: "Direct sourcing from a strong talent network across Bangladesh, India, Nepal, and Sri Lanka.",
  },
  {
    icon: UserGroupIcon,
    title: "Interview Facilitation",
    desc: "Well-equipped interview facilities and virtual systems for smooth employer-led selection processes.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Visa & Emigration Management",
    desc: "Complete handling of visa stamping, embassy processing, BMET/Protector compliance, and travel arrangements.",
  },
];

const processSteps = [
  {
    step: "01",
    title: " Demand & Documentation",
    desc: "Clients provide required documents including Demand Letter and Power of Attorney. We ensure proper embassy authentication and legal processing to initiate recruitment.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    step: "02",
    title: " Sourcing & Pre-Screening",
    desc: "We activate targeted recruitment campaigns and local networks to attract large applicant pools, followed by strict screening to shortlist only qualified candidates.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
  },
  {
    step: "03",
    title: "Client Interviews & Selection",
    desc: "Employers conduct final interviews either onsite at our facilities or through virtual platforms. Final selection remains fully in your control.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
  {
    step: "04",
    title: " Deployment & Onboarding",
    desc: "Selected candidates are guided through medical checks, visa stamping, and emigration clearance before being deployed directly to your project site.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
  },
];

const successCards = [
  {
    title: "Healthcare Sector",
    location: "Saudi Arabia",
    stat: "120+ Nurses",
    desc: "Deployed 120+ registered nurses across 8 hospitals in Riyadh within 6 weeks, managing full licensing and documentation requirements.",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
  },
  {
    title: "Construction Sector",
    location: "UAE",
    stat: "85+ Engineer",
    desc: "Placed 85 civil and MEP engineers for major infrastructure developments across Dubai and Abu Dhabi within 12 months.",
    image:
      "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
  },
  {
    title: "Hospitality Sector",
    location: "Qatar",
    stat: "200+ Staff",
    desc: "Supplied 200+ hospitality professionals for three luxury hotel openings in Doha, including chefs, supervisors, and front-of-house staff.",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
  },
];

export default function DirectRecruitment() {
  return (
    <>
      <Head>
        <title>Direct Recruitment - AskTalentRecruitment</title>
        <meta
          name="description"
          content="Secure reliable South Asian manpower. We source, screen, process, and deploy top-tier professionals seamlessly for your international operations."
        />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Direct Recruitment"
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
              >
              Direct <span className="font-bold italic">Recruitment</span>
            </h1>
            <p className="text-sm md:text-lg drop-shadow-md text-gray-200">
              Your gateway to skilled, reliable, and dedicated talent from South
              Asia.
            </p>
          </div>
        </div>

        <HireTalentSubNav />

        {/* Overview Section - Two Column */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-5/12" data-aos="fade-up">
                <h2
                  className="text-4xl md:text-5xl text-brand-dark font-light mb-6"
                  >
                  Source Reliable{" "}
                  <span className="italic font-bold">Talent</span>
                </h2>
                <h3 className="text-lg text-brand-dark font-semibold mb-6">
                  Hire With Confidence
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  Our direct recruitment service is designed to seamlessly
                  connect international employers with qualified professionals
                  and skilled workers from South Asia.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  Every candidate goes through a strict multi-stage evaluation
                  process, including technical trade testing, background
                  verification, medical clearance, and full visa compliance.
                  This ensures you receive job-ready professionals with minimal
                  administrative burden. From certified engineers to experienced
                  technical and industrial workers, we ensure candidates arrive
                  fully prepared to contribute from day one.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="lg:w-7/12">
                <h4
                  className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8"
                  data-aos="fade-up">
                  The AskTalentRecruitment Standard
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {benefits.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 p-6 flex flex-col hover:border-brand-dark hover:shadow-md transition-all duration-300 group"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}>
                      <item.icon className="w-8 h-8 text-brand-dark mb-4 stroke-1 group-hover:scale-110 transition-transform duration-300" />
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

        {/* Process Section with Images */}
        <section className="py-20 md:py-28 bg-[#f7f5f2]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div
              className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
              data-aos="fade-up">
              <h2
                className="text-4xl md:text-5xl text-brand-dark font-light mb-6"
                >
                End-to-End Recruitment{" "}
                <span className="italic font-bold">Execution</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                From initial sourcing to final deployment, we manage the entire
                overseas employment lifecycle with precision and compliance.
              </p>
            </div>

            <div className="space-y-20 md:space-y-32">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-20`}>
                  <div
                    className="w-full md:w-1/2 relative aspect-4/3 md:aspect-square"
                    data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover rounded-sm shadow-xl"
                    />
                    <div
                      className="absolute -bottom-8 -right-8 text-8xl font-bold text-white drop-shadow-xl"
                      >
                      {step.step}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2" data-aos="fade-up">
                    <div className="text-brand-dark font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3
                      className="text-3xl text-brand-dark font-light mb-6"
                      >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div
              className="flex flex-col md:flex-row md:items-end justify-between mb-12"
              data-aos="fade-up">
              <div className="max-w-2xl">
                <h2
                  className="text-4xl md:text-5xl text-brand-dark font-light mb-4"
                  >
                  Proven Track <span className="italic font-bold">Record</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We have successfully built skilled international workforces
                  for leading global organizations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#f7f5f2] group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}>
                  <div className="relative w-full aspect-16/9 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-brand-dark font-bold text-lg">
                          {card.title}
                        </h4>
                        <p className="text-brand-dark text-sm font-medium">
                          {card.location}
                        </p>
                      </div>
                      <span className="bg-white border border-gray-200 text-xs font-bold px-3 py-1 text-gray-600">
                        {card.stat}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
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
