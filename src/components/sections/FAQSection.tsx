"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FAQS } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-astra-border/40 rounded-2xl overflow-hidden hover:border-astra-accent/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left min-h-[56px]"
      >
        <span className="text-sm sm:text-base font-semibold text-astra-text-primary">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-astra-text-muted shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-astra-accent" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <p className="text-sm text-astra-text-secondary leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-astra-accent/30 bg-astra-accent/10 mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-astra-accent" />
              <span className="text-xs font-semibold text-astra-accent uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-3">
              Preguntas frecuentes
            </h2>
            <p className="text-base text-astra-text-secondary">
              Todo lo que necesitás saber antes de empezar.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
