import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade-in' | 'bounce-up'
  delay?: number
  className?: string
  threshold?: number
}

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold })

  const delayClass = delay > 0 ? `animate-delay-${delay}` : ''
  const animationClass = `scroll-animate-${animation}`
  const activeClass = isIntersecting ? 'animate-in' : ''

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${activeClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}
