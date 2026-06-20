import React from "react";
import * as Icons from "lucide-react";
import { CAMP_BENEFITS, BenefitCard } from "../data";
import { motion } from "motion/react";

export default function WhyCamp() {
  // Helper to dynamically get the lucide icon component
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || Icons.Star;
    return <IconComponent className="w-8 h-8" />;
  };

  // Decorative color themes for each of the 6 cards
  const getCardStyle = (id: string) => {
    switch (id) {
      case "logic":
        return {
          bg: "bg-blue-50/40 hover:bg-blue-50 border-blue-100 hover:border-blue-300",
          iconBg: "bg-blue-100 text-blue-600",
          shadowColor: "shadow-blue-500/5"
        };
      case "active":
        return {
          bg: "bg-purple-50/40 hover:bg-purple-50 border-purple-100 hover:border-purple-300",
          iconBg: "bg-purple-100 text-purple-600",
          shadowColor: "shadow-purple-500/5"
        };
      case "tech-ai":
        return {
          bg: "bg-emerald-50/40 hover:bg-emerald-50 border-emerald-100 hover:border-emerald-300",
          iconBg: "bg-emerald-100 text-emerald-600",
          shadowColor: "shadow-emerald-500/5"
        };
      case "portfolio":
        return {
          bg: "bg-amber-50/40 hover:bg-amber-50 border-amber-100 hover:border-amber-300",
          iconBg: "bg-amber-100 text-amber-600",
          shadowColor: "shadow-amber-500/5"
        };
      case "cert-graduation":
        return {
          bg: "bg-pink-50/40 hover:bg-pink-50 border-pink-100 hover:border-pink-300",
          iconBg: "bg-pink-100 text-pink-600",
          shadowColor: "shadow-pink-500/5"
        };
      case "mentors":
        return {
          bg: "bg-indigo-50/40 hover:bg-indigo-50 border-indigo-100 hover:border-indigo-300",
          iconBg: "bg-indigo-100 text-indigo-600",
          shadowColor: "shadow-indigo-500/5"
        };
      default:
        return {
          bg: "bg-gray-50 hover:bg-gray-100 border-gray-200",
          iconBg: "bg-gray-200 text-gray-700",
          shadowColor: "shadow-gray-500/5"
        };
    }
  };

  return (
    <section id="why-camp" className="py-24 bg-white relative overflow-hidden">
      {/* Curved glowing vector backdrop */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-primary uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3">
            KUALITAS & METODE TERBAIK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-0">
            Kenapa Orang Tua Memilih Fansedu?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Kami menghadirkan petualangan coding interaktif yang ramah bagi pemula, membekali putra-putri Anda dengan keahlian digital masa depan.
          </p>
        </div>

        {/* Benefits Grid - Responsive 3-Columns for 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMP_BENEFITS.map((benefit: BenefitCard, index: number) => {
            const style = getCardStyle(benefit.id);
            return (
              <motion.div
                key={benefit.id}
                id={`benefit-card-${benefit.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group rounded-3xl p-8 border hover:scale-101 border-gray-150 transition-all duration-300 shadow-sm hover:shadow-xl ${style.shadowColor} ${style.bg} flex flex-col justify-between h-full`}
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${style.iconBg}`}>
                    {getIcon(benefit.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-gray-950 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-650 text-sm mt-3.5 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>

                {/* Aesthetic Indicator bar */}
                <div className="w-10 h-1 bg-gray-200 group-hover:bg-primary rounded-full mt-6 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
