'use client'

import { useEffect, useRef, useState } from 'react'

const SKILL_GROUPS = [
  {
    category: 'Programming',
    color: 'from-blue-600 to-blue-400',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 65 },
    ],
  },
  {
    category: 'Analytics & BI',
    color: 'from-emerald-600 to-emerald-400',
    skills: [
      { name: 'Excel', level: 90 },
      { name: 'Tableau', level: 75 },
      { name: 'Power BI', level: 72 },
      { name: 'Statistical Analysis', level: 75 },
    ],
  },
  {
    category: 'Business',
    color: 'from-blue-500 to-teal-400',
    skills: [
      { name: 'Data Storytelling', level: 85 },
      { name: 'Requirements Gathering', level: 80 },
      { name: 'Stakeholder Communication', level: 85 },
      { name: 'Process Design', level: 75 },
    ],
  },
]

export default function SkillBars() {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid sm:grid-cols-3 gap-10">
      {SKILL_GROUPS.map((group) => (
        <div key={group.category}>
          <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-5">
            {group.category}
          </h3>
          <div className="space-y-4">
            {group.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-500 tabular-nums">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${group.color} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
