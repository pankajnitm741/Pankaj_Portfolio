import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import styles from './Skills.module.css'

export default function Skills() {
  const skillCategories = [
    {
      title: "Systems Programming",
      skills: [
        { name: "C++", icon: "⚡", color: "#00599C" },
        { name: "Performance Optimization", icon: "🚀", color: "#FF6B6B" },
        { name: "Algorithm Design", icon: "🧠", color: "#45B7D1" },
        { name: "Memory Management", icon: "💾", color: "#96CEB4" },
        { name: "System Architecture", icon: "🏗️", color: "#FFEAA7" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "⚛️", color: "#61DAFB" },
        { name: "TypeScript", icon: "📘", color: "#3178C6" },
        { name: "JavaScript (ES6+)", icon: "💛", color: "#F7DF1E" },
        { name: "HTML5", icon: "🌐", color: "#E34F26" },
        { name: "CSS3", icon: "🎨", color: "#1572B6" },
        { name: "UI/UX Design", icon: "🎭", color: "#FF9FF3" }
      ]
    },
    {
      title: "Backend & Mobile",
      skills: [
        { name: "Python", icon: "🐍", color: "#3776AB" },
        { name: "Android (Kotlin)", icon: "📱", color: "#0F9D58" },
        { name: "MVVM Pattern", icon: "🏛️", color: "#6C5CE7" },
        { name: "RxJava", icon: "🔄", color: "#FF7675" },
        { name: "Socket Programming", icon: "🔌", color: "#00B894" },
        { name: "REST APIs", icon: "🔗", color: "#0984E3" }
      ]
    }
  ]

  return (
    <section id="skills" className={styles.skillsContainer}>
      {/* Floating colorful blobs */}
      <div className={styles.blob1}></div>
      {/* <div className={styles.blob2}></div> */}
      <div className={styles.blob3}></div>
      <div className={styles.blob4}></div>

      <div className={styles.sectionWrapper}>
        <ScrollAnimationWrapper animation="fade-up" threshold={0.2}>
          <div className={styles.header}>
            <div className={styles.badge}>
              Technical Arsenal
            </div>
            <h2 className={styles.title}>
              Skills That Deliver Results
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.description}>
              Equipped with cutting-edge technologies and proven methodologies to build scalable, high-performance solutions that drive business success.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <ScrollAnimationWrapper 
              key={index} 
              animation="fade-up" 
              delay={(index + 1) * 200}
              threshold={0.1}
            >
              <div className={styles.skillCard}>
                <h3 className={styles.categoryTitle}>
                  {category.title}
                </h3>
                <div className={styles.categorySkills}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <div className={styles.skillIcon}>
                        <span style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                      </div>
                      <span className={styles.skillName}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
