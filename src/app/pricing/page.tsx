"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For individuals getting started with AI-powered testing",
    cta: "Get Started",
    ctaLink: "https://app.imqa.ai/signup",
    highlighted: false,
    includedText: "Includes free credits",
    features: [
      "Up to 50 test runs/month",
      "1 project",
      "Basic test recorder",
      "Community support",
      "7-day test history",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    priceAnnual: "$24",
    period: "/month",
    periodNote: "Pay as you go, starting at:",
    description: "For developers who want flexible access to AI testing that scales",
    cta: "Start Today",
    ctaLink: "https://app.imqa.ai/signup",
    highlighted: true,
    badge: "Recommended",
    includedText: "Everything in Free, plus:",
    features: [
      "1,000 test runs/month",
      "Unlimited projects",
      "Self-healing selectors",
      "CI/CD integrations",
      "Video recordings",
      "Priority support",
      "90-day test history",
      "API access",
    ],
  },
  {
    name: "Team",
    price: "$79",
    priceAnnual: "$69",
    period: "/user",
    periodExtra: "/month",
    periodNote: "Pay as you go, starting at:",
    description: "For teams scaling AI-powered testing (up to 25 seats)",
    cta: "Start Today",
    ctaLink: "https://app.imqa.ai/signup",
    highlighted: false,
    includedText: "Everything in Pro, plus:",
    features: [
      "5,000 test runs/month",
      "Team collaboration",
      "Shared test libraries",
      "Advanced analytics",
      "Role-based access",
      "SSO integration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations needing advanced control, security, and scale",
    cta: "Contact Sales",
    ctaLink: "mailto:sales@imqa.ai",
    highlighted: false,
    includedText: "Everything in Team, plus:",
    features: [
      "Unlimited test runs",
      "Dedicated infrastructure",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated success manager",
      "On-premise deployment",
    ],
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#121212" }}>
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight"
            style={{
              color: "rgb(255, 255, 255)",
              letterSpacing: "-0.03em",
              lineHeight: "1.1em",
            }}
          >
            Plans that scale with your usage
          </motion.h1>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {/* Toggle */}
            <div
              className="relative flex items-center p-1 rounded-md"
              style={{
                backgroundColor: "#121212",
                border: "1px solid rgba(255, 255, 255, 0.13)",
              }}
            >
              <button
                onClick={() => setIsAnnual(false)}
                className="relative z-10 px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  color: !isAnnual ? "#121212" : "rgba(250, 249, 245, 0.9)",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className="relative z-10 px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  color: isAnnual ? "#121212" : "rgba(250, 249, 245, 0.9)",
                }}
              >
                Annually
              </button>
              {/* Sliding indicator */}
              <motion.div
                className="absolute top-1 bottom-1 rounded"
                style={{ backgroundColor: "white" }}
                initial={false}
                animate={{
                  left: isAnnual ? "50%" : "4px",
                  right: isAnnual ? "4px" : "50%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            
            {/* Discount badge */}
            <span
              className="text-sm font-normal"
              style={{ color: "#d4a574" }}
            >
              10% off
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="relative rounded-lg overflow-hidden"
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(200deg, rgba(212, 165, 116, 0.6) 0%, rgba(212, 165, 116, 0.3) 21%, rgba(212, 165, 116, 0.15) 53%, rgba(41, 41, 41, 1) 100%)"
                    : "transparent",
                  padding: plan.highlighted ? "1px" : "0",
                }}
              >
                <div
                  className="h-full rounded-lg p-6"
                  style={{ backgroundColor: "rgb(30, 30, 30)" }}
                >
                  {/* Plan Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="text-2xl font-normal"
                        style={{ color: "rgba(250, 249, 246, 0.7)" }}
                      >
                        {plan.name}
                      </h3>
                      {plan.badge && (
                        <span
                          className="px-2 py-0.5 text-[10px] rounded"
                          style={{
                            backgroundColor: "#d4a574",
                            color: "rgba(250, 249, 246, 0.9)",
                          }}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    {plan.periodNote && (
                      <p
                        className="text-sm"
                        style={{ color: "rgba(250, 249, 246, 0.5)" }}
                      >
                        {plan.periodNote}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4">
                    <span
                      className="text-[44px] font-normal"
                      style={{ color: "rgba(250, 249, 245, 0.9)" }}
                    >
                      {isAnnual && plan.priceAnnual ? plan.priceAnnual : plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className="text-base"
                        style={{ color: "rgba(250, 249, 246, 0.5)" }}
                      >
                        {plan.period}
                      </span>
                    )}
                    {plan.periodExtra && (
                      <span
                        className="text-base"
                        style={{ color: "rgba(250, 249, 246, 0.5)" }}
                      >
                        {plan.periodExtra}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: "rgba(250, 249, 246, 0.7)" }}
                  >
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href={plan.ctaLink}
                    className="block w-full text-center py-4 rounded-md text-lg font-medium mb-6 transition-all hover:opacity-90"
                    style={{
                      backgroundColor: "rgb(47, 47, 47)",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    {plan.cta}
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    <p
                      className="text-sm"
                      style={{ color: plan.highlighted ? "#d4a574" : "rgb(250, 249, 246)" }}
                    >
                      {plan.includedText}
                    </p>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className="w-4 h-4 mt-0.5 rounded-full flex-shrink-0"
                          style={{
                            border: "1px solid rgba(228, 227, 224, 0.5)",
                          }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(250, 249, 246, 0.9)" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
