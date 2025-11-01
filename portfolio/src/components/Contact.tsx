import { useState } from 'react'
import { HiMail, HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import Button from './Button'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'
import styles from './Contact.module.css'

interface FormData {
  fullName: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'success' | 'error' | null
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear status when user starts typing
    if (formStatus.type) {
      setFormStatus({ type: null, message: '' })
    }
  }

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your full name' })
      return false
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your email address' })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address' })
      return false
    }
    if (!formData.subject.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter a subject' })
      return false
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Please enter your message' })
      return false
    }
    if (formData.message.trim().length < 10) {
      setFormStatus({ type: 'error', message: 'Message must be at least 10 characters long' })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'your_service_id_here' || 
          templateId === 'your_template_id_here' || 
          publicKey === 'your_public_key_here') {
        
        // Fallback: Simulate sending email (for demo purposes)
        console.log('EmailJS not configured, simulating email send with form data:', formData)
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        setFormStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been received. Since this is a demo, the email simulation was successful. In production, this would send an actual email via EmailJS.' 
        })
      } else {
        // Real EmailJS sending
        const templateParams = {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Pankaj Goyal',
          reply_to: formData.email
        }

        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        
        setFormStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
        })
      }

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }
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

              <form className={styles.form} onSubmit={handleSubmit}>
                {/* Status Message */}
                {formStatus.type && (
                  <div className={`${styles.statusMessage} ${styles[formStatus.type]}`}>
                    {formStatus.type === 'success' ? (
                      <HiCheckCircle className={styles.statusIcon} />
                    ) : (
                      <HiExclamationCircle className={styles.statusIcon} />
                    )}
                    <span>{formStatus.message}</span>
                  </div>
                )}

                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.formLabel}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input 
                    id="fullName" 
                    name="fullName"
                    type="text" 
                    required 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={styles.formInput}
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input 
                    id="email" 
                    name="email"
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="youremail@example.com"
                    className={styles.formInput}
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <input 
                    id="subject" 
                    name="subject"
                    type="text" 
                    required 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject about cooperation opportunities..."
                    className={styles.formInput}
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={6} 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your detailed message here..."
                    className={styles.formTextarea}
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
