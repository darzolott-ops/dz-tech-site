import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, ChevronRight, BookOpen, Award, Scale, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { 
  AnimatedSection, 
  AnimatedCard, 
  ParticleBackground, 
  AnimatedGradientBackground 
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {"I'm a Backend Engineer and Independent Researcher specializing in Java backend development, enterprise platforms, and distributed systems. I focus on building scalable fintech and mission-critical software solutions."}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {"I am the author of the technical book \"PostgreSQL Query Optimization and Performance Tuning\", which focuses on database performance optimization, query efficiency, and scalable backend system design. The book reflects my expertise in enterprise backend development and high-performance data systems and is used by software engineers working with production-scale applications."}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  My research and publications focus on enterprise software architecture, distributed systems, and backend performance optimization. I have authored multiple peer-reviewed scientific publications covering distributed caching, database indexing, and scalable backend system design.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I have developed backend systems for fintech platforms and airport management systems, designing scalable services, integrating enterprise systems, and ensuring reliability in production environments.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Java Backend Development & Enterprise Platforms
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Distributed Systems & Scalable Architecture</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">REST API Design & System Integration</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Database Design & Backend Infrastructure</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Fintech Systems & Mission-Critical Applications</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Backend Engineer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">T-Systems</p>
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Developed backend components for airport management platforms, contributing to large-scale enterprise systems used in aviation operations.
                  </li>
                  <li>
                    Designed and implemented backend services, integrated distributed enterprise systems, and supported platform scalability, reliability, and system performance.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Engineer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Sberbank</p>
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Contributed to backend development for enterprise fintech platforms within one of the largest banking institutions in Europe.
                  </li>
                  <li>
                    Implemented backend services, developed business-critical functionality, and supported system scalability, reliability, and integration within complex enterprise environments.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Engineer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Otkritie Bank</p>
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Participated in the development of backend systems supporting financial platforms and enterprise applications.
                  </li>
                  <li>
                    Developed backend functionality, integrated internal services, and contributed to the stability, scalability, and performance of enterprise software systems.
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-2 text-center">Publications</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Scientific papers published in peer-reviewed journals</p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                journal: "Scientific Review. Technical Science",
                papers: [
                  "Development of an Adaptive Task Scheduling Algorithm for Systems with Limited Computing Resources",
                  "Development of an Algorithm for Adaptive Request Distribution in Microservice Architecture Taking into Account the Dynamic Characteristics of Nodes",
                ],
              },
              {
                journal: "Modern High-Tech Technologies",
                papers: [
                  "Evaluation of Document Object Model, Simple API for XML and Streaming API for XML Algorithms for Working with XML in High-Load Applications",
                ],
              },
              {
                journal: "Modeling, Optimization and Information Technologies",
                papers: [
                  "A Comprehensive Study of the Impact of G1 Garbage Collector Parameters on JVM Performance and Stability",
                ],
              },
              {
                journal: "Software Systems and Computational Method",
                papers: [
                  "Comparative Analysis of Indexing Strategies in PostgreSQL Under Various Load Scenarios",
                  "Efficiency of Distributed Caching Platforms in Modern Backend Architectures: Comparative Analysis of Redis and Hazelcast",
                ],
              },
              {
                journal: "Modern Science: Current Problems of Theory and Practice: Natural and Technical Sciences",
                papers: [
                  "Selecting Data Transfer Technology for High-Load Financial Systems Based on WebSockets, SSE and gRPC",
                ],
              },
            ].map((publication, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3">
                        {publication.journal}
                      </h3>
                      <ul className="space-y-3">
                        {publication.papers.map((paper, paperIndex) => (
                          <li key={paperIndex} className="flex items-start gap-2 group">
                            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-1 flex-shrink-0 transform group-hover:translate-x-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300" />
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{paper}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Recognition Section */}
      <section id="recognition" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-2 text-center">Professional Recognition</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Awards, judging roles, and peer review contributions</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Awards */}
            <AnimatedSection delay={0.2}>
              <div className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold">Awards</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
                      <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">Bronze Winner</span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{"Globee\u00AE Awards (2024)"}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{"Women in Business \u2013 Women in Digital Technology of the Year"}</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Platinum Winner</span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">TITAN Business Awards (2025)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{"Information Technology \u2013 Technical Professional of the Year"}</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-gray-400"></span>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">Silver Winner</span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">TITAN Business Awards (2025)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{"Outstanding Female in Information Technology \u2013 Outstanding Female in Software Engineering"}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Judging */}
            <AnimatedSection delay={0.3}>
              <div className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Judging</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Expert Council Member (Judge)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{"National Business Award \"Technology and Innovation\", 2024"}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      Served as a judge evaluating innovative technology solutions and business implementations at the national level.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Peer Review */}
            <AnimatedSection delay={0.4}>
              <div className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Search className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Peer Review</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Invited Peer Reviewer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">International Scientific Journal Current Research</p>
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      ISSN 2713-1513
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:d.zolotukhina@dz-tech.co"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      d.zolotukhina@dz-tech.co
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://www.linkedin.com/in/daria-zolotukhina-080539225"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Daria Zolotukhina</h2>
              <p className="text-gray-400">Backend Engineer</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/daria-zolotukhina-080539225"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:d.zolotukhina@dz-tech.co"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Daria Zolotukhina. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
