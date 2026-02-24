"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-astra-bg-deep via-[#0a0a1a] to-astra-bg-deep" />
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-astra-cyan/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-astra-purple/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-astra-accent/5 rounded-full blur-[150px]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left: Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={fadeInLeft}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-astra-accent/30 bg-astra-accent/10 mb-6">
                <Zap className="w-3.5 h-3.5 text-astra-accent" />
                <span className="text-xs font-semibold text-astra-accent uppercase tracking-wider">
                  Carrera Comercial Gamificada
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInLeft}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-3"
            >
              <span className="gradient-text">ASTRA</span>
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="text-lg sm:text-xl text-astra-text-secondary italic mb-4"
            >
              &quot;Ad Astra Per Aspera&quot;
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className="text-base sm:text-lg text-astra-text-secondary leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Vendé productos para mascotas, subí de nivel y ganá hasta{" "}
              <span className="text-astra-accent-bright font-bold">$905,760/mes</span>.
              Tu aventura como reseller empieza acá.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInLeft}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href={REGISTER_URL}
                className="group flex items-center justify-center gap-2 px-7 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-astra-accent to-astra-cyan text-white shadow-lg shadow-astra-accent/20 active:scale-[0.98] hover:-translate-y-0.5 transition-all"
              >
                Comenzar mi Carrera
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-2xl glass text-astra-text-primary active:scale-[0.98] hover:-translate-y-0.5 transition-all"
              >
                Ver cómo funciona
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeInLeft}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Star, text: "5 Rangos" },
                { icon: Zap, text: "Hasta 48% markup" },
                { icon: Shield, text: "22 Puntos de Retiro" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-astra-text-muted"
                >
                  <item.icon className="w-4 h-4 text-astra-cyan" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero image */}
          <motion.div
            variants={fadeInRight}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px]">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-astra-cyan/20 via-astra-accent/20 to-astra-purple/20 rounded-full blur-[60px] animate-pulse-glow" />

              {/* Main image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden animate-float">
                <Image
                  src="/images/hero-cat.webp"
                  alt="ASTRA mascota astronauta"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:top-2 sm:right-0 glass rounded-xl px-3 py-2 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">XP</span>
                  </div>
                  <span className="text-sm font-bold text-astra-gold">+100</span>
                </div>
              </div>

              <div
                className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 glass rounded-xl px-3 py-2 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-green-400">
                    Rango: Avanzado
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-astra-bg-deep to-transparent" />
    </section>
  );
}
