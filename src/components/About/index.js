/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  faAws,
  faDocker,
  faGitAlt,
  faGolang,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I’m a Senior Software Engineer and MS Computer Science student at the University of Illinois Chicago, focused on building reliable, scalable distributed systems.

          </p>
          <p>
            Previously at InfoEdge, I designed and scaled subscription and monetization platforms serving 1M+ users, helping drive a 22% revenue increase. My work centered on event-driven microservices built with Spring Boot and Kafka, along with server-to-server integrations using webhooks, with an emphasis on performance, observability, and long-term system health.

          </p>
          <p>
            More recently, I’ve been working on cloud-native and distributed AI systems — including a conversational platform integrating local LLMs (Ollama) with AWS via Akka HTTP microservices, and a distributed language model training pipeline built using Hadoop and Spark.

          </p>
          <p>
            Outside of work, I care deeply about using technology to create meaningful impact. I co-founded Magadh Mission Foundation, an NGO focused on expanding educational access for underprivileged children.

          </p>
          <p>
            I’m currently deepening my expertise in cloud infrastructure, system design, and distributed computing, and I’m excited to build high-impact software at companies operating at global scale.

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGolang} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
