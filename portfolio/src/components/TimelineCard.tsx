import styles from './TimelineCard.module.css'
import type { ReactNode } from 'react'

interface TimelineCardProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  isLeft?: boolean
  current?: boolean
  icon?: string | ReactNode
}

export default function TimelineCard({ 
  title, 
  company, 
  period, 
  description, 
  achievements, 
  isLeft = true,
  current = false,
  icon = "💼"
}: TimelineCardProps) {
  return (
    <div className={styles.timelineCard}>
      {/* Timeline Dot with Icon */}
      <div className={styles.timelineDot}>
        {icon}
      </div>
      
      {/* Content Card */}
      <div className={`${styles.cardContainer} ${isLeft ? styles.cardContainerLeft : styles.cardContainerRight}`}>
        <div className={styles.card}>
          {/* Header Section */}
          <div className={styles.header}>
            <div className={styles.titleSection}>
              <h3 className={styles.title}>
                {title}
              </h3>
              <h4 className={styles.company}>
                {company}
              </h4>
            </div>
            <div className={styles.badgeContainer}>
              <span className={styles.periodBadge}>
                {period}
              </span>
              {current && (
                <span className={styles.currentBadge}>
                  Current
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className={styles.description}>
            {description}
          </p>

          {/* Achievements */}
          <div className={styles.achievements}>
            {achievements.map((achievement, achIndex) => (
              <div key={achIndex} className={styles.achievementItem}>
                <div className={styles.achievementDot}></div>
                <p className={styles.achievementText}>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
