import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(124,58,237,0.15),rgba(59,130,246,0.08)_40%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/60">
              AI Link-in-Bio Platform
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Build Your Smart Bio Page — Powered by AI.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Let AI write your product titles, craft your bio, and design your page — all in one simple platform.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                Get Started Free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Try AI Demo
              </a>
            </div>
            <div className="text-xs text-gray-500">No credit card required</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:h-[520px]"
          >
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />

            {/* Subtle vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
