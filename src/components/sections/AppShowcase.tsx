"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { Monitor, Smartphone, Users, ShoppingCart } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function AppShowcase() {
  return (
    <section id="app" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-astra-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-astra-purple/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-astra-cyan/30 bg-astra-cyan/10 mb-4">
              <Monitor className="w-3.5 h-3.5 text-astra-cyan" />
              <span className="text-xs font-semibold text-astra-cyan uppercase tracking-wider">
                La App
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Todo en{" "}
              <span className="gradient-text">una sola plataforma</span>
            </h2>
            <p className="text-base sm:text-lg text-astra-text-secondary max-w-2xl mx-auto">
              Dashboard, catálogo, CRM, academia y comunidad. Todo lo que
              necesitás para vender como un profesional.
            </p>
          </motion.div>

          {/* Screenshot 1: Community */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
            <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-astra-purple/15 flex items-center justify-center">
                  <Users className="w-5 h-5 text-astra-purple" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Comunidad de Resellers
                </h3>
              </div>
              <p className="text-base text-astra-text-secondary leading-relaxed mb-6">
                Conectá con otros resellers, mirá quién visitó tu perfil,
                enviá felicitaciones y competí en las ligas dinámicas. Tu avatar
                evoluciona con tu rango.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Perfiles visibles", "Rankings en vivo", "Avatares 3D", "Felicitaciones"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-astra-purple/10 text-astra-purple border border-astra-purple/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="order-1 lg:order-2">
              <div className="device-frame relative glow-purple">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/images/screenshot-community.png`}
                  alt="ASTRA Comunidad - Avatares y Rankings"
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-astra-bg-deep/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Screenshot 2: Catalog */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <div className="device-frame relative glow-cyan">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/images/screenshot-catalog.png`}
                  alt="ASTRA Catálogo - Productos para mascotas"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-astra-bg-deep/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-astra-cyan/15 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-astra-cyan" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Catálogo Inteligente
                </h3>
              </div>
              <p className="text-base text-astra-text-secondary leading-relaxed mb-6">
                +134 productos organizados por categoría. Ves tu precio de costo,
                tu ganancia por producto y el stock en tiempo real. Modo vendedor
                y modo cliente para compartir sin mostrar tus márgenes.
              </p>
              <div className="flex flex-wrap gap-3">
                {["134+ productos", "Vista vendedor/cliente", "Filtros inteligentes", "Stock en vivo"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-astra-cyan/10 text-astra-cyan border border-astra-cyan/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
