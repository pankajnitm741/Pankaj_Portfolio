import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import pankajImage from '../assets/Pankaj_image.jpeg'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.aboutContainer}>
      {/* Floating colorful blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <div className={styles.blob4}></div>

      <div className={styles.sectionWrapper}>
        <ScrollAnimationWrapper animation="fade-up" threshold={0.2}>
          <div className={styles.header}>
            <div className={styles.badge}>
              My Journey
            </div>
            <h2 className={styles.title}>
              About Me
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>
        </ScrollAnimationWrapper>

        <div className={styles.contentGrid}>
          {/* Profile Image */}
          <ScrollAnimationWrapper animation="fade-left" delay={200}>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={pankajImage} 
                    alt="Pankaj Goyal - Web Developer" 
                    className={styles.profileImage}
                  />
                  <div className={styles.imageOverlay1}></div>
                  <div className={styles.imageOverlay2}></div>
                </div>
                <div className={styles.statusBadge}>
                  <div className={styles.statusContent}>
                    <div className={styles.statusDot}></div>
                    <span className={styles.statusText}>Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* About Content */}
          <ScrollAnimationWrapper animation="fade-right" delay={400}>
            <div className={styles.contentSection}>
              <div className={styles.textContent}>
                <p>
                  Hello! I'm <span className={styles.highlightName}>Pankaj Goyal</span>, a passionate freelance developer who transforms ideas into powerful digital solutions. With expertise in modern web technologies and mobile development, I help businesses and startups build cutting-edge applications that drive growth and user engagement.
                </p>

                <p>
                  I specialize in creating <span className={styles.highlightBlue}>full-stack web applications</span>, <span className={styles.highlightGreen}>mobile apps</span>, and <span className={styles.highlightPurple}>custom software solutions</span> that solve real business problems. From e-commerce platforms to IoT applications, I deliver high-quality, scalable solutions using React, TypeScript, Node.js, Android, and modern development practices.
                </p>

                {/* Freelancing Value Proposition */}
                <div className={styles.valueProposition}>
                  <h3 className={styles.valueTitle}>
                    <span className={styles.valueTitleDot}></span>
                    Why Choose Me for Your Next Project?
                  </h3>
                  <div className={styles.valueGrid}>
                    <div className={styles.valueItem}>
                      <div className={`${styles.valueItemDot} ${styles.valueItemDotGreen}`}></div>
                      <div>
                        <span className={styles.valueItemTitle}>Fast Delivery:</span>
                        <span className={styles.valueItemDescription}> Quality solutions delivered on time, every time</span>
                      </div>
                    </div>
                    <div className={styles.valueItem}>
                      <div className={`${styles.valueItemDot} ${styles.valueItemDotBlue}`}></div>
                      <div>
                        <span className={styles.valueItemTitle}>Modern Tech Stack:</span>
                        <span className={styles.valueItemDescription}> Latest technologies for future-proof solutions</span>
                      </div>
                    </div>
                    <div className={styles.valueItem}>
                      <div className={`${styles.valueItemDot} ${styles.valueItemDotPurple}`}></div>
                      <div>
                        <span className={styles.valueItemTitle}>End-to-End Service:</span>
                        <span className={styles.valueItemDescription}> From concept to deployment and beyond</span>
                      </div>
                    </div>
                    <div className={styles.valueItem}>
                      <div className={`${styles.valueItemDot} ${styles.valueItemDotOrange}`}></div>
                      <div>
                        <span className={styles.valueItemTitle}>Proven Results:</span>
                        <span className={styles.valueItemDescription}> Award-winning projects with real business impact</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Whether you're a startup looking to build your MVP, an established business needing to modernize your digital presence, or an entrepreneur with the next big idea, I bring the technical expertise and creative problem-solving skills to turn your vision into reality. Let's build something amazing together!
                </p>
              </div>

              {/* Personal Info */}
              <div className={styles.personalInfo}>
                <div className={styles.infoItem}>
                  <h4 className={styles.infoLabel}>Name</h4>
                  <p className={styles.infoValue}>Pankaj Goyal</p>
                </div>
                <div className={styles.infoItem}>
                  <h4 className={styles.infoLabel}>Email</h4>
                  <p className={styles.infoValue}>pankajgoyalnitm@gmail.com</p>
                </div>
                <div className={styles.infoItem}>
                  <h4 className={styles.infoLabel}>Phone</h4>
                  <p className={styles.infoValue}>+91 8279791619</p>
                </div>
                <div className={styles.infoItem}>
                  <h4 className={styles.infoLabel}>Availability</h4>
                  <p className={styles.infoValueAvailable}>Available for projects</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
