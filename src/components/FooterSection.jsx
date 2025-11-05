import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Chen',
    handle: '@alexmakes',
    quote:
      'The AI titles and descriptions are spot on. My click-throughs improved within a week.',
  },
  {
    name: 'Maya Rivera',
    handle: '@maya.designs',
    quote:
      'I set up my page in minutes. The AI page builder saved me hours of tweaking.',
  },
  {
    name: 'Jordan Lee',
    handle: '@jordancommerce',
    quote:
      'Actionable analytics insights without the noise. It actually helps me sell.',
  },
];

export default function FooterSection() {
  return (
    <footer className="relative">
      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Loved by creators</h2>
          <p className="mt-3 text-gray-600">Minimal, helpful, and actually smart.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 inline-flex items-center gap-1 text-violet-700">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.handle}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when you’re ready.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-2 text-sm font-medium text-gray-900">Free</div>
            <div className="mb-4 text-3xl font-semibold text-gray-900">$0</div>
            <ul className="mb-6 space-y-2 text-sm text-gray-600">
              <li>Basic bio page</li>
              <li>Starter AI features</li>
              <li>Community support</li>
            </ul>
            <a href="#" className="mt-auto inline-flex justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:border-gray-400">
              Start Free
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex flex-col rounded-2xl border border-violet-200 bg-gradient-to-b from-white to-violet-50 p-6 shadow-md"
          >
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-violet-700">
              Pro <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px]">Best for growth</span>
            </div>
            <div className="mb-4 text-3xl font-semibold text-gray-900">$12<span className="text-base font-normal text-gray-500">/mo</span></div>
            <ul className="mb-6 space-y-2 text-sm text-gray-700">
              <li>All AI features unlocked</li>
              <li>Custom domain</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="mt-auto inline-flex justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500">
              Upgrade to Pro
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-gray-200 bg-white px-6 py-12 shadow-sm"
        >
          <h3 className="mx-auto max-w-2xl text-2xl font-semibold text-gray-900 sm:text-3xl">
            Turn your bio into a business with AI.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Smart content, clean design, and insights that help you grow.
          </p>
          <div className="mt-6">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-violet-500">
              Start Free Today
            </a>
          </div>
          <div className="mt-6 text-xs text-gray-500">Made with Next.js + AI</div>
        </motion.div>
      </section>
    </footer>
  );
}
