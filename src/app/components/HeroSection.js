'use client'

import { useState, useEffect } from 'react'

const WORDS = ['data analytics', 'finance', 'technology']

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIdx]

    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true) }, 2000)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed === word) {
      setPaused(true)
      return
    }

    if (deleting && displayed === '') {
      setDeleting(false)
      setWordIdx(i => (i + 1) % WORDS.length)
      return
    }

    const t = setTimeout(() => {
      setDisplayed(deleting
        ? displayed.slice(0, -1)
        : word.slice(0, displayed.length + 1)
      )
    }, deleting ? 60 : 110)

    return () => clearTimeout(t)
  }, [displayed, deleting, paused, wordIdx])

  return (
    <header className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">

      {/* Grid overlay — dark lines, naturally fade into the navy at the bottom */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* USF Logo — 3D Y-axis coin spin */}
        <div className="fade-in-up mb-6" style={{ perspective: '1000px' }}>
          <img
            src="/usf-logo.png"
            alt="University of South Florida"
            className="logo-spin mx-auto w-20 h-20 sm:w-24 sm:h-24 object-contain"
          />
        </div>

        {/* Eyebrow */}
        <p className="fade-in-up text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
          Business Analytics &amp; FinTech
        </p>

        {/* Name */}
        <h1 className="fade-in-up-1 text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tight leading-none mb-6">
          Logan Pfeiffer
        </h1>

        {/* Tagline with typing effect */}
        <p className="fade-in-up-2 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed mb-10">
          USF junior turning{' '}
          <span className="text-blue-600 font-semibold inline-flex items-center gap-0.5">
            {displayed}
            <span
              className="cursor-blink inline-block w-[2px] h-[1.1em] bg-blue-600 ml-0.5 align-middle rounded-sm"
              aria-hidden="true"
            />
          </span>
          {' '}into strategy.
        </p>

        {/* Contact pills — light background style */}
        <div className="fade-in-up-3 flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="mailto:loganspfeiffer48@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-300 text-gray-700 text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            loganspfeiffer48@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/logan-pfeiffer-7a153634a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-300 text-gray-700 text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-300 text-gray-700 text-sm font-medium shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Tampa, FL
          </span>
        </div>

        {/* CTAs */}
        <div className="fade-in-up-4 flex flex-wrap justify-center gap-4">
          <a
            href="#summary"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30"
          >
            View My Work
          </a>
          <a
            href="mailto:loganspfeiffer48@gmail.com"
            className="px-6 py-3 rounded-full border-2 border-gray-800 text-gray-800 hover:border-blue-600 hover:text-blue-600 font-semibold text-sm transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator — sits on the dark navy bottom of the gradient */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </header>
  )
}
