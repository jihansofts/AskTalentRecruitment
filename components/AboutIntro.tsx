import React from "react";

const stats = [
  {
    value: "50K+",
    unit: "Professionals Successfull",
    label: "Placed Globally",
  },
  {
    value: "30+",
    unit: "Countries in Our Recruitment",
    label: "Network Reach",
  },
  {
    value: "500+",
    unit: "Global Employers Trust",
    label: "TRUST AskTalentRecruitment",
  },
  {
    value: "98%",
    unit: "First-Year Workforce ",
    label: "Retention Rate",
  },
];

export default function AboutIntro() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-24"
          data-aos="fade-up">
          <div className="lg:w-5/12">
            <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">
              WHO WE ARE
            </p>
            <h2
              className="text-4xl md:text-[3.2rem] leading-tight text-brand-primary font-light"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}>
              A Commitment to
              <span className="italic">Better careers</span>
            </h2>
          </div>

          <div className="lg:w-7/12">
            <p
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}>
              AskTalentRecruitment is a premier international recruitment and manpower
              solutions company connecting leading global employers with
              exceptional talent from South Asia. With a strong operational
              network across 30+ countries, we have successfully placed over
              50,000 professionals in roles that transform businesses and change
              lives.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              From healthcare and engineering to hospitality, construction, and
              IT, our specialist recruiters understand the unique demands of
              every industry we serve. We do more than fill vacancies — we build
              long-term workforce partnerships that drive growth, performance,
              and success for both employers and candidates. Our end-to-end
              recruitment solutions — including sourcing, vetting, trade
              testing, visa processing, and pre-departure preparation — set a
              benchmark for excellence in global manpower deployment.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8"
            data-aos="fade-up">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start md:items-baseline gap-1 md:gap-3">
                <span
                  className="text-5xl md:text-6xl font-light text-brand-primary"
                  style={{
                    fontFamily: "var(--font-playfair-display), serif",
                  }}>
                  {stat.value}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-wider text-gray-800 uppercase">
                    {stat.unit}
                  </span>
                  <span className="text-xs text-gray-400 tracking-wider uppercase">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
