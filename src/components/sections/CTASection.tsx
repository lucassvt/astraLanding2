"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, Shield, Truck, Wallet } from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";

const trustSignals = [
  { icon: Shield, text: "Sin compromiso" },
  { icon: Wallet, text: "Inversión desde $100K" },
  { icon: Truck, text: "22 puntos de retiro" },
];

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-astra-bg-primary/50" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-astra-accent/8 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-astra-cyan/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-astra-purple/5 rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="relative glass rounded-3xl p-8 sm:p-12 lg:p-16 text-center border-glow overflow-hidden">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 animate-shimmer pointer-events-none" />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 relative z-10">
                ¿Listo para empezar{" "}
                <span className="gradient-text">tu carrera?</span>
              </h2>

              <p className="text-base sm:text-lg text-astra-text-secondary mb-8 max-w-xl mx-auto relative z-10">
                Unite a la comunidad de resellers que ya está ganando vendiendo
                productos para mascotas. Tu aventura comienza con un click.
              </p>

              <a
                href={REGISTER_URL}
                className="group inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-astra-accent to-astra-cyan text-white shadow-xl shadow-astra-accent/25 active:scale-[0.98] hover:-translate-y-1 hover:shadow-2xl hover:shadow-astra-accent/30 transition-all relative z-10"
              >
                Comenzar mi Carrera
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 justify-center mt-8 relative z-10">
                {trustSignals.map((signal) => (
                  <div
                    key={signal.text}
                    className="flex items-center gap-2 text-sm text-astra-text-muted"
                  >
                    <signal.icon className="w-4 h-4 text-astra-accent" />
                    <span>{signal.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
