import { HiMail, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Button from './Button'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contactContainer}>
      {/* Floating colorful blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <div className={styles.blob4}></div>

      <div className={styles.sectionWrapper}>
        <ScrollAnimationWrapper animation="fade-up" threshold={0.2}>
          <div className={styles.header}>
            <div className={styles.badge}>
              Ready to Start Your Project?
            </div>
            <h2 className={styles.title}>
              Let's Build Something Amazing
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.subtitle}>
              Have a project in mind? Let's discuss how I can help bring your vision to life with cutting-edge technology and exceptional user experience.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className={styles.contentGrid}>
          {/* Contact Information */}
          <ScrollAnimationWrapper animation="fade-left" delay={300} threshold={0.1}>
            <div className={styles.contactInfoSection}>
              <h3 className={styles.contactInfoTitle}>
                Contact Information
              </h3>
              
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <HiMail className={styles.contactIcon} />
                  </div>
                  <div className={styles.contactItemContent}>
                    <h4>Email</h4>
                    <a href="mailto:pankajgoyalnitm@gmail.com">
                      pankajgoyalnitm@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <FaLinkedin className={styles.contactIcon} />
                  </div>
                  <div className={styles.contactItemContent}>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/pankaj-goyal-9a17541a6" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/pankaj-goyal-9a17541a6
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <FaGithub className={styles.contactIcon} />
                  </div>
                  <div className={styles.contactItemContent}>
                    <h4>GitHub</h4>
                    <a href="https://github.com/golupankajgoyal" target="_blank" rel="noopener noreferrer">
                      github.com/golupankajgoyal
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <FaInstagram className={styles.contactIcon} />
                  </div>
                  <div className={styles.contactItemContent}>
                    <h4>Instagram</h4>
                    <a href="https://instagram.com/pankajgoyal741" target="_blank" rel="noopener noreferrer">
                      instagram.com/pankajgoyal741
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.statusSection}>
                <h4 className={styles.statusTitle}>Current Status</h4>
                <div className={styles.statusContent}>
                  <div className={styles.statusDot}></div>
                  <p className={styles.statusText}>Available for new projects and collaborations</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Contact Form */}
          <ScrollAnimationWrapper animation="fade-right" delay={500} threshold={0.1}>
            <div className={styles.contactFormSection}>
              <h3 className={styles.formTitle}>
                Send Me a Message
              </h3>

              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.formLabel}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input 
                    id="fullName" 
                    type="text" 
                    required 
                    placeholder="Your Name"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="youremail@example.com"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <input 
                    id="subject" 
                    type="text" 
                    required 
                    placeholder="Subject about cooperation opportunities..."
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    required 
                    placeholder="Your detailed message here..."
                    className={styles.formTextarea}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary"
                  className={styles.submitButton}
                >
                  <HiPaperAirplane className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
