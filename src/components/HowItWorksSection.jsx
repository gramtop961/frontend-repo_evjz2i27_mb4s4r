import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Create Account',
    desc: 'Sign up free and connect your socials or store in seconds.',
  },
  {
    step: '02',
    title: 'Add Links or Products',
    desc: 'Add links, products, or services you want to showcase.',
  },
  {
    step: '03',
    title: 'Let AI Enhance Your Page',
    desc: 'Generate titles, descriptions, layouts, and insights automatically.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-gray-600">A simple flow that gets you live in minutes.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-medium text-violet-700">{s.step}</div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>

              {/* Mockup card */}
              <div className="mt-2 h-40 w-full overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm">
                <div className="h-full w-full p-3">
                  <div className="mb-2 h-4 w-28 rounded bg-gray-200" />
                  <div className="mb-2 h-3 w-56 rounded bg-gray-200" />
                  <div className="mb-4 h-3 w-48 rounded bg-gray-200" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-lg bg-gray-100 shadow-inner" />
                    <div className="h-16 rounded-lg bg-gray-100 shadow-inner" />
                    <div className="h-16 rounded-lg bg-gray-100 shadow-inner" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
