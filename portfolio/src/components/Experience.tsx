import TimelineCard from './TimelineCard'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import { FaMicrosoft, FaPython, FaAndroid } from 'react-icons/fa'
import styles from './Experience.module.css'

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Microsoft",
      period: "Aug 2022 - Present",
      description: "Working on PowerPoint Mobile and Microsoft Loop, developing high-performance solutions for millions of users using C++, React, TypeScript, and modern web technologies.",
      achievements: [
        "Implemented dictionary-based data format protocol (Meteor) reducing file open times by 45%",
        "Built end-to-end table summarization feature for Microsoft Loop with full UI integration and testing",
        "Optimized Table component critical render performance by 50% for 50+ row tables",
        "Developed comprehensive Row Detail Page with complete UI/UX, accessibility, and keyboard navigation"
      ],
      current: true,
      icon: <FaMicrosoft className="text-xl text-blue-500" />
    },
    {
      title: "Python Developer Intern",
      company: "AlphaGrep",
      period: "Jan - July 2022",
      description: "Developed automation solutions for financial data processing and file status management using Python, HTML, and CSS technologies.",
      achievements: [
        "Developed UI & Python scripts to automate file status checking processes",
        "Created automation strategies for comparing Stock exchange & local data",
        "Streamlined data validation workflows for financial applications",
        "Improved operational efficiency through automated data processing solutions"
      ],
      current: false,
      icon: <FaPython className="text-xl text-yellow-400" />
    },
    {
      title: "SDE Intern",
      company: "Doubtnut",
      period: "April - Dec 2021",
      description: "Built Android applications serving 2M+ users, focusing on educational features and user engagement using Kotlin, MVVM pattern, RxJava, and modern Android development practices.",
      achievements: [
        "Built demonetization feature for app rewards into centralized currency for 2M+ users",
        "Implemented online test and progress analysis features for student exam preparation",
        "Worked with MVVM pattern, RxJava, Dragger2, and Socket technologies",
        "Contributed to large-scale Android application architecture and user experience"
      ],
      current: false,
      icon: <FaAndroid className="text-xl text-green-500" />
    }
  ]

  return (
    <section id="experience" className={styles.experienceContainer}>
      {/* Floating colorful blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <div className={styles.blob4}></div>

      <div className={styles.sectionWrapper}>
        <ScrollAnimationWrapper animation="fade-up" threshold={0.2}>
          <div className={styles.header}>
            <div className={styles.badge}>
              Proven Track Record
            </div>
            <h2 className={styles.title}>
              Experience That Delivers
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>
              Years of hands-on experience building solutions that drive real business results for clients across diverse industries.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className={styles.timelineContainer}>
          {/* Timeline Line */}
          <div className={styles.timelineLine}></div>
          
          <div className={styles.timelineList}>
            {experiences.map((exp, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={(index + 1) * 200}
                threshold={0.1}
              >
                <div className={styles.timelineItem}>
                  <TimelineCard
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    achievements={exp.achievements}
                    current={exp.current}
                    isLeft={index % 2 === 0}
                    icon={exp.icon}
                  />
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
