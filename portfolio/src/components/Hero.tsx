import { HiArrowRight, HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Button from './Button'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import styles from './Hero.module.css'
import '../App.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* Dynamic Radial Gradient Base Layer */}
      <div className={styles.gradientLayer}></div>

      {/* Animated stars background */}
      <div className={styles.starsContainer}>
        {[...Array(150)].map((_, i) => {
          const size = Math.random() * 4 + 0.5; // 0.5px to 4.5px
          const opacity = Math.random() * 0.8 + 0.2; // 0.2 to 1.0
          return (
            <div
              key={i}
              className={styles.star}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 3}s`, // 3-7 seconds
              }}
            />
          );
        })}
        
        {/* Twinkling micro stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={`micro-${i}`}
            className={styles.microStar}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.3,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 2 + 2}s`, // 2-4 seconds
            }}
          />
        ))}
      </div>

      {/* Floating colorful cloud blobs */}
      <div className={styles.blobsContainer}>
        <div className={`${styles.blob} ${styles.blobLarge}`}></div>
        <div className={`${styles.blob} ${styles.blobMedium}`}></div>
        <div className={`${styles.blob} ${styles.blobSmall}`}></div>
        <div className={`${styles.blob} ${styles.blobExtra}`}></div>
      </div>
      {/* Hero content */}
      <div className={styles.heroContent}>
        {/* Greeting */}
        <ScrollAnimationWrapper animation="fade-up" delay={100} threshold={0.1}>
          <h2 className={`${styles.greeting} hero-text-accent`}>
            Hello! I'm Pankaj Goyal
          </h2>
        </ScrollAnimationWrapper>

        {/* Main heading */}
        <ScrollAnimationWrapper animation="fade-up" delay={300} threshold={0.1}>
          <h1 className={styles.mainHeading}>
            I Build Modern Web &
            <br />
            Mobile Experiences
          </h1>
        </ScrollAnimationWrapper>

        {/* Description */}
        <ScrollAnimationWrapper animation="fade-up" delay={500} threshold={0.1}>
          <div className={styles.descriptionBox}>
            <p className={`${styles.description} hero-text-secondary`}>
              Creating <span className="hero-text-primary font-semibold">innovative digital solutions</span> for businesses and startups.
              <br />
              Specializing in full-stack development, mobile apps, and
              <br />
              custom web applications that drive results.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Buttons */}
        <ScrollAnimationWrapper animation="scale" delay={700} threshold={0.1}>
          <div className={styles.buttonContainer}>
            <a href="#projects">
              <Button 
                variant="primary"
                size="md"
              >
                <span className="flex items-center gap-2">
                  View Projects <HiArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </a>
            
            <a href="#contact">
              <Button 
                variant="secondary"
                size="md"
                className="border-2 border-slate-600"
                style={{
                  borderColor: 'rgb(71, 85, 105, var(--tw-border-opacity, 1))',
                  borderWidth: '2px'
                }}
              >
                Contact me
              </Button>
            </a>
          </div>
        </ScrollAnimationWrapper>

        {/* Social Links */}
        <ScrollAnimationWrapper animation="bounce-up" delay={900} threshold={0.1}>
          <div className={styles.socialContainer}>
            <a 
              href="https://github.com/golupankajgoyal" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pankaj-goyal-9a17541a6" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:pankajgoyalnitm@gmail.com" 
              className={styles.socialLink}
            >
              <HiMail className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/pankajgoyal741" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
