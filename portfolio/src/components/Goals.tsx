import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import styles from './Goals.module.css'

export default function Goals() {
  const goals = [
    {
      title: "Short-Term Goal",
      description: "To secure a challenging Frontend Developer position where I can apply my skills in React and Next.js, contribute to meaningful projects, and continuously learn from experienced mentors within a collaborative team.",
      icon: "🎯"
    },
    {
      title: "Mid-Term Goal", 
      description: "To evolve into a Senior Frontend Developer, taking ownership of complex features, mentoring junior developers, and deepening my expertise in performance optimization and building highly scalable applications.",
      icon: "🚀"
    },
    {
      title: "Long-Term Goal",
      description: "To become a technical lead or solutions architect, guiding technical strategy, driving innovation in user experience, and making a significant impact on the products and teams I help create.",
      icon: "⭐"
    }
  ]

  return (
    <section id="goals" className={styles.goalsSection}>
      {/* Floating colorful cloud blobs for Goals section */}
      <div className={styles.blobsContainer}>
        {/* Large gradient blob - top center */}
        <div className={`${styles.blob} ${styles.blobLarge} ${styles.animationDelay4000}`}></div>
        
        {/* Medium gradient blob - bottom left */}
        <div className={`${styles.blob} ${styles.blobMedium} ${styles.animationDelay6000}`}></div>
        
        {/* Small gradient blob - middle right */}
        <div className={`${styles.blob} ${styles.blobSmall} ${styles.animationDelay2000}`}></div>
        
        {/* Extra blob for depth - bottom right */}
        <div className={`${styles.blob} ${styles.blobExtra}`}></div>
      </div>

      <div className={styles.contentContainer}>
        <ScrollAnimationWrapper animation="fade-up" threshold={0.2}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.mainHeading}>
              Career Goals
            </h2>
            <p className={styles.subtitle}>
              My Roadmap
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className={styles.goalsGrid}>
          {goals.map((goal, index) => (
            <ScrollAnimationWrapper 
              key={index}
              animation="bounce-up"
              delay={(index + 1) * 200}
              threshold={0.1}
            >
              <div className={styles.goalCard}>
                <span className={styles.goalIcon}>{goal.icon}</span>
                <h3 className={styles.goalTitle}>
                  {goal.title}
                </h3>
                <p className={styles.goalDescription}>
                  {goal.description}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
