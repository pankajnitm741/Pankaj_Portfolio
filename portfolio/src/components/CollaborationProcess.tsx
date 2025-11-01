import { HiVideoCamera, HiCode, HiPencilAlt, HiCheckCircle } from 'react-icons/hi'
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'

export default function CollaborationProcess() {
  const processSteps = [
    {
      icon: HiVideoCamera,
      title: "Communication",
      description: "Prior to initiating any project, I prioritize an initial online meeting with each client for 15-30 minutes. Ensuring a clear understanding of visions, objectives, methodologies, or other concerns, helps us align our goals and expectations from the very beginning."
    },
    {
      icon: HiCode,
      title: "Design & Development",
      description: "Aligning with my clients' specific requirements, preferences, and coding standards. I am dedicated to delivering results that adhere to the industry's best practices while ensuring top-tier quality and optimal performance."
    },
    {
      icon: HiPencilAlt,
      title: "Revision",
      description: "Clear and constructive feedback with detailed and accurate progress updates will be provided based on project milestones, ensuring my clients are well-informed about the status of their goals. This commitment to transparency is a cornerstone of my professional ethics."
    },
    {
      icon: HiCheckCircle,
      title: "Finalize",
      description: "I deeply respect the objectives and dreams of my clients and respond to their further needs at first time. My foremost aim is to cultivate trust and foster lasting connections with my clients, transforming professional partnerships into long-term friendships."
    }
  ]

  return (
    <section id="collaboration" className="py-20 relative overflow-hidden" style={{backgroundColor: '#0f172a'}}>
      {/* Floating colorful cloud blobs for Collaboration Process section */}
      <div className="absolute inset-0 opacity-50 sm:opacity-70">
        {/* Large gradient blob - top right */}
        <div 
          className="absolute top-1/5 right-1/6 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-2000"
        ></div>
        
        {/* Medium gradient blob - center left */}
        <div 
          className="absolute top-1/2 left-1/6 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-6000"
        ></div>
        
        {/* Small gradient blob - bottom center */}
        <div 
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 sm:opacity-15 animate-blob animation-delay-4000"
        ></div>
        
        {/* Extra blob for depth - top left */}
        <div 
          className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-pink-400 via-rose-500 to-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 sm:opacity-15 animate-blob"
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper animation="fade-up" threshold={0.2}>
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white">
              A Timeline of My Dedication
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Collaboration Process
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-500/30 hidden md:block"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <ScrollAnimationWrapper 
                  key={index}
                  animation="fade-left"
                  delay={(index + 1) * 200}
                  threshold={0.1}
                >
                  <div className="relative flex items-start gap-6">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg relative z-10">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
