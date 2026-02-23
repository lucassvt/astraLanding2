"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { DollarSign, Clock, Flame, ArrowRight } from "lucide-react";
import { REGISTER_URL, RANKS } from "@/lib/constants";

export function EarningsSection() {
  return (
    <section
      id="ganancias"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-astra-bg-primary/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-astra-accent/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-astra-accent/30 bg-astra-accent/10 mb-4">
              <DollarSign className="w-3.5 h-3.5 text-astra-accent" />
              <span className="text-xs font-semibold text-astra-accent uppercase tracking-wider">
                Ganancias
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Cuánto podés{" "}
              <span className="gradient-text">ganar con ASTRA</span>
            </h2>
            <p className="text-base sm:text-lg text-astra-text-secondary max-w-2xl mx-auto">
              Basado en ticket promedio de $32,404 y márgenes reales por rango.
            </p>
          </motion.div>

          {/* Income cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div variants={scaleIn}>
              <div className="relative glass rounded-3xl p-6 sm:p-8 overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-astra-cyan to-astra-accent" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-astra-cyan/15 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-astra-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-astra-text-muted">Dedicación</p>
                    <p className="text-lg font-bold">Part-time</p>
                  </div>
                </div>
                <p className="text-sm text-astra-text-secondary mb-4">
                  10-15 ventas por semana combinando con tu trabajo actual.
                </p>
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                  $322K - $452K
                </div>
                <p className="text-sm text-astra-text-muted">por mes estimado</p>
              </div>
            </motion.div>

            <motion.div variants={scaleIn}>
              <div className="relative glass rounded-3xl p-6 sm:p-8 overflow-hidden group hover:-translate-y-1 transition-transform border-glow">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-astra-accent via-astra-purple to-astra-gold" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-astra-accent/15 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-astra-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-astra-text-muted">Dedicación</p>
                    <p className="text-lg font-bold">Full-time</p>
                  </div>
                </div>
                <p className="text-sm text-astra-text-secondary mb-4">
                  20-30 ventas por semana como actividad principal.
                </p>
                <div className="text-3xl sm:text-4xl font-black gradient-text-gold mb-1">
                  $645K - $905K
                </div>
                <p className="text-sm text-astra-text-muted">por mes estimado</p>
              </div>
            </motion.div>
          </div>

          {/* Ranks margin table */}
          <motion.div variants={fadeInUp}>
            <div className="glass rounded-3xl p-5 sm:p-8 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-center mb-6">
                Márgenes por Rango
              </h3>

              {/* Mobile: cards */}
              <div className="space-y-3 sm:hidden">
                {RANKS.map((rank) => (
                  <div
                    key={rank.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-astra-bg-card/50 border border-astra-border/30"
                    style={{ borderLeftColor: rank.color, borderLeftWidth: "3px" }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold" style={{ color: rank.color }}>
                        {rank.name}
                      </p>
                      <p className="text-xs text-astra-text-muted">
                        Nv.{rank.level} &middot; {rank.xp} XP
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-astra-text-muted">Alimentos</p>
                      <p className="text-sm font-bold text-astra-accent">
                        {rank.foodMarkup}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-astra-text-muted">Accesorios</p>
                      <p className="text-sm font-bold text-astra-cyan">
                        {rank.accessoryMarkup}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: table */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-astra-border/30">
                      <th className="text-left pb-3 text-astra-text-muted font-medium">
                        Rango
                      </th>
                      <th className="text-center pb-3 text-astra-text-muted font-medium">
                        Nivel
                      </th>
                      <th className="text-center pb-3 text-astra-text-muted font-medium">
                        XP Requerido
                      </th>
                      <th className="text-center pb-3 text-astra-text-muted font-medium">
                        Alimentos
                      </th>
                      <th className="text-center pb-3 text-astra-text-muted font-medium">
                        Accesorios
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {RANKS.map((rank) => (
                      <tr
                        key={rank.name}
                        className="border-b border-astra-border/20 last:border-0"
                      >
                        <td className="py-3">
                          <span
                            className="font-bold"
                            style={{ color: rank.color }}
                          >
                            {rank.name}
                          </span>
                        </td>
                        <td className="py-3 text-center">{rank.level}</td>
                        <td className="py-3 text-center text-astra-text-secondary">
                          {rank.xp}
                        </td>
                        <td className="py-3 text-center font-semibold text-astra-accent">
                          {rank.foodMarkup}
                        </td>
                        <td className="py-3 text-center font-semibold text-astra-cyan">
                          {rank.accessoryMarkup}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <a
              href={REGISTER_URL}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-astra-accent to-astra-cyan text-white shadow-lg shadow-astra-accent/20 active:scale-[0.98] hover:-translate-y-0.5 transition-all"
            >
              Empezar a ganar <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
