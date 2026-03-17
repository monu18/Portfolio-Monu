import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    id: 1,
    company: 'University of Illinois',
    companyUrl: 'https://www.uic.edu/',
    position: 'Graduate Teaching Assistant',
    duration: 'June 2025 – August 2025',
    location: 'Chicago, IL',
    achievements: [
      'Designed hands-on lab modules on Big Data frameworks (PySpark, Apache Airflow), guiding 50+ students to build distributed ETL pipelines that simulated real-world data ingestion, orchestration, and fault-tolerant processing at scale.',
      'Led live research projects integrating AWS RDS, Python-based web-scraping services, and LLM prompt-engineering pipelines, automating data ingestion workflows that processed 10K+ records per batch to accelerate experimentation cycles.'
    ]
  },
  {
    id: 2,
    company: 'INFOEDGE',
    companyUrl: 'https://www.infoedge.in/',
    position: 'Senior Software Engineer',
    duration: 'April 2022 – July 2024',
    location: 'Noida, India',
    achievements: [
      'Architected a distributed subscription platform for 1M+ users integrating BillDesk and Apple APIs using Spring Boot, Kafka, Aerospike, and MySQL, improving throughput by 40% and revenue by 22%; earned the 2023 Merit Award for engineering excellence',
      'Built a real-time personalization engine with Kafka, MongoDB, and Aerospike to generate user-specific offers under 200 ms, improving premium conversions by 8% and receiving the Top Gun Award (Q1 2023–24).',
      'Developed a behavioral lead-prioritization system ranking over 2 M prospects daily using engagement and demographic signals, increasing sales efficiency by 15%.',
      'Implemented observability pipelines with Prometheus and Grafana, reducing mean time to detection by 60% and maintaining 99.99% uptime through proactive alerting.'
    ]
  },
  {
    id: 3,
    company: 'INFOEDGE',
    companyUrl: 'https://www.infoedge.in/',
    position: 'Software Engineer',
    duration: 'July 2021 — March 2022',
    location: 'Noida, India',
    achievements: [
      'Led Jeevansathi’s flagship Monetization Project, launching new subscription plans and instrumenting Prometheus-Grafana dashboards for real-time revenue tracking, driving an 18% uplift (~$2 M) in quarterly revenue.',
      'Re-architected the Membership and Order System from PHP to Java microservices using Spring Boot, RabbitMQ, and Redis, improving request latency and service reliability across high-traffic modules.',
      'Received the RockStar Award (Mar 2022) for end-to-end delivery and measurable business impact.'
    ]
  },
  {
    id: 4,
    company: 'FINBOX',
    companyUrl: 'https://finbox.com/',
    position: 'Software Developer Intern',
    duration: 'December 2017 — Jan 2018',
    location: 'Gurugram, India',
    achievements: [
      'Developed data ingestion and rules-evaluation modules for a credit-risk scoring platform, using Java, REST APIs, and PostgreSQL, enabling dynamic credit-limit decisions based on borrower behavior and transaction history.',
      'Implemented asynchronous job scheduling and caching with Quartz and Ehcache, improving response times by 45% and reducing redundant API calls across partner integrations.'
    ]
  }
]

const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            My experience spans 3+ years of building large-scale backend systems across consumer internet and enterprise platforms. I’ve worked on high-throughput distributed services, event-driven architectures, and data-intensive systems, consistently focusing on reliability, performance, and measurable business impact. Each role has strengthened my ability to design systems that scale — both technically and operationally.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience
