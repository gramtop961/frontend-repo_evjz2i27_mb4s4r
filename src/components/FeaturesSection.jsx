import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, FileText, LayoutDashboard, LineChart } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'AI Title Generator',
    desc: 'Instantly create catchy, high-converting titles for your products and links.',
  },
  {
    icon: FileText,
    title: 'AI Product Description',
    desc: 'Generate persuasive copy that sells — tailored to your brand voice.',
  },
  {
    icon: LayoutDashboard,
    title: 'AI Page Builder',
    desc: 'Build a personalized landing page layout automatically in seconds.',
  },
  {
    icon: LineChart,
    title: 'AI Analytics Insight',
    desc: 'Get smart suggestions to improve clicks, conversions, and revenue.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Key AI Features
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to turn your bio into a business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-violet-600/10 p-3 text-violet-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
