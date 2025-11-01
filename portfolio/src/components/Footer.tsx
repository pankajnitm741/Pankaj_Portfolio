import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Collaboration', href: '#collaboration' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ]

  const services = [
    'Frontend Development',
    'Full-Stack Solutions',
    'Backend Development',
    'UI/UX Design',
    'Web Application Development',
    'E-commerce Solutions'
  ]

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandTitle}>Pankaj Goyal</h3>
            <p className={styles.brandDescription}>
              Full-stack developer creating powerful web solutions that drive business growth and deliver exceptional user experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.navigationSection}>
            <h4 className={styles.sectionTitle}>NAVIGATION</h4>
            <ul className={styles.navigationList}>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.navigationItem}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.servicesSection}>
            <h4 className={styles.sectionTitle}>SERVICES</h4>
            <ul className={styles.servicesList}>
              {services.map((service) => (
                <li key={service} className={styles.serviceItem}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>CONTACT</h4>
            <div className={styles.contactList}>
              <a 
                href="mailto:pankajgoyalnitm@gmail.com"
                className={styles.contactLink}
              >
                <HiMail className={styles.contactIcon} />
                pankajgoyalnitm@gmail.com
              </a>
              <a 
                href="https://github.com/golupankajgoyal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FaGithub className={styles.contactIcon} />
                github.com/golupankajgoyal
              </a>
              <a 
                href="https://www.linkedin.com/in/pankaj-goyal-9a17541a6"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FaLinkedin className={styles.contactIcon} />
                linkedin.com/in/pankaj-goyal-9a17541a6
              </a>
              <a 
                href="https://instagram.com/pankajgoyal741"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FaInstagram className={styles.contactIcon} />
                instagram.com/pankajgoyal741
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            <p className={styles.copyrightText}>
              © {currentYear} Pankaj Goyal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
