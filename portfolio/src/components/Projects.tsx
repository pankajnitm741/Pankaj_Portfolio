import { useState } from 'react'
import { HiCode, HiEye } from 'react-icons/hi'
import Button from './Button'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import styles from './Projects.module.css'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Web', 'Mobile']

  const projects = [
    {
      title: "AAWAZ - Emergency Safety App",
      description: "Android application with electronic band for women safety that shares real-time location to nearest registered saviors, relatives, or police during emergencies.",
      start: "Sep 2020",
      status: "Completed",
      technologies: ["Android", "Kotlin", "Real-time Location", "SMS API", "Authentication"],
      codeUrl: "https://github.com/golupankajgoyal/Aawaz",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
      category: "Mobile",
      achievement: "Winner of Meghalaya Police Hackathon 2019"
    },
    {
      title: "PowerPoint Mobile Optimization",
      description: "Implemented Meteor protocol for dictionary-based data format optimization, reducing file open times by 45% and enabling incremental loading.",
      start: "Aug 2022",
      status: "Production", 
      technologies: ["C++", "Performance Optimization", "File Processing", "Data Protocols"],
      codeUrl: null,
      liveUrl: "https://www.microsoft.com/en-us/microsoft-365/powerpoint",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
      category: "Web"
    },
    {
      title: "Microsoft Loop Table Features",
      description: "End-to-end development of table summarization features with UI integration, theming, accessibility, and comprehensive testing for Microsoft Loop.",
      start: "2023",
      status: "Production",
      technologies: ["React", "TypeScript", "CSS", "Accessibility", "Testing"],
      codeUrl: null,
      liveUrl: "https://loop.microsoft.com/",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
      category: "Web"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, payment integration, and admin dashboard for inventory management.",
      start: "2021",
      status: "Completed",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
      codeUrl: "https://github.com/golupankajgoyal/ecommerce-platform",
      liveUrl: "https://demo-ecommerce-pankaj.vercel.app",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
      category: "Web"
    },
    {
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application for task and project management with team collaboration features, built using React Native and Firebase.",
      start: "2022",
      status: "Completed",
      technologies: ["React Native", "Firebase", "Redux", "Push Notifications", "Offline Sync"],
      codeUrl: "https://github.com/golupankajgoyal/task-manager-app",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
      category: "Mobile"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring dashboard with interactive maps, forecast data visualization, and location-based weather alerts.",
      start: "2021",
      status: "Completed",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Mapbox", "PWA"],
      codeUrl: "https://github.com/golupankajgoyal/weather-dashboard",
      liveUrl: "https://weather-dash-pankaj.netlify.app",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
      category: "Web"
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Floating colorful cloud blobs */}
      <div className={styles.blobsContainer}>
        {/* Large gradient blob - top right */}
        <div className={`${styles.blob} ${styles.blobLarge} ${styles.animationDelay2000}`}></div>
        
        {/* Medium gradient blob - bottom left */}
        <div className={`${styles.blob} ${styles.blobMedium} ${styles.animationDelay6000}`}></div>
        
        {/* Small gradient blob - center left */}
        <div className={`${styles.blob} ${styles.blobSmall} ${styles.animationDelay4000}`}></div>
        
        {/* Extra blob for depth - bottom right */}
        <div className={`${styles.blob} ${styles.blobExtra}`}></div>
      </div>

      <div className={styles.contentContainer}>
        <ScrollAnimationWrapper animation="fade-up" threshold={0.2}>
          <div className={styles.sectionHeader}>
            <div className={styles.badgeContainer}>
              Portfolio & Work
            </div>
            <h2 className={styles.mainHeading}>
              Featured Projects
            </h2>
            <div className={styles.underline}></div>
          </div>
        </ScrollAnimationWrapper>
        {/* Filter Buttons */}
        <ScrollAnimationWrapper animation="fade-up" delay={300} threshold={0.1}>
          <div className={styles.filterContainer}>
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'primary' : 'secondary'}
                size="sm"
              >
                {filter}
              </Button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ScrollAnimationWrapper 
              key={index}
              animation="scale"
              delay={(index % 3) * 200 + 400}
              threshold={0.1}
            >
              <div className={styles.projectCard}>
                {/* Project Image */}
                <div className={styles.imageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>

                {/* Project Content */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>
                  
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Started:</span>
                      <span>{project.start}</span>
                    </div>
                    <div>
                      <span className={styles.statusBadge}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className={styles.technologiesContainer}>
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={styles.techTag}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionsContainer}>
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.actionLink}
                      >
                        <Button 
                          variant="secondary"
                          size="sm"
                          className="w-full"
                        >
                          <HiCode className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.actionLink}
                      >
                        <Button 
                          variant="primary"
                          size="sm"
                          className="w-full"
                        >
                          <HiEye className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
