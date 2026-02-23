"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { STEPS } from "@/lib/constants";
import { UserPlus, ShoppingBag, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UserPlus,
  ShoppingBag,
  TrendingUp,
};

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-astra-bg-primary/50" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-astra-purple/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-astra-purple/30 bg-astra-purple/10 mb-4">
              <span className="text-xs font-semibold text-astra-purple uppercase tracking-wider">
                Cómo funciona
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Empezá en{" "}
              <span className="gradient-text">3 simples pasos</span>
            </h2>
            <p className="text-base sm:text-lg text-astra-text-secondary max-w-2xl mx-auto">
              No necesitás experiencia. El sistema te guía de principio a fin.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div key={step.number} variants={fadeInUp}>
                  <div className="relative group h-full">
                    {/* Connector line (desktop) */}
                    {i < STEPS.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-astra-border to-transparent" />
                    )}

                    <div className="relative glass rounded-3xl p-6 sm:p-8 h-full hover:-translate-y-1 transition-transform">
                      {/* Step number */}
                      <div className="text-6xl sm:text-7xl font-black text-astra-border/30 absolute top-4 right-6 select-none">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-astra-accent/20 to-astra-cyan/20 flex items-center justify-center mb-5 relative z-10">
                        {Icon && <Icon className="w-7 h-7 text-astra-accent" />}
                      </div>

                      <h3 className="text-xl font-bold text-astra-text-primary mb-2 relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-sm text-astra-text-secondary leading-relaxed relative z-10">
                        {step.description}
                      </p>
                    </div>
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
