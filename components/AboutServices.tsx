import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    watermark: "Our Core Services",
    title: "Overseas Recruitment",
    description:
      "AskTalentRecruitment’s flagship manpower division provides skilled, semi-skilled, and unskilled workforce solutions across construction, healthcare, energy, and facility management sectors. We source, screen, trade-test, and deploy qualified talent from South Asia, ensuring full compliance with medical, legal, and embassy requirements. ",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    link: "/our-services/overseas-recruitment",
  },
  {
    watermark: "Precision leadership",
    title: "Specialized Headhunting",
    description:
      "Our executive search team delivers targeted international recruitment for senior-level professionals, including engineers, healthcare administrators, and project leaders. We identify and connect highly specialized talent capable of driving complex global projects.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    link: "/our-services/specialized-headhunting",
  },
  {
    watermark: "Streamlined bureaucracy",
    title: "Visa & Emigration",
    description:
      "We simplify complex international recruitment processes by managing the entire documentation journey. Our in-house team handles Wafid/GAMCA medical coordination, visa stamping, embassy approvals, and emigration clearances (including BMET requirements), ensuring a seamless experience. ",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
    link: "/our-services/visa-processing",
  },
  {
    watermark: "Prepared from day one",
    title: "Pre-Departure Training",
    description:
      "Every candidate undergoes structured orientation programs covering cultural awareness, workplace safety, legal compliance, and destination-specific guidance. This ensures a smooth adaptation and immediate productivity upon deployment.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    link: "/our-services/pre-departure-orientation",
  },
];

export default function AboutServices() {
  return (
    <section className="bg-[#f7f5f2]">
      {services.map((service, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <div
            key={index}
            className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} min-h-100 md:min-h-125`}
            data-aos="fade-up">
            {/* Image Half */}
            <div className="relative w-full md:w-1/2 h-72 md:h-auto">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Text Half */}
            <div className="relative w-full md:w-1/2 flex items-center overflow-hidden">
              {/* Watermark text */}
              <div
                className="absolute top-6 md:top-10 left-6 md:left-12 right-6 text-6xl md:text-7xl lg:text-8xl font-light text-gray-200/60 leading-tight pointer-events-none select-none"
                style={{ fontFamily: "var(--font-playfair-display), serif" }}>
                {service.watermark}
              </div>

              <div className="relative z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16">
                <h3
                  className="text-2xl md:text-3xl text-brand-dark font-bold mb-6"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-block bg-brand-primary text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-primary transition-colors">
                  DISCOVER MORE
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
