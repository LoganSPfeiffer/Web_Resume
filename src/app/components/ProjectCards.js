'use client'

import { useState } from 'react'

const PROJECTS = [
  {
    title: 'Enterprise Analytics Platform',
    tech: ['SQL', 'Tableau', 'Python'],
    context: 'Class · 2025',
    summary: 'Comprehensive BI solution integrating multiple data sources with 15+ KPI dashboards.',
    bullets: [
      'Designed comprehensive BI solution integrating multiple data sources across business units',
      'Created 15+ KPI dashboards tailored to different stakeholder needs',
      'Documented business requirements and translated stakeholder asks into technical specs',
    ],
  },
  {
    title: 'Long-Horizon Investment Screening System',
    tech: ['Python', 'SQL', 'Power BI', 'Streamlit'],
    context: 'Personal · 2025',
    summary: 'Multi-factor scoring model with rule-based backtesting and interactive dashboard.',
    bullets: [
      'Designed multi-factor scoring model across Quality, Valuation, Trend, and Risk dimensions',
      'Conducted rule-based backtesting with quarterly rebalancing logic',
      'Developed interactive Power BI and Streamlit dashboard for screening output',
    ],
  },
  {
    title: 'Quantamental Stock Analysis Platform',
    tech: ['Python', 'pandas', 'scikit-learn', 'yfinance'],
    context: 'Personal',
    summary: 'End-to-end pipeline combining technical indicators, fundamentals, and ML ensemble models.',
    bullets: [
      'Combined technical indicators and fundamental metrics with ML (Random Forest, ensemble)',
      'Built end-to-end pipeline for quantitative stock screening and signal generation',
    ],
  },
]

export default function ProjectCards() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {PROJECTS.map((project, i) => {
        const isOpen = expanded === i
        return (
          <button
            key={project.title}
            onClick={() => setExpanded(isOpen ? null : i)}
            className={`text-left rounded-xl border p-5 transition-all duration-300 w-full ${
              isOpen
                ? 'border-blue-500 bg-gray-900 shadow-lg shadow-blue-500/10'
                : 'border-gray-800 bg-gray-900 hover:border-blue-500/50 hover:scale-[1.02]'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="text-gray-100 font-semibold text-sm leading-snug">{project.title}</h3>
              <svg
                className={`w-4 h-4 shrink-0 mt-0.5 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-blue-400' : 'text-gray-600'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <p className="text-gray-500 text-xs mb-3">{project.context}</p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">{project.summary}</p>

            {isOpen && (
              <ul className="mt-4 space-y-2.5 border-t border-gray-700/60 pt-4">
                {project.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-300 text-left">
                    <span className="text-blue-400 mt-0.5 shrink-0">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </button>
        )
      })}
    </div>
  )
}
