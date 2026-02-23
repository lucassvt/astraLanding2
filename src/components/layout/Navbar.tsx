"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, REGISTER_URL } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong py-2 shadow-lg shadow-black/20"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-astra-cyan to-astra-accent flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="text-lg font-bold text-astra-text-primary tracking-tight">
              ASTRA
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-astra-text-secondary hover:text-astra-accent transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={REGISTER_URL}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-astra-accent to-astra-cyan text-white hover:shadow-lg hover:shadow-astra-accent/20 transition-all hover:-translate-y-0.5"
          >
            Empezar <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-astra-text-primary"
            aria-label="Menu"
          >
            {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-astra-bg-deep border-l border-astra-border/40 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-astra-border/30">
                <span className="text-lg font-bold">ASTRA</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 py-4 px-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center px-4 py-3.5 text-base text-astra-text-secondary active:text-astra-accent active:bg-astra-accent/10 rounded-xl transition-colors min-h-[48px]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="p-5 border-t border-astra-border/30">
                <a
                  href={REGISTER_URL}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-astra-accent to-astra-cyan text-white active:scale-[0.98] transition-transform"
                >
                  Quiero ser Reseller <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
