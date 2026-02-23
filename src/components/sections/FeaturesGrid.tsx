"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FEATURES } from "@/lib/constants";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
  Gift,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
  Gift,
};

const cardColors = [
  { border: "hover:border-astra-cyan/40", icon: "text-astra-cyan", bg: "bg-astra-cyan/10" },
  { border: "hover:border-astra-accent/40", icon: "text-astra-accent", bg: "bg-astra-accent/10" },
  { border: "hover:border-astra-purple/40", icon: "text-astra-purple", bg: "bg-astra-purple/10" },
  { border: "hover:border-astra-gold/40", icon: "text-astra-gold", bg: "bg-astra-gold/10" },
  { border: "hover:border-astra-cyan/40", icon: "text-astra-cyan", bg: "bg-astra-cyan/10" },
  { border: "hover:border-astra-purple/40", icon: "text-astra-purple", bg: "bg-astra-purple/10" },
];

export function FeaturesGrid() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-astra-bg-primary/30" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-astra-gold/30 bg-astra-gold/10 mb-4">
              <span className="text-xs font-semibold text-astra-gold uppercase tracking-wider">
                Herramientas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Todo lo que necesitás,{" "}
              <span className="gradient-text">en un lugar</span>
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FEATURES.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              const colors = cardColors[i % cardColors.length];
              return (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <div
                    className={`glass rounded-2xl p-5 sm:p-6 h-full border border-astra-border/40 ${colors.border} transition-all hover:-translate-y-1`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}
                    >
                      {Icon && <Icon className={`w-6 h-6 ${colors.icon}`} />}
                    </div>
                    <h3 className="text-base font-bold text-astra-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-astra-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
