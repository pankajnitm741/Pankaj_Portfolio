import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

export default function SocialSidebar() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/golupankajgoyal',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/pankaj-goyal-9a17541a6',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:pankajgoyalnitm@gmail.com',
      label: 'Email',
      color: 'hover:text-teal-400'
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/pankajgoyal741',
      label: 'Instagram',
      color: 'hover:text-pink-400'
    }
  ]

  return (
    <div className="fixed left-6 bottom-6 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
              aria-label={social.label}
            >
              <IconComponent className="w-5 h-5" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
