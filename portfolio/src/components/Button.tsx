import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  style,
  onClick,
  disabled = false,
  type = 'button'
}: ButtonProps) {
  // Map size props to CSS module classes
  const sizeClasses = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large
  }
  
  // Combine CSS module classes
  const combinedClasses = [
    styles.button,
    styles[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ')
  
  return (
    <button
      type={type}
      className={combinedClasses}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
