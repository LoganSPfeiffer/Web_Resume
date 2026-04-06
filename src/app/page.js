import Navbar from './components/Navbar'
import ProjectCards from './components/ProjectCards'
import SkillBars from './components/SkillBars'

export default function Page() {
  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="fade-in-up text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Business Analytics &amp; FinTech
          </p>
          <h1 className="fade-in-up-1 text-6xl sm:text-7xl font-bold text-gray-100 tracking-tight leading-none mb-5">
            Logan Pfeiffer
          </h1>
          <p className="fade-in-up-2 text-lg sm:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            USF junior bridging{' '}
            <span className="text-blue-400 font-medium">data analytics</span>,{' '}
            <span className="text-emerald-400 font-medium">finance</span>, and{' '}
            <span className="text-blue-400 font-medium">technology</span> — turning
            numbers into strategy.
          </p>

          <div className="fade-in-up-3 flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="mailto:loganspfeiffer48@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 text-gray-300 text-sm font-medium hover:border-blue-500 hover:text-blue-300 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              loganspfeiffer48@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/logan-pfeiffer-7a153634a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 text-gray-300 text-sm font-medium hover:border-blue-500 hover:text-blue-300 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 text-gray-300 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Tampa, FL
            </span>
          </div>

          <div className="fade-in-up-4 flex flex-wrap justify-center gap-4">
            <a
              href="#summary"
              className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              View My Work
            </a>
            <a
              href="mailto:loganspfeiffer48@gmail.com"
              className="px-6 py-3 rounded-full border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-300 font-semibold text-sm transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </header>

      <main className="bg-gray-950">

        {/* ── About ────────────────────────────────────────────── */}
        <section id="summary" aria-labelledby="summary-heading" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <h2 id="summary-heading" className="text-2xl font-bold uppercase tracking-wider text-blue-400 mb-8">
            About
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
            Business Analytics and Information Systems junior at USF with a finance minor,
            passionate about bridging data analytics and business strategy. Seeking opportunities
            in business analytics, FinTech, and technology consulting.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'GPA', value: '3.47' },
              { label: 'University', value: 'USF Tampa' },
              { label: 'Graduating', value: 'Dec 2026' },
              { label: 'Minor', value: 'Finance' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-gray-900 border border-gray-800 px-5 py-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</p>
                <p className="text-gray-100 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ────────────────────────────────────────── */}
        <section id="education" aria-labelledby="education-heading" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <h2 id="education-heading" className="text-2xl font-bold uppercase tracking-wider text-blue-400 mb-8">
            Education
          </h2>
          <div className="rounded-xl bg-gray-900 border border-gray-800 p-6 hover:border-blue-500/40 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-gray-100 font-bold text-lg">University of South Florida</h3>
                <p className="text-blue-400 font-medium mt-0.5">
                  B.S. Business Analytics &amp; Information Systems · Minor in Finance
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  GPA 3.47
                </span>
                <p className="text-gray-500 text-sm mt-2">Expected Dec 2026</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Analytics for Business',
                  'Database Design & Administration',
                  'AI & Analytics for Organizations',
                  'Business Intelligence',
                  'Systems Analysis & Design',
                  'Principles of Management',
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section id="experience" aria-labelledby="experience-heading" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <h2 id="experience-heading" className="text-2xl font-bold uppercase tracking-wider text-blue-400 mb-10">
            Experience
          </h2>
          <div className="relative ml-1">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />
            {[
              {
                role: 'Business Analyst Intern',
                org: 'C1 (ConvergeOne)',
                location: 'Remote',
                dates: 'Summer 2026',
                badge: 'Incoming',
                badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
                bullets: ['Incoming summer intern — role focused on business analysis and technology consulting.'],
              },
              {
                role: 'Fundraising Chair',
                org: 'Care for Company Club, USF',
                location: 'Tampa, FL',
                dates: 'Aug 2025 – Present',
                bullets: [
                  'Lead fundraising strategy supporting the Mark Wandall Foundation',
                  'Develop and execute funding strategies in partnership with university organizations',
                ],
              },
              {
                role: 'Server',
                org: "Harpoon Harry's",
                location: 'Tampa, FL',
                dates: 'Feb 2025 – Present',
                bullets: [
                  'Collaborate with cross-functional teams to optimize service delivery',
                  'Apply problem-solving skills to resolve issues and improve guest satisfaction',
                ],
              },
              {
                role: 'Technical Manager',
                org: 'Elder Interactive',
                location: '',
                dates: '',
                bullets: ['Managed client communications and technical operations.'],
              },
            ].map((job, i) => (
              <div key={i} className="relative pl-7 pb-10 last:pb-0">
                <div className="absolute -left-[5px] top-1.5 w-[10px] h-[10px] rounded-full bg-blue-500 border-2 border-gray-950" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-gray-100 font-semibold">{job.role}</h3>
                    <p className="text-blue-400 text-sm font-medium">
                      {job.org}{job.location ? ` · ${job.location}` : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {job.badge && (
                      <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${job.badgeColor}`}>
                        {job.badge}
                      </span>
                    )}
                    {job.dates && (
                      <span className="text-gray-500 text-sm">{job.dates}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-400">
                      <span className="text-gray-600 mt-0.5 shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────────── */}
        <section id="projects" aria-labelledby="projects-heading" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <h2 id="projects-heading" className="text-2xl font-bold uppercase tracking-wider text-blue-400 mb-2">
            Projects
          </h2>
          <p className="text-gray-500 text-sm mb-8">Click any card to expand details.</p>
          <ProjectCards />
        </section>

        {/* ── Skills ───────────────────────────────────────────── */}
        <section id="skills" aria-labelledby="skills-heading" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <h2 id="skills-heading" className="text-2xl font-bold uppercase tracking-wider text-blue-400 mb-10">
            Skills
          </h2>
          <SkillBars />
        </section>

        {/* ── Certifications ───────────────────────────────────── */}
        <section id="certifications" aria-labelledby="certs-heading" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <h2 id="certs-heading" className="text-2xl font-bold uppercase tracking-wider text-blue-400 mb-8">
            Certifications
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'FINRA SIE Exam', status: 'Passed', icon: '📊' },
              { name: 'Bloomberg Market Concepts', status: 'Completed', icon: '📈' },
              { name: 'Google Data Analytics Certificate', status: 'Completed', icon: '🔍' },
            ].map(({ name, status, icon }) => (
              <div
                key={name}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500/60 hover:bg-gray-900/80 hover:scale-[1.03] transition-all duration-200 cursor-default"
              >
                <span className="text-xl" aria-hidden="true">{icon}</span>
                <div>
                  <p className="text-gray-200 font-medium text-sm group-hover:text-blue-300 transition-colors">{name}</p>
                  <p className="text-emerald-400 text-xs font-medium mt-0.5">{status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Activities ───────────────────────────────────────── */}
        <section id="activities" aria-labelledby="activities-heading" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <h2 id="activities-heading" className="text-2xl font-bold uppercase tracking-wider text-blue-400 mb-8">
            Involvement
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Personal Portfolio Management',
                org: 'Fidelity',
                description: 'Actively manage personal investment portfolio applying fundamental and quantitative analysis.',
              },
              {
                title: 'Member',
                org: 'USF Data Science Club',
                description: 'Participate in workshops, competitions, and collaborative data projects with peers.',
              },
              {
                title: 'Member',
                org: 'USF Investment Club',
                description: 'Engage with investment thesis development, market analysis, and financial modeling discussions.',
              },
            ].map(({ title, org, description }) => (
              <div
                key={org}
                className="rounded-xl bg-gray-900 border border-gray-800 p-5 hover:border-blue-500/40 transition-colors duration-300"
              >
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">{org}</p>
                <h3 className="text-gray-100 font-semibold text-sm mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-2">Let&apos;s Connect</h2>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
            Open to internships, analytics roles, and conversations about FinTech or data strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="mailto:loganspfeiffer48@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/logan-pfeiffer-7a153634a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-300 text-sm font-semibold transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="tel:8476022558"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-300 text-sm font-semibold transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              847-602-2558
            </a>
          </div>
          <p className="text-gray-600 text-sm">© 2026 Logan Pfeiffer · Tampa, FL</p>
        </div>
      </footer>
    </>
  )
}
