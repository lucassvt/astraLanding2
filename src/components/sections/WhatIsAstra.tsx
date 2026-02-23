"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { Sparkles, MapPin, TrendingUp, ShieldCheck } from "lucide-react";

const bullets = [
  {
    icon: ShieldCheck,
    title: "Respaldo empresarial",
    text: "No es pirámide. Vendés productos reales con respaldo de AstraPet.",
  },
  {
    icon: MapPin,
    title: "22 puntos de retiro",
    text: "Retirá tu mercadería en la sucursal más cercana, sin costo extra.",
  },
  {
    icon: TrendingUp,
    title: "Márgenes crecientes",
    text: "Del 29% al 48% en alimentos, del 43% al 67% en accesorios.",
  },
];

export function WhatIsAstra() {
  return (
    <section id="que-es" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-astra-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left: Visual */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative glass rounded-3xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-astra-accent via-astra-cyan to-astra-purple" />

              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-astra-cyan" />
                <h3 className="text-lg font-bold">Tu progresión en ASTRA</h3>
              </div>

              {/* Rank progression visual */}
              <div className="space-y-3">
                {[
                  { rank: "Aprendiz", lvl: 1, pct: 20, color: "#94a3b8" },
                  { rank: "Iniciado", lvl: 2, pct: 40, color: "#22c55e" },
                  { rank: "Avanzado", lvl: 3, pct: 60, color: "#3b82f6" },
                  { rank: "Experto", lvl: 4, pct: 80, color: "#a855f7" },
                  { rank: "Maestro", lvl: 5, pct: 100, color: "#f59e0b" },
                ].map((r) => (
                  <div key={r.rank} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: `${r.color}30`, color: r.color }}
                    >
                      {r.lvl}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: r.color }}
                        >
                          {r.rank}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-astra-border/40 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${r.pct}%`,
                            background: `linear-gradient(90deg, ${r.color}80, ${r.color})`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div>
            <motion.div variants={fadeInRight}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-astra-cyan/30 bg-astra-cyan/10 mb-4">
                <span className="text-xs font-semibold text-astra-cyan uppercase tracking-wider">
                  Qué es ASTRA
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
                Más que reventa.{" "}
                <span className="gradient-text">Una carrera.</span>
              </h2>

              <p className="text-base sm:text-lg text-astra-text-secondary leading-relaxed mb-8">
                ASTRA es el programa de reventa gamificada de AstraPet. Comprás
                productos para mascotas a precio mayorista, vendés al público y
                con cada venta ganás XP para subir de rango y desbloquear mejores
                márgenes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              {bullets.map((b) => (
                <div
                  key={b.title}
                  className="flex gap-4 p-4 rounded-2xl bg-astra-bg-card/40 border border-astra-border/30 hover:border-astra-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-astra-accent/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-astra-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-astra-text-primary mb-0.5">
                      {b.title}
                    </h4>
                    <p className="text-sm text-astra-text-secondary">{b.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
