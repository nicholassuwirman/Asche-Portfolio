'use client'

import { useRef, useState } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion'
import './Skills.css'

const skillsData = [
  {
    title: 'Meows',
    description: 'He started meowing on demand (when we call his name) after 3 years of existing.',
    speed: 0.5
  },
  {
    title: 'Cuddly',
    description: 'He demands cuddles and pets only for 10 minutes a day, exactly at around 6 am, then gets annoyed and leave.',
    speed: 0.5
  },
  {
    title: 'loud purr',
    description: "He only purrs for his daily 10 minutes of cuddle, else he will just sleep for most of the day.",
    speed: 0.67
  },
  {
    title: 'friendly',
    description: "HE'S LYING, he's only friendly to people who fed him chicken and food. He's in no way friendly to other cats/dogs.",
    speed: 0.5
  },
  {
    title: 'Cute',
    description: 'Well I gotta agree with this one, he really is very cute... (he might be the cutest one of them all).',
    speed: 0.5
  }
]

function SkillTitle({ data, index, selectedSkill, setSelectedSkill }) {
  const { title, description, speed } = data
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${15 / speed}vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0])
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`

  return (
    <div
      ref={container}
      className="skill-title-item"
      onMouseEnter={() => setSelectedSkill(index)}
      onMouseLeave={() => setSelectedSkill(null)}
    >
      <div className="skill-title-wrapper">
        <p className="skill-title-ghost">{title}</p>
        <motion.p style={{ clipPath: clip }} className="skill-title-revealed">
          {title}
        </motion.p>
      </div>
      <div className={`skill-description-overlay${selectedSkill === index ? ' visible' : ''}`}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <section className="skills-container">
      <div className="skills-name-container">
        <p className="skills-name">WHAT I DO</p>
      </div>
      <div className="skills-titles">
        {skillsData.map((skill, index) => (
          <SkillTitle
            key={index}
            data={skill}
            index={index}
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
          />
        ))}
      </div>
    </section>
  )
}
